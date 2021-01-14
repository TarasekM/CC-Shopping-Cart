// libraries
import React, {useState} from 'react';
// business logic
import { getShoppingCartItems, getTotals, setNewQuantityOfAnItem, deleteItem} from './../business_logic/shoppingCartLogic';
// styles
import './App.css';
// components
import ShoppingCart from './../components/ShoppingCart/ShoppingCart';
// language packs
import _languagePack from './../data/EN_language_pack.json';
// shopping card data
import _cart from './../data/cart_products.json';
import _products from './../data/products.json';


function App() {
  const languagePack = _languagePack;

  const [isCartVisible, setIsCartVisible] = useState(true);

  const [items, setItems] = useState(getShoppingCartItems(_cart, _products));

  const [totals, setTotals] = useState(getTotals(items));

  const setQuantityOfItem = (id, quantity) => {
    if (quantity < 0){
      return;
    }
    let newItems = setNewQuantityOfAnItem(id, quantity, items);
    setItems(newItems);
  }

  const updateTotals = () => {
    setTotals(getTotals(items))
  }

  const _deleteItem = (id) => {
    const newItems = deleteItem(items, id);
    setItems(newItems);
    setTotals(newItems);
  }

  const submitedSuccessfully = () => {
    setIsCartVisible(false);
    alert(languagePack.order.submitedSuccessfully);
  }

  return (
    <div className="App">
      <ShoppingCart
        header={languagePack.header}
        mainCardText={languagePack.mainCard}
        shoppingSummaryText={languagePack.shoppingSummary}
        items={items}
        totals={totals}
        isVisible={isCartVisible}
        orderSubmited={submitedSuccessfully}
        setQuantity={setQuantityOfItem}
        updateTotals={updateTotals}
        deleteItem={_deleteItem}
      />
    </div>
  );
}

export default App;
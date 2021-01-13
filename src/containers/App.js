import './App.css';
// components
import ShoppingCart from './../components/ShoppingCart/ShoppingCart';

function App() {
  const languagePack = {
    header: {
      title: "Shopping Cart",
      buttonText: "Proceed to checkout"
    },
    mainCard: {
      productName: 'Product Name',
      unitPrice: 'Unit Price',
      quantity: 'Qty',
      updateButtonText: 'Update Shopping Cart'
    },
  }

  const items = [
    {
      id: "unique",
      image: "./images/headphones.png",
      productName: "Headphones",
      unitPrice: "$11.99",
      quantity: 1
    }
  ]

  return (
    <div className="App">
      <ShoppingCart
        header={languagePack.header}
        mainCardText={languagePack.mainCard}
        items={items}
      />
    </div>
  );
}

export default App;
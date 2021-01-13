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
    }
  }

  return (
    <div className="App">
      <ShoppingCart
        header={languagePack.header}
        mainCardText={languagePack.mainCard}
      />
    </div>
  );
}

export default App;
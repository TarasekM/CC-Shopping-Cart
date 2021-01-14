const getShoppingCartItems = (cart, products) => {

    const shoppingCartItems = cart.map((cartItem) => {
        let _product = products.find(p => p.id === cartItem.productId);
        _product.quantity = cartItem.quantity;
        return _product;
    });

    return shoppingCartItems;
}

const setNewQuantityOfAnItem = (id, quantity, items) => {
    let newItems = [...items];
    let itemToUpdate = {...items.find(i => i.id === id)};
    const index = items.findIndex(i => i.id === id);

    itemToUpdate.quantity = quantity;
    newItems[index] = itemToUpdate;
    return newItems;
}

const getSubtotal = (items) => {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

const getShippingPrice = (subtotal) => {
    if (subtotal > 100){
        return 0;
    }
    return 23.8;
}

const getTotals = (items) => {
    let subtotal = getSubtotal(items);
    let shippingPrice = getShippingPrice(subtotal);
    let grandTotal = subtotal + shippingPrice;

    return {
        subtotal: subtotal.toFixed(2),
        shippingPrice: shippingPrice.toFixed(2),
        grandTotal: grandTotal.toFixed(2)
    };
}

const deleteItem = (items, id) => {
    let newItems = [...items];
    const index = items.findIndex(i => i.id === id);
    newItems.splice(index, 1);
    return newItems;
}

export {
    getShoppingCartItems,
    setNewQuantityOfAnItem,
    getSubtotal,
    getShippingPrice,
    getTotals,
    deleteItem
};
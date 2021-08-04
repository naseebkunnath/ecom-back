module.exports = {
    attributes: {
        quantity: {
            type: 'number',
            required: true,
        },
        price: {
            type: 'number',
            required: true
        },
        // Add a reference to User
        order: {
            model: 'Order'
        },
        product: {
            model: 'Product'
        },
    }
}
module.exports = {
    attributes: {
        totalAmount: {
            type: 'number',
            required: true,
        },
        status: {
            type: 'string',
            required: true
        },
        // Add a reference to OrderItem
        items: {
            collection: 'OrderItem',
            via: 'order'
        },
        customer: {
            model: 'Customer'
        },
    }
}
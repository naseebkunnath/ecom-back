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
        shippingAddress: {
            type: 'json',
            required: true
        },
        paymentMethod: {
            type: 'string',
            required: true
        },
        items: {
            collection: 'OrderItem',
            via: 'order'
        },
        customer: {
            model: 'Customer'
        },
    }
}
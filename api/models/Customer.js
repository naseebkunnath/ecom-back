module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            unique: true,
            required: true
        },
        phone: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true,
            description: 'Securely hashed representation of the customer\'s login password.',
            protect: true
        },
        orders: {
            collection: 'Order',
            via: 'customer'
        }
    },
    customToJSON: function() {
        return _.omit(this, ['createdAt', 'updatedAt']);
    }
}
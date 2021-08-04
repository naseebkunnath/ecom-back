module.exports = {
    attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        description: {
            type: 'string',
            required: true
        },
        price: {
            type: 'number',
            required: true
        },
        image: {
            type: 'string'
        },
    },
    customToJSON: function() {
        return _.omit(this, ['createdAt', 'updatedAt']);
    }
}
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
    }
}
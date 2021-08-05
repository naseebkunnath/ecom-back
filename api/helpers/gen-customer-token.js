const jwt = require("jsonwebtoken");

module.exports = {

    friendlyName: 'Generate Customer Access Token',


    description: 'Generate and return access token with customer data.',


    inputs: {

        customer: {
            type: 'ref',
            readOnly: false
        }

    },


    fn: async function ({ customer }) {
        const token = jwt.sign(
            {
              id: customer.id,
              name: customer.name,
              email: customer.email,
              phone: customer.phone
            },
            '123123'
        );
        return token;
    }
};
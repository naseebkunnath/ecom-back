const jwt = require("jsonwebtoken");

module.exports = {

    friendlyName: 'Verify Customer Access Token',


    description: 'Verify customer access token.',


    inputs: {

        token: {
            type: 'string',
            readOnly: false
        }

    },


    fn: async function ({ token }) {
        try {
            var decoded = jwt.verify(token, '123123');
        } catch (ex) {
            return null;
        }

        return decoded;
    }
};
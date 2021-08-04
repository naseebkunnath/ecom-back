const jwt = require("jsonwebtoken");

module.exports = {


  friendlyName: 'Create',


  description: 'Create customer.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      responseType: '',
    },
  },


  fn: async function (inputs) {
    let customer = inputs;
    customer.password = await sails.helpers.passwords.hashPassword(customer.password);
    customer = await Customer.create(_.pick(customer, [ 'name', 'email', 'phone', 'password' ])).fetch();
  
    const token = jwt.sign(
      {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone
      },
      '123123'
    );
    
    return this.res
      // .header("x-auth-token", token)
      .send({ ..._.pick(customer, ["id", "name", "email", "phone"]), AccessToken: token});
  }

};

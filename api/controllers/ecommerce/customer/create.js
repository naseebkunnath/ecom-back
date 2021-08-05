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
    customerRecord = await Customer.create(_.pick(customer, [ 'name', 'email', 'phone', 'password' ])).fetch();
  
    const token = await sails.helpers.genCustomerToken.with({ customer: customerRecord });
    
    return this.res
      // .header("AccessToken", token)
      .send({ ..._.pick(customerRecord, ["id", "name", "email", "phone"]), AccessToken: token});
  }

};

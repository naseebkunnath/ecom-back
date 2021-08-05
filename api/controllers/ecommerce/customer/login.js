module.exports = {


    friendlyName: 'Login',
  
  
    description: 'Log in using the provided email and password combination.',
  
  
    inputs: {
  
      email: {
        type: 'string',
        required: true
      },
  
      password: {
        type: 'string',
        required: true
      },
  
    },
  
  
    exits: {
  
      success: {
        description: 'You have been logged in successfully.',
      },
  
      badCombo: {
        description: `The provided email and password combination does not
        match any customer in the database.`,
        responseType: 'unauthorized'
      }
  
    },
  
  
    fn: async function ({email, password}) {
  
      // Look up by the email address.
      // (note that we lowercase it to ensure the lookup is always case-insensitive,
      // regardless of which database we're using)
      var customerRecord = await Customer.findOne({
        email: email.toLowerCase(),
      });
  
      // If there was no matching customer, respond thru the "badCombo" exit.
      if(!customerRecord) {
        throw 'badCombo';
      }
  
      // If the password doesn't match, then also exit thru "badCombo".
      await sails.helpers.passwords.checkPassword(password, customerRecord.password)
      .intercept('incorrect', 'badCombo');

      const token = await sails.helpers.customerToken.with({ customer: customerRecord });
  
      return this.res.send(token);
  
    }
  
  };
  
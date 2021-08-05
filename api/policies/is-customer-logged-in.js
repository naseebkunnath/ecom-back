/**
 * is-logged-in
 *
 * A simple policy that allows any request from an authenticated user.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

  // If `req.authCustomer` is set, then we know that this request originated
  // from a logged-in customer.  So we can safely proceed to the next policy--
  // or, if this is the last policy, the relevant action.
  // > For more about where `req.authCustomer` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  if (req.authCustomer) {
    return proceed();
  }

  //--•
  // Otherwise, this request did not come from a logged-in customer.
  return res.unauthorized();

};

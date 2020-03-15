const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput (data) {
  let errors = {};

  // convert empty fields to an empty strong so we can use validator func
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = "Password must be at least 6 character";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
module.exports = class Validator {
  static validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
  }

  static validatePhoneNumber(phone, length) {
    if (!phone || !length) {
      throw new Error("Phone number or lenght is missing");
    }
    const regex = /^[0-9]{`${length}`}$/;

    return regex.test(phone);
  }

  static validatePassword(password, length) {
    return password.length >= `${length}` ? true : false;
  }

  static validateLength(text, length) {
    return text.length < `${length}` ? true : false;
  }
};

module.exports = class Validator {
  static validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
  }

  static validatePhoneNumber(phone) {
    if (!phone) {
      throw new Error("Phone number or length is missing");
    }
    const regex = /^[0-9]{11}$/;

    return regex.test(phone);
  }

  static validatePassword(password, length) {
    if (!password || !length) {
      throw new Error("Password or length is missing");
    }
    return password.length >= `${Number(length)}` ? true : false;
  }

  static validateLength(text, length) {
    if (!text || !length) {
      throw new Error("Password or length is missing");
    }
    return text.length < `${Number(length)}` ? true : false;
  }
};

# autoratify

A zero dependency javascript validation library.

## Usage

`const validate = require('autoratify');`

`console.log(validate.validateEmail('hello@example.com')); // true`

## Avaliable helper methods

1. `validatePhoneNumber(phoneNumber)` - This validates a Nigerian phone number without the international code

2. `validateEmail(email)` - This validates a for a valid email and returns false if the email passed is invalid.

3. `validatePassword(password, length)` - This validates if a password matches the required length.

4. `validateLength(text, length)` - This validates a text specified with the length needed.

## Contributions

To contribute, create a pull request or file an issue and it will be reviewed as soon as possible.

# Copyright

&copy; 2019, Miracle Anyanwu

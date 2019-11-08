import LoginPage from '../page-objects/login';
import { email, password } from '../credentials/credentials';

describe('Login Tests', function () {
  it('Successfull login', function () {
    browser.url('./');
    LoginPage.emailAdress.setValue(email);
    LoginPage.passwordField.setValue(password);
    LoginPage.loginButton.click();
  });
});

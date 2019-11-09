import LoginPage from '../page-objects/login.page';
import Credentials from '../credentials/credentials';

describe('Login Tests', function () {
  it('Try to login with wrong username', function () {
    browser.url('./');
    LoginPage.emailAdress.setValue(Credentials.wrongEmail);
    LoginPage.passwordField.setValue(Credentials.password);
    LoginPage.loginButton.click();

    expect(LoginPage.errorMessage.getText()).to.equal('The Email address you have entered does not match any account. Please try again.');
  });

  it('Try to login with wrong password', function () {
    browser.url('./');
    LoginPage.emailAdress.setValue(Credentials.email);
    LoginPage.passwordField.setValue(Credentials.wrongPassword);
    LoginPage.loginButton.click();

    expect(LoginPage.errorMessage.getText()).to.equal('Unable to login. Please check your email / password and try again');
  });

  it('Try to login without username and password', function () {
    browser.url('./');
    const currentUrl = browser.getUrl();
    LoginPage.emailAdress.setValue(Credentials.noEmail);
    LoginPage.passwordField.setValue(Credentials.noPassword);
    LoginPage.loginButton.click();

    expect(LoginPage.noEmailMessage.getText()).to.equal('Email address cannot be left blank.');
    expect(LoginPage.noPasswordMessage.getText()).to.equal('Password cannot be blank.');
    expect(currentUrl).to.equal('https://portal-qa.contactwise.io/');
  });

  it('Check elements on login page', function () {
    expect(LoginPage.h1LoginElement).to.exist;
    expect(LoginPage.emailAdress).to.exist;
    expect(LoginPage.passwordField).to.exist;
    expect(LoginPage.forgotPassword).to.exist;
    expect(LoginPage.rememberMeCheckbox).to.exist;
    expect(LoginPage.loginButton).to.exist;
    expect(LoginPage.registerLink).to.exist;
  });


  it('Successfull login', function () {
    browser.url('./');
    LoginPage.emailAdress.setValue(Credentials.email);
    LoginPage.passwordField.setValue(Credentials.password);
    LoginPage.loginButton.click();
  });
});

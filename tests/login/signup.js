import SignUpPage from '../page-objects/signup.page';
import LoginPage from '../page-objects/login.page';
import Credentials from '../credentials/credentials';

describe('SignUp Tests', function () {
  it('Check signup link', function () {
    browser.url('./');
    LoginPage.registerLink.click();
    expect(browser.getUrl()).to.equal('https://portal-qa.contactwise.io/account/register');
  });
  it('Try to signup without values provided', function () {
    browser.url('./account/register');
    SignUpPage.companyNameInput.setValue(Credentials.noCompanyName);
    SignUpPage.emailAdressInput.setValue(Credentials.noEmail);
    SignUpPage.passwordInput.setValue(Credentials.noPassword);
    SignUpPage.confirmPasswordInput.setValue(Credentials.noConfirmationPassword);
    SignUpPage.registerButton.click();

    expect(SignUpPage.errorBlankCompany.getText()).to.equal('Company cannot be left blank.');
    expect(SignUpPage.errorBlankEmail.getText()).to.equal('Email address cannot be left blank.');
    expect(SignUpPage.errorBlankPassword.getText()).to.equal('Password cannot be blank.');
    expect(SignUpPage.errorConfirmPassword.getText()).to.equal('Confirm Password cannot be left blank. ');
  });

  it('Try to signup without providing company name', function () {
    // browser.url('./account/register');
    SignUpPage.companyNameInput.setValue(Credentials.noCompanyName);
    SignUpPage.emailAdressInput.setValue(Credentials.email);
    SignUpPage.passwordInput.setValue(Credentials.password);
    SignUpPage.confirmPasswordInput.setValue(Credentials.password);
    SignUpPage.registerButton.click();

    expect(SignUpPage.errorBlankCompany.getText()).to.equal('Company cannot be left blank.');
  });
});

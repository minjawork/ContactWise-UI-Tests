class LoginPage {
  get emailAdress () { return $('#Email'); }
  get passwordField () { return $('#password-field'); }
  get rememberMeCheckbox () { return $('//input[@type="checkbox"]'); }
  get forgotPassword () { return $('//div[@class="float-right"]/a[@href="/account/forgotpassword"]'); }
  get loginButton () { return $('#btnSubmit'); }
  get registerLink () { return $('//div[@class="float-left small"]/a[@href="/account/register"]'); }
}

export default new LoginPage();

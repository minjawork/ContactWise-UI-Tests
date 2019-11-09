class LoginPage {
  get emailAdress () { return $('#Email'); }
  get passwordField () { return $('#password-field'); }
  get rememberMeCheckbox () { return $('//input[@type="checkbox"]'); }
  get forgotPassword () { return $('//div[@class="float-right"]/a[@href="/account/forgotpassword"]'); }
  get loginButton () { return $('#btnSubmit'); }
  get registerLink () { return $('//div[@class="float-left small"]/a[@href="/account/register"]'); }
  get errorMessage () { return $('//form[@id="login"]//ul/li'); }
  get noEmailMessage () { return $('//*[@id="Email-error"]'); }
  get noPasswordMessage () { return $('//*[@id="password-field-error"]'); }
  get h1LoginElement () { return $('//div[@class="row"]/h1'); }
}

export default new LoginPage();

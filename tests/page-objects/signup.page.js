class SignUpPage {
  get companyNameLabel () { return $('//div[@class="form-group"][1]//label'); }
  get companyNameInput () { return $('#Tenant'); }
  get emailAdressLabel () { return $('//div[@class="form-group"][2]//label'); }
  get emailAdressInput () { return $('#emailAddress'); }
  get passwordLabel () { return $('//div[@class="form-group"][3]//label'); }
  get passwordInput () { return $('#password-field'); }
  get confirmPasswordLabel () { return $('//div[@class="form-group"][4]//label'); }
  get confirmPasswordInput () { return $('#ConfirmPassword'); }
  get termsAndConditionsCheckbox () { return $('#TermsAndConditions'); }
  get readHereLink () { return $('//a[@href="/terms-of-service"]'); }
  get loginLink () { return $('//a[@href="/account/index"]'); }
  get registerButton () { return $('#btnRegister'); }
  get errorBlankCompany () { return $('#Tenant-error'); }
  get errorBlankEmail () { return $('#emailAddress-error'); }
  get errorBlankPassword () { return $('#password-field-error'); }
  get errorConfirmPassword () { return $('#ConfirmPassword-error'); }
}

export default new SignUpPage();

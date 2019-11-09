class Credentials {
  get email () { return ('minjatesting@yahoo.com'); }
  get password () { return ('Minjatesting123!'); }
  get wrongEmail () { return ('test@test.com'); }
  get wrongPassword () { return ('1234'); }
  get noEmail () { return (''); }
  get noPassword () { return (''); }
  get noCompanyName () { return (''); }
  get noConfirmationPassword () { return (''); }
}

export default new Credentials();

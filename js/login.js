function socialLogin(provider) {
  Stamplay.User.socialLogin(provider)
}
$('#fb-login').on('click',function() {
  socialLogin('facebook')
})
$('#gg-login').on('click',function() {
  socialLogin('google')
})
$('#login-form').on('submit',function() {
  var credentials = {
    email : $('#email').val(),
    password : $('#password').val()
  }

  Stamplay.User.login(credentials)
    .then(function(res) {
      // success
      window.location = '/'
    }, function(err) {
      // error
      console.log(err)
    })
})

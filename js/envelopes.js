var envelopes = new Vue({
  el: '#envelopes',
  data: {
    envelopes: []
  }
})
Stamplay.Object("envelope").findByCurrentUser()
  .then(function(res) {
    // Success
    console.log(res)
    res.data.forEach(function(envelope) {
      envelopes.envelopes.push(envelope)
      console.log(envelopes.envelopes)
    })
  }, function(err) {
    // Error
    console.log(err)
  })

$('#create-envelope').on('submit', function() {
  var envelope = {
    name : $('#envelope-name').val(),
    balance : $('#envelope-balance').val()
  }

  Stamplay.Object("envelope").save(envelope)
    .then(function(res) {
      // success
      console.log(res)
      envelopes.envelopes.push(res)
      $('#create-envelope')[0].reset()
    }, function(err) {
      // error
      console.log(err)
    })
})

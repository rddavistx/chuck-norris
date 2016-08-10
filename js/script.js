$(document).ready(function() {
  var data = ""
  var joke = "";
  $.ajax({
    url: 'http://api.icndb.com/jokes/random'
  }).done(function(data) {
    console.log(data);
    $('#currentJoke').text(data.value.joke);
    joke = $('#currentJoke').text();
  })

  $('#nextJoke').on('click', function(e) {
    e.preventDefault();
    console.log(joke);
    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
    }).done(function(data) {
      console.log(data);
      $('#previousJoke').append('<li>' + joke + '</li>')
      $('#currentJoke').text(data.value.joke);
      joke = $('#currentJoke').text();
    })

  })








})

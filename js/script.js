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

  $('#name').on('submit', function(e) {
    e.preventDefault();
    var firstName = $('#first').val();
    var lastName = $('#last').val();

    if ($('#first').val() === '') {
      firstName = "Chuck";
    }
    if ($('#last').val() === "") {
      lastName = "Norris"
    }
    $.ajax({
      url: 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName
    }).done(function(data) {
      console.log('was clicked');
      console.log(firstName);
      $('#currentJoke').text(data.value.joke)

    })


  })









})

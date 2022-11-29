var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz3MNWGH8E8UIj1e91JplsUblKL3La5Nwv8zjzjdIO9YIVIa7nec6ux_oRRcjOhzdkh6g/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
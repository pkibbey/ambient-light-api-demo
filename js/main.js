if (!('ondevicelight' in window)) {
  $('.api-not-supported').addClass('visible');
} else {
  $('.api-supported').addClass('visible');
  var $lux = document.getElementById('dl-value');

  window.addEventListener('devicelight', function(event) {
    console.log(event);
    $("#lux").html(event.value);

    if (event.value <= 1) {
      document.body.className = 'dark';
    } else if (event.value < 5) {
      document.body.className = 'mid';
    } else {
      document.body.className = 'light';
    }
  });
}
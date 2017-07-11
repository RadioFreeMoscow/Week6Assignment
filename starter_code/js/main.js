$(document).ready(function() {
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  var citypix = ["url(images/sydney.jpg)","url(images/austin.jpg)"];
  cities.forEach(function(city) {
    var text = "<option>" + city + "</option>";
    $('#city-type').append(text);
  });

  var updatePic = function(event) {
    var city = $(event.target).val().toLowerCase();
    if (city === "atx") { //because Kasun won't let us just rename the filenames like I would do in the real world :)
      $('body').css('background', citypix[1]);
    } else if (city === "syd") {
      $('body').css('background', citypix[0]);
    } else {
      $('body').css('background', 'url(images/' + city + '.jpg)');
      }
    };
  $('#city-type').change(updatePic);
});

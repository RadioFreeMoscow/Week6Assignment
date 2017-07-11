$(document).ready(function() {
var cityArray =
  ["NYC", "SF", "LA", "ATX", "SYD"];

  cityArray.forEach(function(city){
$('#city-type').append("<option> " + city + " </option>");
  });

  var updatePic = function(event){
    var city = $('event.target').val();
      $('body').css('background-image', 'url(images/' + city +'.jpg)');
  };

 // if (cityArray === [0])
 // {
 //     $('body').css('background-image', 'url(images/nyc.jpg)');
 // } else if (cityArray === [1]) {
 //    $('body').css('background-image', 'url(images/sf.jpg)');
 // } else if (cityArray === [2]) {
 //    $('body').css('background-image', 'url(images/la.jpg)');
 // } else if (cityArray === [3]) {
 //   $('body').css('background-image', 'url(images/austin.jpg)');
 // } else if (cityArray === [4]) {
 //    $('body').css('background-image', 'url(images/sydney.jpg)');
 // }

$("#city-type").change(updatePic);

});

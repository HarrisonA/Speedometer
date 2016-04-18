

$(document).ready(function(){

  var start;

  // get random number from a specific range
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


  setInterval(function(){
    start = getRandomArbitrary(-114, 114);

    $('.dial').css('transform', 'rotate('+start+'deg)');

    if ((start>=-114) && (start<=-38)) {
      $('.meter').css('background-color', 'rgba(0, 225, 0, .2)'); /*green*/
    } else if ((start>-38) && (start<=38)) {
      $('.meter').css('background-color', 'rgba(255, 255, 0, .2)'); /*yellow*/
    } else if ((start>38) && (start<=114)) {
      $('.meter').css('background-color', 'rgba(225, 0, 0, .2)'); /*red*/
    }
  }, 4000);


});


/* 0-180 mph Range on the speedometer  is -114 to 114 = 228 degres
228/3 = 76 degrees

0-60 = -114 to -114+76 --> (-38)
61-120 = -39  to (-39+76) (38)
121-180 = 39 to 39+76 (115) 
*/

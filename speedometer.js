$(document).ready(function(){

  var start = -114;

  // get random number from a specific range
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  function setColor(start){

    if ((start>=-114) && (start<=-38)) {
      // green range
      $('.meter').css('background-color', 'rgba(0, 225, 0, .2)');

    } else if ((start>-38) && (start<=38)) {
      //yellow range
      $('.meter').css('background-color', 'rgba(255, 255, 0, .2)');

    } else if ((start>38) && (start<=114)) {
      //red range
      $('.meter').css('background-color', 'rgba(225, 0, 0, .2)');
    }
  }


  var spinOnce = setInterval(function(){

    // On page load, rotate the dial from 0 to 180, every 20 ms
    start++;
    $('.dial').css('transform', 'rotate('+start+'deg)');
    setColor(start);

    // After the dial hits 180, then move it to random speeds
    // (the original prompt)
    if (start>114){
      clearInterval(spinOnce);

      var randomSpeeds = setInterval(function(){
        start = getRandomArbitrary(-114, 114);
        $('.dial').css('transform', 'rotate('+start+'deg)');
        setColor(start);
      }, 4000);
    }

  }, 20);

});


/* 0-180 mph Range on the speedometer  is -114 to 114 = 228 degres
228/3 = 76 degrees

0-60 = -114 to -114+76 --> (-38)
61-120 = -39  to (-39+76) (38)
121-180 = 39 to 39+76 (115)
*/

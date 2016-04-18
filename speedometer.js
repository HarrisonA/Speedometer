

$(document).ready(function(){

  var start = -114;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



  setInterval(function(){
    $('.dial').css('transform', 'rotate('+start+'deg)');
    start = getRandomArbitrary(-114, 76);
    console.log(start);
  }, 400);


});
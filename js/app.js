$(document).ready(function() {
  var moles = $('.mole');
  var score = $('.score');

  var popMole = function() {
    var moleToPop = moles[Math.floor(Math.random() * (9 - 0)) + 0];
    $(moleToPop).animate({
      top: "-=50px"
    }, 2000, function() {
      $(moleToPop).animate({
        top: "+=50px"
      });
    });
  }

  var popMoles = function() {
    setTimeout(function() {
      popMole();
      popMoles();
    }, 2000);
  };

  popMoles();

  moles.on('click', function() {
    score[0].innerHTML = (score[0].innerHTML * 1) + 1;
  });

});

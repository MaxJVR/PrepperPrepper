$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  $('.tooltipped').tooltip({delay: 50});

  $('input#input_text, textarea#textarea1').characterCounter();

  $('select').material_select();

  $('.modal-trigger').leanModal();

  // Pushpin for mini User Card in Achievements
  $('profileCardSmall').pushpin({ top: $('.row').offset().top });

  var options = [

   {selector: 'testscroll', offset: 400, callback: 'Materialize.showStaggeredList("testscroll")' },

   ];
    Materialize.scrollFire(options);

});



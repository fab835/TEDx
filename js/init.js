(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();   
    $('.modal').modal();
    $('ul.tabs').tabs();
    $('.slider').slider();
    $('.carousel').carousel({
        padding: 200    
	});
	autoplay().delay(4500);

    $('.target').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });

    

  }); // end of document ready
})(jQuery); // end of jQuery name space


function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

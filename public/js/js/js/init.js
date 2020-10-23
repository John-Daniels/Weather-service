(function($){
  $(function(){

   	// Side Nav
    $('.sidenav').sidenav({
      menuWidth: 300,
      closeonClick: true
    });



    // materialbox
    $('.materialboxed').materialbox();


     // scrollspy
    $('.scrollspy').scrollSpy({
    	throttle: 100,
    	scrollOffset: 45
    });

    //parallax
    $('.parallax').parallax();


    //button
    $('.fixed-action-btn').openFab({
      
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });



$(document).ready(function(){

  // ******************************
  // UNDER ARBEID MELDING > FJERNES FØR DEPLOY
  if ($(window).width() < 1100) {
     alert('Visning for mobil og tablet er under arbeid');
  }




  if ($('.kos-seminar-rectangle').length > 0) {
    $('.kos-seminar-nopost').hide();
  } else {
    $('.kos-seminar-nopost').show();
  }


  // BOOTRSTRAP POPOVER
  $('[data-toggle="popover"]').popover();
  // BOOTRSTRAP POPOVER > Prevent scroll to top when clicking link
  $('#wcag-link').on('click', function(e) {
    e.preventDefault(); return true;
  });


  // BOOTSTRAP SCROLLSPY SCROLL
  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 120
  });

  // BOOTSTRAP SCROLLSPY CLICK HANDLER
  // Add smooth scrolling on all links inside the navbar
   $(".nav-sub-click").on('click', function(event) {
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     }  // End if
   });



  // HIDE LARGE MAP CONTACT PAGE
  var $window = $(window),
      $document = $(document),
      map = $('.kontakt-map');

  map.css({
      opacity: 1
  });

  $window.on('scroll', function () {
      if (($window.scrollTop() + $window.height()) == $document.height()) {
          map.stop(true).animate({
              opacity: 0
          }, 300);
      } else {
          map.stop(true).animate({
              opacity: 1
          }, 300);
      }
  });

  // POPUP ORDER BTN
  $('.landing-bottom-right').on( 'click', function(){
    $('.landing-popup-order-wrapper').fadeIn();
    $('body').css('overflow', 'hidden');
  });

  $('.landing-popup-order-close_btn, .landing-popup-order-wrapper').on( 'click', function(){
    $('.landing-popup-order-wrapper').fadeOut();
    $('body').css('overflow', 'visible');
  });


  // HIDE # AT INFO PAGE
    $('.hashtagremove').each(function(){ // Loop through all inputs
      var varText = $(this).text();
      $(this).text(varText.replace('#', ''));
    });

    $('.hashtagremoveId').each(function(){ // Loop through all inputs
      var varId = $(this).attr('id').replace('#', '');
      $(this).attr('id', varId);
    });


  // ADD _TARGET TO LINKS
  $("a[href^=http]").each(function(){
      var excluded = [
         'ullernklinikken.no/info/',
         'ullernklinikken.iux.no/info/'
         // format for whitelist: 'google.com', 'apple.com', 'myawesomeblog.com'
         // add your excluded domains here
         ];
      for(i=0; i<excluded.length; i++) {
         if(this.href.indexOf(excluded[i]) != -1) {
            return true;
         }
      }
      if(this.href.indexOf(location.hostname) == -1) {
           $(this).click(function() { return true; });
           $(this).attr({
               target: "_blank"
           });
           $(this).click();
      }
   });

   
});

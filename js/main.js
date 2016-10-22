$(document).ready(function() {
  $(".mobile-nav-toggle").on("click", function (e) {
    var $this = $(this),
        $selectors = $(".mobile-nav");

    $this.toggleClass("is-open");
    $selectors.toggleClass("is-open");
  });
   
  $(".mobile-nav li a").on("click", function (e) {
    $(".mobile-nav").removeClass("is-open");
    $(".mobile-nav-toggle").removeClass("is-open");
  });
  
  $(".logo-image").on("click", function() {
     $(".mobile-nav").removeClass("is-open");
  });
   
  
  // Find all YouTube videos
  var $allVideos = $("iframe[src^='//www.youtube.com']"),

      // The element that is fluid width
      $fluidEl = $("body");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // When the window is resized
  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

  // Kick off one resize to fix all videos on page load
  }).resize();
  
  //smooth scrolling
  $('a[href^="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
  
});
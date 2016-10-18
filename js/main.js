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
 })
});

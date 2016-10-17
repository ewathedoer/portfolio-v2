 $(document).ready(function() {
  $(".mobile-nav-toggle").on("click", function (e) {
    var $this = $(this),
        $selectors = $(".mobile-nav");

    $this.toggleClass("is-open");
    $selectors.toggleClass("is-open");
  });
});

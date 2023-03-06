(function ($) {
  $(function () {


    $(".contact").click(function () {
      $("html, body").animate(
        { scrollTop: $(".contact--scroll").offset().top },
        1000
      );
    });

    $(".date").click(function () {
      $("html, body").animate(
        { scrollTop: $(".date--scroll").offset().top },
        1000
      );
    });

    $(".homework").click(function () {
      $("html, body").animate(
        { scrollTop: $(".homework--scroll").offset().top },
        1000
      );
    });

   

   


    

    
  });
})(jQuery);

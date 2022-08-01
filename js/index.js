(function () {
  $(document).ready(function () {
    $(".monitor .tabs").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass();
      var index = $(this).index();
      $(".monitor .content").eq(index).show().siblings(".content").hide();
    });

    $(".monitor .marquee").each(function () {
      var rows = $(this).children().clone();
      $(this).append(rows);
    });
  });
})();

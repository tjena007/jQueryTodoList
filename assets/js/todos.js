//Mark as complete todos
$("li").click(function () {
  //   //if li is gray
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     $(this).css({
  //       //cant use hyphen. use camel case for textdecoration instead
  //       textDecoration: "none",
  //       color: "black",
  //     });
  //   } else {
  //     $(this).css({
  //       //cant use hyphen. use camel case for textdecoration instead
  //       textDecoration: "line-through",
  //       color: "gray",
  //     });
  //   }
  $(this).toggleClass("complete");
});

//Delete Todos
$("span").click(function () {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

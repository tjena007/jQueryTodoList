//Mark as complete todos
$("ul").on("click", "li", function () {
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
$("ul").on("click", "span", function () {
  $(this)
    .parent()
    .fadeOut(500, function () {
      //selects the parent element
      $(this).remove();
    });
});

$("input[type = 'text']").keypress(function (e) {
  if (e.which === 13) {
    todoText = $(this).val();
    if (!todoText.replace(/\s/g, "").length) {
      alert("Add a todo!");
    } else {
      $(this).val("");
      $("ul").append(
        "<li><span><i class='far fa-trash-alt'></i></span> " +
          todoText +
          "</li>"
      );
    }
  }
});

// when document is ready, load the reusuable header

$(document).ready(function () {
  console.log("Mouseover content to see color change");

  $("p").on({
    mouseenter: function () {
      $(this).css("color", "blue");
    },
    mouseleave: function () {
      $(this).css("color", "black");
    },
  });
});

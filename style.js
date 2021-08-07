$(document).ready(function () {
  $(".btn").click(function () {
    const name = $("#namehere").val();
    $(".imgchange").attr("src", `https://joeschmoe.io/api/v1/${name}`);
  });
});

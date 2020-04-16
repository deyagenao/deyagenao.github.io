// function for making project description visibile on hover
// $(".project").hover(function(){
//   // var projectNum = $(this).data("num");
//   $(".project-description").show();
// }, function() {
//   $(".project-description").hide();
// })

$(".project-description").hover(function(){
  // var projectNum = $(this).data("num");
  $(".project-description").css("background-color", "grey");
}, function() {
  $(".project-description").css("background-color", "1.0");
})
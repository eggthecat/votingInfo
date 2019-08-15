

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var age = parseInt($("#userInput1").val());
    console.log(age)
    if (age<18){
      $("#formOne").append("<h1> Please try again when youre 18 :( </h1>")
    }
    else {
      $(".hidden").show()
    }
  });
  $("#formTwo").submit(function(event){
    event.preventDefault();
    var checked = $("input:radio[name=wang]:checked").val();
    // var userJoe = $("input:radio[name=wang]:checked").val();
    // var userJose = $("input:radio[name=wang]:checked").val();
    // var userWang = $("input:radio[name=wang]:checked").val();
    $("#formTwo").append("<h1>" + checked + "</h1>")
  });
});

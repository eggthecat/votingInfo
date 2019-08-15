

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var age = parseInt($("#userInput1").val());
    console.log(age)
    if (age<18){
  $(".okok").show();

    }
    else {
      $(".hidden").show()
      $(".okok").hide();
    }
  });
  $("#formTwo").submit(function(event){
    event.preventDefault();
    var checked = $("input:radio[name=wang]:checked").val();
    $("#formTwo").append("<h1>" + checked + "</h1>")
  });
});

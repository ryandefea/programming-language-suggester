$(document).ready(function() {

  $("form#languagematch").submit(function(event){

    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const dog = $("select#dog").val();
    const color = $("select#color").val();
    const food = $("select#food").val();

    


  event.preventDefault();
  });

});
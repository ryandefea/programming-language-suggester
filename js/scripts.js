function finalAnswer() {
  const age = parseInt($("input#age").val());
  const gender = $("select#gender").val();
  const dog = $("select#dog").val();
  const color = $("select#color").val();
  const food = $("select#food").val()

  let answer 

  if (age < 30 && gender === "male" || dog === "Husky" && color === "red" || food === "salad" ) {
    answer = "ruby";
  } else if (age > 30 && gender === "female" || dog === "Beagle" && color === "blue" || food === "wings" ) {
    answer = "javaScript";
  } else if (age === 30 && gender === "female" || dog === "Pug" && color === "green" || food === "ribs" ) {
    answer = "c#"; 
  } else {
    answer ="css"
  } 
return answer;
};



$(document).ready(function () {
  $("form#languagematch").submit(function(event){
    event.preventDefault();
    $("#match").text(finalAnswer());
  });
});

$(document).ready(function () {
  $("button#hide-match").click(function(event) {
    event.preventDefault();
    $("#match").text("");
    $("#age").val("");
    $("#gender").val("");
    $("#dog").val("");
    $("#color").val("");
    $("#food").val("");
  });
});

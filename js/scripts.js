function ruby() {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const dog = $("select#dog").val();
    const color = $("select#color").val();
    const food = $("select#food").val();


    if (age < 30 && gender === "male" || dog === "Husky" && color === "red" || food === "salad" ) {
      return true;
    };
};

function javaScript() {
  const age = parseInt($("input#age").val());
  const gender = $("select#gender").val();
  const dog = $("select#dog").val();
  const color = $("select#color").val();
  const food = $("select#food").val();


  if (age > 30 && gender === "female" || dog === "Beagle" && color === "blue" || food === "wings" ) {
    return true;
  };
};

function cSharp() {
  const age = parseInt($("input#age").val());
  const gender = $("select#gender").val();
  const dog = $("select#dog").val();
  const color = $("select#color").val();
  const food = $("select#food").val();


  if (age = 30 && gender === "female" || dog === "Pug" && color === "green" || food === "ribs" ) {
    return true;
  };
};


function finalAnswer(){
  const test1 = ruby();
  const test2 = javaScript();
  const test3 = cSharp();
  if (test1 === true) {
    return "ruby";
  } else if (test2 === true) {
    return "JavaScript";
  } else if (test3 === true) {
    return "C#";
  } else {
    return "Try again later";
  }
};


// UI
$(document).ready(function () {
  
  
  $("form#languagematch").submit(function(event){
    event.preventDefault();
  console.log("hello");
    const age = parseInt($("input#age").val());
    $("#match").text(finalAnswer());
  });
});

$(document).ready(function () {
  $("button#hide-match").click(function(event) {
    event.preventDefault();
    $("#match").text("");
    $("#age").val("");
  });
});

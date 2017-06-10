//back end

var conditional = function (q1, q2, q3, q4, q5) {
  if (q1 === "java" && q3 === "ruby" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "ruby" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "java" && q3 === "java") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "c" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "c" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "java" && q3 === "php" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "php" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "java" && q3 === "css" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "java" && q3 === "css" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  }
}


// front end
$(document).ready (function () {
  $("form#track-quiz").submit(function (event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    conditional(question1, question2, question3, question4, question5);
    event.preventDefault();
  });
});

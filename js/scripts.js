//back end

var conditional = function (q1, q2, q3, q4, q5) {
// java as first answer
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
// php as first answer
  } else if (q1 === "php" && q3 === "ruby" && q5 === "easy") {
      $("#track-quiz").hide("slow");
      $("#php").show();
  } else if (q1 === "php" && q3 === "ruby" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "php" && q3 === "java" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "php" && q3 === "java" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "c" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "c" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "php" && q3 === "php") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "css" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "css" && q5 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#css").show();
// ruby as first answer
  } else if (q1 === "ruby" && q3 === "ruby") {
      $("#track-quiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "java" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "java" && q4 === "easy") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "ruby" && q3 === "c" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "ruby" && q3 === "c" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "php" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "php" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "ruby" && q3 === "css" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "ruby" && q3 === "css" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#ruby").show();
// css as first answer
  } else if (q1 === "css" && q3 === "ruby" && q5 === "challenging") {
      $("#track-quiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "css" && q3 === "ruby" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "java" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "java" && q5 === "challenging") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "css" && q3 === "c" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "c" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "css" && q3 === "php" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "css" && q3 === "php" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "css") {
    $("#track-quiz").hide("slow");
    $("#css").show();
// c as first answer
  } else if (q1 === "c" && q3 === "ruby" && q5 === "challenging") {
      $("#track-quiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "c" && q3 === "ruby" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "java" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "java" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#java").show();
  } else if (q1 === "c" && q3 === "c") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "php" && q4 === "backend") {
    $("#track-quiz").hide("slow");
    $("#php").show();
  } else if (q1 === "c" && q3 === "php" && q4 === "frontend") {
    $("#track-quiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "css" && q5 === "easy") {
    $("#track-quiz").hide("slow");
    $("#css").show();
  } else if (q1 === "c" && q3 === "css") && q5 === "challenging" {
    $("#track-quiz").hide("slow");
    $("#c").show();
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

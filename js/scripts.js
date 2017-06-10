//back end

var conditional = function (q1, q2, q3, q4, q5) {
// java as first answer
  if (q1 === "java" && q3 === "ruby" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "ruby" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "java" && q3 === "java") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "c" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "c" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "java" && q3 === "php" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "java" && q3 === "php" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "java" && q3 === "css" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "java" && q3 === "css" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
// php as first answer
  } else if (q1 === "php" && q3 === "ruby" && q5 === "easy") {
      $("#trackQuiz").hide("slow");
      $("#php").show();
  } else if (q1 === "php" && q3 === "ruby" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "php" && q3 === "java" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "php" && q3 === "java" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "c" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "c" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "php" && q3 === "php") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "css" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "php" && q3 === "css" && q5 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
// ruby as first answer
  } else if (q1 === "ruby" && q3 === "ruby") {
      $("#trackQuiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "java" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "java" && q4 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "ruby" && q3 === "c" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "ruby" && q3 === "c" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "php" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
  } else if (q1 === "ruby" && q3 === "php" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "ruby" && q3 === "css" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "ruby" && q3 === "css" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#ruby").show();
// css as first answer
  } else if (q1 === "css" && q3 === "ruby" && q5 === "challenging") {
      $("#trackQuiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "css" && q3 === "ruby" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "java" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "java" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "css" && q3 === "c" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "c" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "css" && q3 === "php" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "css" && q3 === "php" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "css" && q3 === "css") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
// c as first answer
  } else if (q1 === "c" && q3 === "ruby" && q5 === "challenging") {
      $("#trackQuiz").hide("slow");
      $("#ruby").show();
  } else if (q1 === "c" && q3 === "ruby" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "java" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "java" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#java").show();
  } else if (q1 === "c" && q3 === "c") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "php" && q4 === "backend") {
    $("#trackQuiz").hide("slow");
    $("#php").show();
  } else if (q1 === "c" && q3 === "php" && q4 === "frontend") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else if (q1 === "c" && q3 === "css" && q5 === "easy") {
    $("#trackQuiz").hide("slow");
    $("#css").show();
  } else if (q1 === "c" && q3 === "css" && q5 === "challenging") {
    $("#trackQuiz").hide("slow");
    $("#c").show();
  } else {
      alert ("Please select your answers")
  }
}


// front end
// start quiz
$(document).ready (function () {
  $("#startQuiz").click(function() {
    $(".quiz").show("slow");
    $("#startQuiz").hide();
  });
//Buttons after answer reveal
  $(".retakeQuiz").click(function () {
    location.reload();
  });
  $("#learnJava").click(function () {
    window.open("https://www.java.com/en/", "_blank")
  });
  $("#learnPHP").click(function () {
    window.open("http://php.net/manual/en/intro-whatis.php", "_blank")
  });
  $("#learnRuby").click(function () {
    window.open("https://www.ruby-lang.org/en/downloads/", "_blank")
  });
  $("#learnCSS").click(function () {
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")
  });
  $("#learnC").click(function () {
    window.open("https://docs.microsoft.com/en-us/dotnet/csharp/csharp", "_blank")
  });

  $("form#trackQuiz").submit(function (event) {
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    conditional(question1, question2, question3, question4, question5);
    event.preventDefault();
  });
});

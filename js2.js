
var st_score = [];

//function to get values from form
function getScore() {
  st_score = [];
  var name_1 = document.student_form.name1.value.trim();
  var name_2 = document.student_form.name2.value.trim();
  var name_3 = document.student_form.name3.value.trim();
  var name_4 = document.student_form.name4.value.trim();
  var name_5 = document.student_form.name5.value.trim();
  var name_6 = document.student_form.name6.value.trim();

  var score_1 = document.student_form.score1.value.trim();
  var score_2 = document.student_form.score2.value.trim();
  var score_3 = document.student_form.score3.value.trim();
  var score_4 = document.student_form.score4.value.trim();
  var score_5 = document.student_form.score5.value.trim();
  var score_6 = document.student_form.score6.value.trim();

  //Check whether there any empty fields
  if (name_1 === "" || name_2 === "" || name_3 === "" || name_4 === "" || name_5 === "" || name_6 === "" || score_1 === "" || score_2 === "" || score_3 === "" || score_4 === "" || score_5 === "" || score_6 === "") {
    alert("Please complete the form");
  } else {

    //Check whether there any non numeric values
    if (isNaN(score_1)||isNaN(score_2)||isNaN(score_3)||isNaN(score_4)||isNaN(score_5)||isNaN(score_6)) {
      alert("Scores should be numeric")
    }
    else{

      //Check the score range
      if ((score_1 < 0 || score_1 > 100) || (score_2 < 0 || score_2 > 100)   || (score_3 < 0 || score_3 > 100)  || (score_4 < 0 || score_4 > 100)  || (score_5 < 0 || score_5 > 100)  || (score_6 < 0 || score_6 > 100)  ) {
        alert("Scores should between 0 and 100")
      }
      else {
        st_score.push([name_1, parseInt(score_1)]);
        st_score.push([name_2, parseInt(score_2)]);
        st_score.push([name_3, parseInt(score_3)]);
        st_score.push([name_4, parseInt(score_4)]);
        st_score.push([name_5, parseInt(score_5)]);
        st_score.push([name_6, parseInt(score_6)]);
      }
      
    }
    

  }


 
 
}

function displayScores() {
  var studentList = "";
  for (var i = 0; i < st_score.length; i++) {
    studentList += st_score[i][0] + " " + st_score[i][1];
    studentList += "<br>";
  }
  document.getElementById('student_list').innerHTML = studentList;

  var studentResult = "";
  for (var i = 0; i < st_score.length; i++) {
    if (st_score[i][1] > 90) {
      studentResult += st_score[i][0] + "  " + st_score[i][1];
      studentResult += "<br>";
    }
  }
  document.getElementById('student_A').innerHTML = studentResult;

  var totalScore = 0;
  for (var i = 0; i < st_score.length; i++) {
    totalScore += st_score[i][1];
  }
  var averageScore = totalScore / st_score.length;
  averageScore = averageScore.toFixed(2)
  document.getElementById('student_total').innerHTML = "Total Score is " + totalScore;
  document.getElementById('student_average').innerHTML = "Average Score is " + averageScore;

  var st_score2 = st_score.slice(); // Create a copy of st_score
  st_score2.sort(function (a, b) {
    return b[1] - a[1]; // Sort by descending score
  });

  var studentList2 = "";
  for (var i = 0; i < st_score2.length; i++) {
    studentList2 += st_score2[i][0] + " " + st_score2[i][1];
    studentList2 += "<br>";
  }
  document.getElementById('student_sort').innerHTML = studentList2;
}



// copy defualt values when click default button
function copyScore() {
  document.student_form.name1.value = "Wang";
  document.student_form.name2.value = "Chen";
  document.student_form.name3.value = "Zhao";
  document.student_form.name4.value = "Liu";
  document.student_form.name5.value = "Yamamoto";
  document.student_form.name6.value = "Tanaka";

  document.student_form.score1.value = 80;
  document.student_form.score2.value = 75;
  document.student_form.score3.value = 92;
  document.student_form.score4.value = 60;
  document.student_form.score5.value = 91;
  document.student_form.score6.value = 82;
}



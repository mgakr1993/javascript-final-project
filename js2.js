
var st_score = [
	["Wang",80],
	["Chen",75],
	["Zhao",92],
	["Liu",60],
	["Yamamoto",91],
	["Tanaka",82]
	]


//Get the all score

document.addEventListener("DOMContentLoaded", function () {

    var studentList = "";

    for (var i = 0; i < st_score.length; i++) {
        studentList += st_score[i][0] + " " + st_score[i][1];
        studentList += "<br>";
        
    }

    document.getElementById('student_list').innerHTML = studentList;




    var studentResult = ""

    for (var i = 0; i < st_score.length; i++) {
		  if (st_score[i][1] > 90) {
		  	studentResult += st_score[i][0] + "  " + st_score[i][1]
		  	studentResult += "<br>"

		  }
		}
	document.getElementById('student_A').innerHTML = studentResult;



	var totalScore=0;
		for (var i = 0; i < st_score.length; i++) {
		  totalScore += st_score[i][1];
		}
	var averageScore = totalScore/st_score.length
	document.getElementById('student_total').innerHTML = "Total Score is " + totalScore;
	document.getElementById('student_average').innerHTML = "Average Score is " + averageScore;


	var st_score2 = st_score

	for(var i=0;i<st_score2.length;i++){
			for (var j=i+1;j<st_score2.length;j++){
				if (st_score2[i][1] < st_score2[j][1]){
					m=st_score2[i][1];
					n=st_score2[i][0];
					st_score2[i][1]=st_score2[j][1];
					st_score2[i][0]=st_score2[j][0];
					st_score2[j][1]=m;
					st_score2[j][0]=n;
					
				}

			}

		}


	var studentList2 = "";

    for (var i = 0; i < st_score2.length; i++) {
        studentList2 += st_score2[i][0] + " " + st_score2[i][1];
        studentList2 += "<br>";
        
    }

    document.getElementById('student_sort').innerHTML = studentList2;




});




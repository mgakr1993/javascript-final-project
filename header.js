

var imgno = 1
		var btn = imgno

  		function slideImage(btn){

  			if (btn==1){
					document.getElementById("img01").src = "img/img02.png"
					document.getElementById("img02").src = "img/img01.png"
					document.getElementById("img03").src = "img/img01.png"
					document.getElementById("img04").src = "img/img01.png"
					document.getElementById("img05").src = "img/img01.png"
					document.getElementById("img06").src = "img/img01.png"
					document.getElementById("main_img").src = "img/img03.jpg"

					imgno = 1
					

				}
			else if (btn==2){
					document.getElementById("img01").src = "img/img01.png"
					document.getElementById("img02").src = "img/img02.png"
					document.getElementById("img03").src = "img/img01.png"
					document.getElementById("img04").src = "img/img01.png"
					document.getElementById("img05").src = "img/img01.png"
					document.getElementById("img06").src = "img/img01.png"
					document.getElementById("main_img").src = "img/img04.jpg"

					imgno = 2
					


				}

			else if (btn==3){
					document.getElementById("img01").src = "img/img01.png"
					document.getElementById("img02").src = "img/img01.png"
					document.getElementById("img03").src = "img/img02.png"
					document.getElementById("img04").src = "img/img01.png"
					document.getElementById("img05").src = "img/img01.png"
					document.getElementById("img06").src = "img/img01.png"
					document.getElementById("main_img").src = "img/img05.jpg"

					imgno = 3
					
				}

				
			else if (btn==4){
					document.getElementById("img01").src = "img/img01.png"
					document.getElementById("img02").src = "img/img01.png"
					document.getElementById("img03").src = "img/img01.png"
					document.getElementById("img04").src = "img/img02.png"
					document.getElementById("img05").src = "img/img01.png"
					document.getElementById("img06").src = "img/img01.png"
					document.getElementById("main_img").src = "img/img06.jpg"

					imgno = 4
					
				}

			else if (btn==5){
					document.getElementById("img01").src = "img/img01.png"
					document.getElementById("img02").src = "img/img01.png"
					document.getElementById("img03").src = "img/img01.png"
					document.getElementById("img04").src = "img/img01.png"
					document.getElementById("img05").src = "img/img02.png"
					document.getElementById("img06").src = "img/img01.png"
					document.getElementById("main_img").src = "img/img07.jpg"

					imgno = 5
					
				}

			else if (btn==6){
					document.getElementById("img01").src = "img/img01.png"
					document.getElementById("img02").src = "img/img01.png"
					document.getElementById("img03").src = "img/img01.png"
					document.getElementById("img04").src = "img/img01.png"
					document.getElementById("img05").src = "img/img01.png"
					document.getElementById("img06").src = "img/img02.png"
					document.getElementById("main_img").src = "img/img08.jpg"

					imgno = 6
					
				}
			
			
  		}


		function printCounter(){

			if (imgno <= 6) {
				
				btn = imgno
				slideImage(btn)	

				if (imgno<6) {
					imgno++
				}
				else {
					imgno = 1
				}
				
			}
			
		}

		setInterval(printCounter,2000)



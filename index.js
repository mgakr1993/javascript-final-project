
function viewContent(btn2){
	if (btn2==1) {
		document.getElementById("per_detail").style.display="block"
		document.getElementById("button2").style.display="block"
		document.getElementById("button1").style.display="none"
	}

	else if (btn2==2){
		document.getElementById("per_detail").style.display="none"
		document.getElementById("button2").style.display="none"
		document.getElementById("button1").style.display="block"
	}

	else if (btn2==3) {
		document.getElementById("wor_exp").style.display="block"
		document.getElementById("button4").style.display="block"
		document.getElementById("button3").style.display="none"
	}
	
	else if (btn2==4){
		document.getElementById("wor_exp").style.display="none"
		document.getElementById("button4").style.display="none"
		document.getElementById("button3").style.display="block"
	}

	else if (btn2==5) {
		document.getElementById("kcgi").style.display="block"
		document.getElementById("button6").style.display="block"
		document.getElementById("button5").style.display="none"
	}
	
	else if (btn2==6){
		document.getElementById("kcgi").style.display="none"
		document.getElementById("button6").style.display="none"
		document.getElementById("button5").style.display="block"
	}
}
		
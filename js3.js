function selectProduct(btn){
	
	if (btn==1){
		imgsrc = document.getElementById("grid1").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "White"
	}
	else if (btn==2){
		imgsrc = document.getElementById("grid2").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "Black"
	}

	else if (btn==3){
		imgsrc = document.getElementById("grid4").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "Blue"
	}

	else if (btn==4){
		imgsrc = document.getElementById("grid5").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "Yellow"
	}

	else if (btn==5){
		imgsrc = document.getElementById("grid6").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "Purple"
	}

	else if (btn==6){
		imgsrc = document.getElementById("grid7").innerHTML
		document.getElementById("grid3").innerHTML = imgsrc
		color = "Red"
	}
}



function showcolor	(){
	try{
	alert(color + " color T-shirt with a collar and short sleeves has been successfully added to the basket")
} catch(error){
	alert("No selection found")
}
	
}




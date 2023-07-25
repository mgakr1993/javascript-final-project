

function displayUser(single_line){
	if (document.single_line.username.value !="") {
		alert("You entered user name is " + "'" + document.single_line.username.value + "'") 
	}
	else{
		alert("Nothing entered in username")
	}
	
	return
}


function displayAbout(multiple_line){
	if (document.multiple_line.about.value !="") {
		alert("Brief Introduction " + "\n" + "'" + document.multiple_line.about.value + "'") 
	}
	else{
		alert("Nothing entered in about you")
	}
	
	return
}


function displayRadio(radio){
	var ischecked = false
	for (var i=0;i<document.radio.major.length;i++){

		if (document.radio.major[i].checked) {
			alert ("Your major is "  + document.radio.major[i].value)
			ischecked = true
			return
		}
	}

	if (!ischecked) {
		alert("Please select your major")
	}
}



function displayCheck(checkbox){
	var item = ""
	var ischecked = false
	for (var i=0;i<document.checkbox.language.length;i++){

		if (document.checkbox.language[i].checked) {
			item += document.checkbox.language[i].value + "\n"
			ischecked = true
		
		}

	}

	

	if (!ischecked) {
		alert("Please select your languages")
	}

	else{
		alert("Your languages are : \n" + item)
	}
}



function displaySingleOption() {
    var selectElement = document.getElementsByName("KCGgroup")[0];
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    alert("Your desired KCG group is: " + selectedOption);
}



function displayMultipleOption() {
    var selectElement = document.getElementsByName("instrument")[0];
    var selectedOptions = [];

    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            selectedOptions.push(selectElement.options[i].value);
        }
    }

    if (selectedOptions.length > 0) {
        var selectedOptionsStr = selectedOptions.join(", ");
        alert("Your favorite instrument(s) are: " + selectedOptionsStr);
    } else {
        alert("Please select at least one favorite instrument.");
    }
}



function selectCity(btn3){
	if (btn3 === 1){
		document.getElementById("select_image").innerHTML = "<img style='width:100%; height:100%' src='img/img22.jpg' >"
	}

	else if (btn3 === 2){
		document.getElementById("select_image").innerHTML = "<img style='width:100%; height:100%' src='img/img23.jpg' >"
	}

	else if (btn3 === 3){
		document.getElementById("select_image").innerHTML = "<img style='width:100%; height:100%' src='img/img24.png' >"
	}
}
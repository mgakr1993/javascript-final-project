
var imgLeftEnd = 0

document.addEventListener('DOMContentLoaded', function () {
    var contentWidth = document.getElementById("content");
        imgLeftEnd =  parseInt(contentWidth.clientWidth) - 100;

   
});

imgLeftStart = 0;
imgLeft = imgLeftStart;
imgTop = 0;
moveStep = 10;
moveSpeed = 100;

function moveGif(){
	document.getElementById("gif1").style.top = imgTop + "px";
	document.getElementById("gif1").style.left = imgLeft + "px";

	if (imgLeftEnd-imgLeftStart > 0){
		imgLeft += moveStep;
		if (imgLeft > imgLeftEnd) {
			imgLeft = imgLeftStart;
		}
	}

	else{
		imgLeft-=moveStep;
		if (imgLeft < imgLeftEnd){
			imgLeft=imgLeftStart;
		}
	}

	setTimeout("moveGif()",moveSpeed);

}





var imgLeftEnd2 = 0

document.addEventListener('DOMContentLoaded', function () {
    var contentWidth2 = document.getElementById("content");
        imgLeftEnd2 =  parseInt(contentWidth2.clientWidth) - 200;

   
});

imgLeftStart2 = 0;
imgLeft2 = imgLeftStart2;
imgTop2 = 0;
moveStep2 = 10;
moveSpeed2 = 120;

function moveGif2(){
	document.getElementById("gif2").style.top = imgTop2 + "px";
	document.getElementById("gif2").style.left = imgLeft2 + "px";

	if (imgLeftEnd2-imgLeftStart2 > 0){
		imgLeft2 += moveStep2;
		if (imgLeft2 > imgLeftEnd2) {
			imgLeft2 = imgLeftStart2;
		}
	}

	else{
		imgLeft2-=moveStep2;
		if (imgLeft2 < imgLeftEnd2){
			imgLeft2=imgLeftStart2;
		}
	}

	setTimeout("moveGif2()",moveSpeed2);

}





var imgLeftEnd3 = 0

document.addEventListener('DOMContentLoaded', function () {
    var contentWidth3 = document.getElementById("content");
        imgLeftEnd3 =  parseInt(contentWidth3.clientWidth) - 300;

   
});

imgLeftStart3 = 0;
imgLeft3 = imgLeftStart3;
imgTop3 = 0;
moveStep3 = 10;
moveSpeed3 = 120;

function moveGif3(){
	document.getElementById("gif3").style.top = imgTop3 + "px";
	document.getElementById("gif3").style.left = imgLeft3 + "px";

	if (imgLeftEnd3-imgLeftStart3 > 0){
		imgLeft3 += moveStep3;
		if (imgLeft3 > imgLeftEnd3) {
			imgLeft3 = imgLeftStart3;
		}
	}

	else{
		imgLeft3-=moveStep3;
		if (imgLeft3 < imgLeftEnd3){
			imgLeft3=imgLeftStart3;
		}
	}

	setTimeout("moveGif3()",moveSpeed3);

}


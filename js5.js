

function initialize() {

	var opt={
			zoom:8,
			center:new google.maps.LatLng(7.747083, 81.072302),
			mapTypeId:google.maps.MapTypeId.ROADMAP
	};


	var mm=document.getElementById('mymap');


	var map = new google.maps.Map(mm,opt);
		

	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(7.466630, 80.623219),
		map:map,
		title:"Matale, Hometown"
	
	})

	var info1 = new google.maps.InfoWindow({
		content:"Matale is a major city in Central Province, Sri Lanka. It is the administrative capital and largest urbanised city of Matale District. Matale is also the second largest urbanised and populated city in Central Province. <div><img src='https://lh3.googleusercontent.com/p/AF1QipOpQpOtEOP2lAc7zwHhZ46ZudU3dBlW93ndlvrU=s1360-w1360-h1020' style='width:50%;height:50%>'</div>"
	})

	google.maps.event.addListener(marker1,"click",function() {

		info2.close()
		info3.close()
		info1.open(map,marker1);
	})



	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(7.7944429,81.5788628),
		map:map,
		title:"Eastern University, Sri Lanka"
	
	})

	var info2 = new google.maps.InfoWindow({
		content:"The Eastern University Sri Lanka is a public university in Vantharumoolai, Eastern Province, Sri Lanka. It was established on 1 October 1986. The university was preceded by the Batticaloa University College established on 1 August 1981 which was started in the buildings of the Vantharumoolai Madya Maha Vidyalayam. <div><img src='https://lh3.googleusercontent.com/p/AF1QipOBKVu24Ix_FVlomZwkFaC2ghKoJzyjwrIS5Ps7=s1360-w1360-h1020' style='width:50%;height:50%>'</div>"
	})

	google.maps.event.addListener(marker2,"click",function() {
		info1.close()
		info3.close()
		info2.open(map,marker2);

	})




	var marker3 = new google.maps.Marker({
		position: new google.maps.LatLng(7.9547202,80.7236357),
		map:map,
		title:"Sigiriya, Sri Lanka"
	
	})

	var info3 = new google.maps.InfoWindow({
		content:" Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite rock approximately 180 m (590 ft) high <div><img src='img/img18.jpg' style='width:50%;height:50%'></div>  " })
		google.maps.event.addListener(marker3,"click",function() {

			info2.close()
			info1.close()

			info3.open(map,marker3);
	})
	

}

google.maps.event.addDomListener(window,"load",initialize)
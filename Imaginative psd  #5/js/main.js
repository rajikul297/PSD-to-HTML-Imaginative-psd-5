$(document).ready(function(){ 
//	slider
    $(".slider_area").bxSlider();
//	sticky
	$(".container").waypoint(function(direction){
		if(direction == "down"){
			$("#main_menu").addClass("sticky");
		} else{
			$("#main_menu").removeClass("sticky");
		}
	});
	
});

//mobile_menu

function openNav() {	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {	document.getElementById("myNav").style.width = "0%";
}













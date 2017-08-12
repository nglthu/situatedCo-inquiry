function reloadPage(){
	'use strict';
	location.reload ();
}

function allowDrop(ev) {
	'use strict';
    ev.preventDefault();
}

function drag(ev) {
	'use strict';
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	'use strict'; 
    ev.preventDefault();
	var count=0;
    var data = ev.dataTransfer.getData("text");
	if((ev.target.id).includes(data)){
	
    ev.target.appendChild(document.getElementById(data));
	count++;
	alert("Awesome, well-done ! ");
	}
	else{
		alert("Please, try again");
	}
}
function confirmAnswer() {
	'use strict'; 
	
		var pass = document.querySelector('input[name="Swim_video"]:checked').value;
		
	
	if(parseInt(pass)===1){
		alert(" Awesome SWIM is a correct answer");
		}
	
	else{
			
		alert("Please, try it again");
			}
			
		
	
}
function confirmAnswerCatch() {
	'use strict'; 
	
		var pass2 = document.querySelector('input[name="catch_video"]:checked').value;
	
				
	if(parseInt(pass2)===1){
		alert(" Awesome CATCH is a correct answer");
		}	
	else{
			
		alert("Please, try it again");
			}		
	
}
function drinkCountAnswer(){
	'use strict';
	var countDrink = document.querySelector('input[name="drinkcountanswer"]').value;
	
	if(parseInt(countDrink)===3){
		alert(" Awesome !!! It is a correct answer");
	}
	else {
		alert(" Please, try it again");
	}
	
	}
	
function ballCountAnswer(){
	'use strict';
	var countBall = document.querySelector('input[name="countballanswer"]').value;
	
	if(parseInt(countBall)===6){
		alert(" Awesome !!! It is a correct answer");
	}
	else {
		alert(" Please, try it again");
	}
	
	}	
	

// Nav Toggling
  $(".navbar-toggle").on("click", function(){
	'use strict'; 
    $(".header").toggleClass("is-showing-nav");
  });
  $(".nav-link").on("click", function(){
	'use strict'; 
    if($(window).width() < 768) {
      $(".navbar-toggle").trigger("click");
    }
  });
  // Search Toggling
  $(".search-toggle").on("click", function(){
	'use strict'; 
    $(".header").toggleClass("is-showing-search");
  });
  $(".site-search").on("submit", function(e){
	'use strict'; 
    e.preventDefault();
    $(".search-toggle").trigger("click");
  });
  $(document).on("keyup", function(e){
	'use strict';   
    console.log(e.which);
    if (e.which === 27 && $(".header").hasClass("is-showing-search")) {  // [esc] key
      $(".search-toggle").trigger("click");
    }
  });
  // Dropdown Videos
  var video_1 = $("#video-1")[0],
      video_2 = $("#video-2")[0];
  $("#travel-selector a").on("click", function(e){
	'use strict';  
  	e.preventDefault();
	if ( $(this).data("panel") ) {  
	  var target = $(this).data("panel"),
	  	  name = $(this).text();
	  $("#dropdownMenu1 .name").text(name);
	  $(".travel-panel").removeClass("active");
	  $("#travel-panel-"+target).addClass("active");
    if ( target === 1 ) {  
      video_1.play();
      video_2.pause();
      video_2.currentTime = 0;
    }
    if ( target === 2 ) {  
      video_1.pause();
      video_1.currentTime = 0;
      video_2.play();
    }
	}
  });


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  
var skillText = document.getElementById('skill');
var pathClass = document.getElementsByClassName('try');
var	listSkill = document.getElementsByClassName('mySkill');

for (var i = 0; i < pathClass.length; i++) {
   pathClass[i].addEventListener("mouseover", (function(i) {
      return function() {
         //console.log('You clicked element #' + i);
		 if(i===0){ skillText.innerHTML= "Photoshop <br>55%";
		 }else if(i===1){ skillText.innerHTML= "Javascript <br>65%";
		 }else if(i===2){ skillText.innerHTML= "Bootstrap <br>70%";
		 }else if(i===3){ skillText.innerHTML= "CSS <br>80%";
		 }else if(i===4){ skillText.innerHTML= "HTML <br>85%";
		 }
      }
   })(i));
   
}
for (var j = 0; j < listSkill.length; j++) {
   listSkill[j].addEventListener("mouseover", (function(j) {
	    
      return function() {
         //console.log('You clicked element #' + j);
		 if(j===0){ skillText.innerHTML= "Photoshop <br>55%"; listSkill[j].style.color="rgb(17, 136, 255)"; pathClass.item(0).style.opacity=0.75;pathClass.item(0).style['stroke-width'] = 50;}
		 else if(j===1){ skillText.innerHTML= "Javascript <br>65%"; listSkill[j].style.color="rgb(32, 231, 241)";pathClass.item(1).style.opacity=0.75; pathClass.item(1).style['stroke-width'] = 50;
		 }else if(j===2){ skillText.innerHTML= "Bootstrap <br>70%"; listSkill[j].style.color="rgb(44, 248, 124)";pathClass.item(2).style.opacity=0.75; pathClass.item(2).style['stroke-width'] = 50;
		 }else if(j===3){ skillText.innerHTML= "CSS <br>80%"; listSkill[j].style.color="rgb(227, 249, 67)";pathClass.item(3).style.opacity=0.75; pathClass.item(3).style['stroke-width'] = 50;
		 }else if(j===4){ skillText.innerHTML= "HTML <br>85%"; listSkill[j].style.color="rgb(233, 179, 42)";pathClass.item(4).style.opacity=0.75; pathClass.item(4).style['stroke-width'] = 50;
		 }
      }
   })(j));
   listSkill[j].addEventListener("mouseout", (function(j) {
	    
      return function() {
		 console.log("Out");
		 if(j===0){ skillText.innerHTML= "Skills"; listSkill[j].style.color="inherit"; pathClass.item(0).style.opacity=1;pathClass.item(0).style['stroke-width'] = 26;}
		 else if(j===1){ skillText.innerHTML= "Skills"; listSkill[j].style.color="inherit"; pathClass.item(1).style.opacity=1;pathClass.item(1).style['stroke-width'] = 26;
		 }else if(j===2){ skillText.innerHTML= "Skills"; listSkill[j].style.color="inherit"; pathClass.item(2).style.opacity=1;pathClass.item(2).style['stroke-width'] = 26;
		 }else if(j===3){ skillText.innerHTML= "Skills"; listSkill[j].style.color="inherit"; pathClass.item(3).style.opacity=1;pathClass.item(3).style['stroke-width'] = 26;
		 }else if(j===4){ skillText.innerHTML= "Skills"; listSkill[j].style.color="inherit"; pathClass.item(4).style.opacity=1;pathClass.item(4).style['stroke-width'] = 26;
		 }
      }
   })(j));

}
function myfunc(){
	$('.skillGroup').addClass('fade');
	$('.add').addClass('fade bgbase');
	// $('.mySkillbtn').css("right","5%").html("Interesting!!!!");
	
	$('.skill-grid').removeClass('hide');
	$('.wight-trans').addClass('hide');
}
	

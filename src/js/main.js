
$(function() {
	
	$('#accordion').accordion({
		/*heightStyle: "content"*/
		active: 1
	});
	
	$('button').button();

/*------------------slider-------------------*/

	var controls = document.querySelectorAll('.controls');
	for(var i=0; i<controls.length; i++){
	    controls[i].style.display = 'inline-block';
	}

	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,4000);

	function nextSlide(){
	    goToSlide(currentSlide+1);
	}

	function previousSlide(){
	    goToSlide(currentSlide-1);
	}

	function goToSlide(n){
	    slides[currentSlide].className = 'slide';
	    currentSlide = (n+slides.length)%slides.length;
	    slides[currentSlide].className = 'slide showing';
	}

	var playing = true;

	function playSlideshow(){
	    pauseButton.innerHTML = '&#10074;&#10074;'; 
	    playing = true;
	    slideInterval = setInterval(nextSlide, 2000);
	}

	var next = document.getElementById('next');
	var previous = document.getElementById('previous');

	next.onclick = function(){
	    nextSlide();
	};
	previous.onclick = function(){	    
	    previousSlide();
	}

/*--------------/popup----------------------*/
$('.header__right .feedback').click(function() {    
    var popup_id = $('#popup1'); 
    //$(popup_id).show(); // Открываем окно
    $(popup_id).fadeIn(700);
    //$('.overlay_popup').show(); // Открываем блок заднего фона
    $('.overlay_popup').fadeIn(500);
}) 
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})
$("#popup1 #krest").on("click", function(){
	$('.overlay_popup, .popup').hide();
});
/*--------------/popup----------------------*/

/*----------------number--------------------*/
var allNumbers = $(".content .catalog .number li a");

 $(allNumbers).on('click', function(){	   		
				alert('click по номеру страницы');   			
 });   
/*----------------number--------------------*/

var kn = $('input[value="Отправить"]');
console.log(kn);

kn.on("click", function(e){
	var inp = $("#popup1 input");
	var error = false;

	inp.each(function(idx, elem){
	if(elem.value==="") {		
		$(elem).css("border", "3px solid red");
		error = true;
	}else{
		$(elem).css("border", "");
		error = false;
	}
	if(error) {
	    e.preventDefault();
	}	
	});
});
/*---------------------/number-------------------*/

});


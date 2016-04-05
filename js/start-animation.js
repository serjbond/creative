$(document).ready(function(){
	var h = $(window).height();
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $(".feature").offset().top) {
			$(".feature .animated").eq(0).addClass('fadeInLeft1');
			$(".feature .animated").eq(1).addClass('fadeInLeft2');
			$(".feature .animated").eq(2).addClass('fadeInLeft3');
			$(".feature .animated").eq(3).addClass('fadeInLeft4');
		} 
		if ( ($(this).scrollTop()+h) >= $(".blog").offset().top) {
			$(".blog .animated-s").eq(0).addClass('fadeInRight1');
			$(".blog .animated-s").eq(1).addClass('fadeInRight2');
			$(".blog .animated-s").eq(2).addClass('fadeInRight3');
			$(".blog .animated-s").eq(3).addClass('fadeInRight4');
		} 
		if ( ($(this).scrollTop()+h) >= $(".team").offset().top) {
			$(".team").addClass('animate_afc');
		} 

	});
});
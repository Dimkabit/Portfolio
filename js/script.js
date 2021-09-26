const headerBerger = document.querySelector('.icon-menu');

const headerMenu = document.querySelector('.menu__body');

const boDy = document.querySelector('body');


headerBerger.addEventListener('click', (e) => {
	e.preventDefault();
	headerBerger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	boDy.classList.toggle('lock');
	
});

$(function () {
	$(window).scroll(function() {
		$('.second').each(function(){
			 var imagePos = $(this).offset().top;

			 var topOfWindow = $(window).scrollTop();
			 if (imagePos < topOfWindow+650) {
				  $(this).addClass("fadeInUp");
			 }
		});
  });
  
	$(window).scroll(function() {
	    $('.third').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.first').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
		$('.zumIn').each(function(){
			 var imagePos = $(this).offset().top;

			 var topOfWindow = $(window).scrollTop();
			 if (imagePos < topOfWindow+1000) {
				  $(this).addClass("zoomIn");
			 }
		});
  });
  
})



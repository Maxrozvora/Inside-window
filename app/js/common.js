$(document).ready(function(){
	$('.header-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
	});
	
  });
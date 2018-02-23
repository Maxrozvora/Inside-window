$(document).ready(function(){	
	$('.header-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<button type="button" class="slick-prev"></button>',
		prevArrow: '<button type="button" class="slick-next"></button>'
	});
	
	var slider = $('.slider').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    speed: 200
  });
  
  $('.slider-progress').each(function(i, el) {
    var sliderId = $(el).data('slider'),
        $slider = $('#' + sliderId),
        $progressInput = $(el).find('.slider-progress__input');
    
    $progressInput.attr('max', $slider[0].slick.slideCount - 1)
    
    $slider.on('afterChange', function(event, slick, currentSlide){
      $progressInput.val(currentSlide);
      console.log(currentSlide)
    });
    
    $($progressInput).mousedown(function() {
      $slider.slick('slickPause')
    });
  
    $($progressInput).mouseup(function() {
      $slider.slick('slickPlay')
    })
    
    $($progressInput).on('input', function() {
      $slider.slick('slickGoTo', $(this).val());
    })
  })
	
  });
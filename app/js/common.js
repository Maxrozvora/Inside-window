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
		slidesToShow: 3,
		arrows: false
  });
  // scroll panel script
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
  // Counter code //////////////////////////////////////////////
  // Set the date we're counting down to
  var countDownDate = new Date("Mar 25, 2018 15:37:25").getTime();
        
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days   ;
    document.getElementById("hour").innerHTML = hours  ;
    document.getElementById("min").innerHTML = minutes ;
    document.getElementById("sec").innerHTML = seconds ;
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementsByClassName("counter__item").innerHTML = "0";
    }
  }, 1000);
  });
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
    arrows: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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

  // Tabs bootstrap 

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.catalog-slider1').slick('reinit');
    $('.catalog-slider2').slick('reinit');
    $('.catalog-slider3').slick('reinit');
    $('.catalog-slider4').slick('reinit');
  })
  /////////////////////////////////////////////

  // Catalog section slider
  

  $('.catalog-slider1, .catalog-slider2, .catalog-slider3, .catalog-slider4').slick({
    infinite: true,
		slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-prev"></button>',
    prevArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  ///////////////////////////////////////////////////
// Tooltip

   // Slider for popular section 
  $('.room-slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.room-slider__nav'
  });
  $('.room-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.room-slider__for', 
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-prev"></button>',
		prevArrow: '<button type="button" class="slick-next"></button>'
  });

  // Google maps

  function initMap() {
    var coordinates = {lat: 50.4516795, lng: 30.5208771}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

}
// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 
  });

  
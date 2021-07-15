//js functions

//menu
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
	
}
$(document).ready(function(){
	if ($(window).width() > 600) {
	////////////carousel-page

		$('.carousel-page__carousel__img').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			// autoplaySpeed: 0,
			// speed: 0,
			arrows: false,
			// arrows: false,
			fade: true,
			swipeToSlide: false,
			swipe: false,
			asNavFor: '.carousel-page__carousel__sliders',
		});
		$('.carousel-page__carousel__sliders').slick({
			focusOnSelect: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipe: true,
		 	asNavFor: '.carousel-page__carousel__img',
		 	// autoplay: true,
	 	 //  autoplaySpeed: 1800,
	 		// speed: 1500,
	 		  // autoplaySpeed: 100,
	 		speed: 300,
		  vertical: true,
		  verticalSwiping: true,
		  cssEase: 'linear',
		  verticalScrolling: true,
		});
	}

	// function slickPause() {
	// 	$('.carousel-page__carousel__sliders').slick('slickPause');
	// }

	// slickPause();

	// $('.carousel-page__carousel__sliders').mouseover(function() {
	// 	$('.carousel-page__carousel__sliders').slick('slickPlay')

	// });
	// $('.carousel-page__carousel__sliders').mouseout(function() {
	// 	slickPause();
	// });
	const $slider = $(".carousel-page__carousel__sliders");
	$slider.on('init', () => {
			mouseWheel($slider)
	})
	$slider. on( 'wheel',  { $slider: $slider }, function(event){
		event.preventDefault()
		const $slider = event.data.$slider
		const delta = event.originalEvent.deltaY
		if(delta > 0) {
			$slider.slick('slickPrev')
		}
		else {
			$slider.slick('slickNext')
		}
	})
	// function mouseWheel($slider) {
	// 	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
	// }
	// function mouseWheelHandler(event) {
	// 	event.preventDefault()
	// 	const $slider = event.data.$slider
	// 	const delta = event.originalEvent.deltaY
	// 	if(delta > 0) {
	// 		$slider.slick('slickPrev')
	// 	}
	// 	else {
	// 		$slider.slick('slickNext')
	// 	}
	// }
})


$(document).ready(function(){
	$('.home__carousel__img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.home__carousel__sliders'
	});
	$('.home__carousel__sliders').slick({
				focusOnSelect: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				swipe: true,
			 	asNavFor: '.home__carousel__img',
			 	// autoplay: true,
		 	 //  autoplaySpeed: 1800,
		 		// speed: 1500,
		 		  // autoplaySpeed: 100,
		 		speed: 300,
			  vertical: true,
			  verticalSwiping: true,
			  cssEase: 'linear',
			  verticalScrolling: true,
	});

	const $sliderhome = $(".home__carousel__sliders");
	$sliderhome.on('init', () => {
			mouseWheel($sliderhome)
	})
	$sliderhome. on( 'wheel',  { $sliderhome: $sliderhome }, function(event){
		event.preventDefault()
		const $sliderhome = event.data.$sliderhome
		const delta = event.originalEvent.deltaY
		if(delta > 0) {
			$sliderhome.slick('slickPrev')
		}
		else {
			$sliderhome.slick('slickNext')
		}
	})

	// function slickPause() {
	// 	$('.home__carousel__sliders').slick('slickPause');
	// }

	// slickPause();

	// $('.home__carousel__sliders').mouseover(function() {
	// 	$('.home__carousel__sliders').slick('slickPlay')
	// });
	// $('.home__carousel__sliders').mouseout(function() {
	// 	slickPause();
	// });

	$('.home__carousel__sliders').on("click", function(event) {
		// $('.home__carousel__img').css('display', 'block')
		setTimeout(function(){
			$('.home__img-pb').css('display', 'none')
		}, 100)
	})

	$('.home__btns-btn').on("click", function(event) {
		$('.home__carousel__sliders.slick-slider').animate({
		  left: "1%"
		}, 600, "linear");
		$('.home__btns-btn-description').css('color', 'white')
		$('.home__btns-btn-description').css('transition', 'color 0.5s')
		$('.home__btns-btn__symbol span:nth-of-type(2n)').css('transform', 'rotate(90deg)')
		$('.home__btns-btn__symbol span:nth-of-type(2n)').css('transition', 'transform 0.5s')
	})


});




//////////adorno
const onResize = () => {
  const adorno2 = document.querySelector('.adorno-2');
  const adorno3 = document.querySelector('.adorno-3');

  
  // Pega a posição do canto inferior esquerdo da tela
  const posicaoInferior = {
    x: 0,
    y: window.innerHeight
  }

  // Pega a posição do do .adorno-2, pois o angulo sera entre a posicao do .adorno-2 e o canto inferior esquerdo da tela
  const posicaoAdorno = {
    x: adorno2.offsetLeft,
    y: adorno2.offsetTop
  }

  // Formula para pegar o angulo entre 2 pontos
  let angle = Math.atan2(posicaoAdorno.y - posicaoInferior.y, posicaoAdorno.x - posicaoInferior.x);
  // Por padrao o angulo usa como unidade de medida o Radiano (que vai de 0 a Math.PI), aqui convertemos ele para graus
  angle = angle * (180 / Math.PI)

  adorno3.style.transform = `rotate(${angle + 90}deg)`;
}

window.onload = () => {
  window.addEventListener('resize', onResize);
  onResize()
}




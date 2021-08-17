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
	$('.carousel-page__carousel__sliders').attr('dir', 'ltr');
	// [dir='rtl'].slick-slide { float: top; }

		$('.carousel-page__carousel__img').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			// centerMode:true,
			// autoplaySpeed: 0,
			// speed: 0,
			arrows: false,
			fade: true,
			swipeToSlide: false,
			// swipe: false,
			asNavFor: '.carousel-page__carousel__sliders',
			// verticalScrolling: true,
			infinite: true,
			rtl: false,
			// verticalReverse: true,
		});
		$('.carousel-page__carousel__sliders').slick({
			rtl: false,
			// centerMode:true,
			// centerPadding: '600px',
			// focusOnSelect: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			swipe: true,
			// autoplay: true,
		 	asNavFor: '.carousel-page__carousel__img',
	 		infinite: true,
	 		speed: 300,
		  vertical: true,
		  verticalSwiping: true,
		  cssEase: 'linear',
		  verticalScrolling: true,
		  verticalReverse: true,
		});
		$('.carousel-page__carousel__sliders').slickLightbox({
			src: false,
			itemSelector: '.carousel-page__carousel__sliders-item',
			imageMaxHeight: 0.9,
			closeOnBackdropClick: true,
			slick: {
			}
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
	const $sliderimg = $(".carousel-page__carousel__img");
	$sliderimg.on('init', () => {
			mouseWheel($sliderimg)
	})
	$sliderimg. on( 'wheel',  { $sliderimg: $sliderimg }, function(event){
		event.preventDefault()
		const $sliderimg = event.data.$sliderimg
		const delta = event.originalEvent.deltaY
		if(delta > 0) {
			$sliderimg.slick('slickPrev')
		}
		else {
			$sliderimg.slick('slickNext')
		}
	})

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
	$('.carousel-page__btns-btn').on("click", function(event) {
		// $('.carousel-page__carousel__sliders.slick-slider').animate({
		//   left: "1%"
		// }, 600, "linear");
		$('.carousel-page__carousel__sliders.slick-slider').toggleClass("carousel-page__carousel__sliders--animation")
		$('.carousel-page__btns-btn-description').toggleClass("carousel-page__btns-btn-description--animation")
		$('.carousel-page__btns-btn__symbol').toggleClass("carousel-page__btns-btn__symbol--animation")
		// $('.home__btns-btn-description').css('color', 'white')
		// $('.home__btns-btn-description').css('transition', 'color 0.5s')
		// $('.home__btns-btn__symbol span:nth-of-type(2n)').css('transform', 'rotate(90deg)')
		// $('.home__btns-btn__symbol span:nth-of-type(2n)').css('transition', 'transform 0.5s')
	})
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
	$('.home__carousel__sliders').slickLightbox({
		src: false,
		itemSelector: '.home__carousel__sliders-item',
		imageMaxHeight: 5,
		closeOnBackdropClick: true,
		slick: {
		}
	});

	const $sliderhomeimg = $(".home__carousel__img");
	$sliderhomeimg.on('init', () => {
			mouseWheel($sliderhomeimg)
	})
	$sliderhomeimg.on( 'wheel',  { $sliderhomeimg: $sliderhomeimg }, function(event){
		event.preventDefault()
		const $sliderhomeimg = event.data.$sliderhomeimg
		const delta = event.originalEvent.deltaY
		if(delta > 0) {
			$sliderhomeimg.slick('slickPrev')
		}
		else {
			$sliderhomeimg.slick('slickNext')
		}
	})

	const $sliderhome = $(".home__carousel__sliders");
	$sliderhome.on('init', () => {
			mouseWheel($sliderhome)
	})
	$sliderhome.on( 'wheel',  { $sliderhome: $sliderhome }, function(event){
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

	const $sliderhomepb = $(".home__img-pb");
	$sliderhomepb.on('init', () => {
			mouseWheel($sliderhomepb)
	})
	$sliderhomepb.on( 'wheel',  { $sliderhomepb: $sliderhomepb }, function(event){
		event.preventDefault()
		const $sliderhomepb = event.data.$sliderhomepb
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
		// $('.home__carousel__sliders.slick-slider').animate({
		//   left: "1%"
		// }, 600, "linear");
		$('.home__carousel__sliders.slick-slider').toggleClass("home__carousel__sliders--animation")
		$('.home__btns-btn-description').toggleClass("home__btns-btn-description--animation")
		$('.home__btns-btn__symbol').toggleClass("home__btns-btn__symbol--animation")
		// $('.home__btns-btn-description').css('color', 'white')
		// $('.home__btns-btn-description').css('transition', 'color 0.5s')
		// $('.home__btns-btn__symbol span:nth-of-type(2n)').css('transform', 'rotate(90deg)')
		// $('.home__btns-btn__symbol span:nth-of-type(2n)').css('transition', 'transform 0.5s')
	})


});

$(document).ready(function(){
	const $imgAbout = $(".page-template-page-structure__thumbnail");
	const $imgAboutDiv = $(".page-template-page-structure__thumbnail div");
	$imgAbout.on("click", function(e){
		$imgAbout.toggleClass("page-template-page-structure__thumbnail-click")
	})

})




//////////adorno
// const onResize = () => {
//   const adorno2 = document.querySelector('.adorno-2');
//   const adorno3 = document.querySelector('.adorno-3');

  
//   // Pega a posição do canto inferior esquerdo da tela
//   const posicaoInferior = {
//     x: 0,
//     y: window.innerHeight
//   }

//   // Pega a posição do do .adorno-2, pois o angulo sera entre a posicao do .adorno-2 e o canto inferior esquerdo da tela
//   const posicaoAdorno = {
//     x: adorno2.offsetLeft,
//     y: adorno2.offsetTop
//   }

//   // Formula para pegar o angulo entre 2 pontos
//   let angle = Math.atan2(posicaoAdorno.y - posicaoInferior.y, posicaoAdorno.x - posicaoInferior.x);
//   // Por padrao o angulo usa como unidade de medida o Radiano (que vai de 0 a Math.PI), aqui convertemos ele para graus
//   angle = angle * (180 / Math.PI)

//   adorno3.style.transform = `rotate(${angle + 90}deg)`;
// }

// window.onload = () => {
//   window.addEventListener('resize', onResize);
//   onResize()
// }






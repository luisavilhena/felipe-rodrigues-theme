//js functions

//menu
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
}

$(document).ready(function(){
	  $('.carousel').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  // dots: true,
		  adaptiveHeight: true,
		  // variableWidth: true,
	  });
	});

//menu
$(document).ready(function(){
		var colorSelect = $('#menu-item-7 > a').css("color")
		$('#menu-item-7 > a').css("color", "black");

	 //  $('#menu-item-7').hover(function() {
		//   	$('#menu-item-7 > a').css("color", colorSelect)
		//   }, function() { 
		//   	$('#menu-item-7 > a').css("color", "black")}
		// );
		if ($('#menu-item-7 > ul > li').hasClass("current_page_item")) {
			var colorClick = $('.current_page_item > a').css("color")
			$('#menu-item-7 > a').css("color", colorClick)
			$('#menu-item-7').hover(function() {
			  	// $('#menu-item-7 > a').css("color", colorSelect)
			  }, function() { 
			  	$('#menu-item-7 > a').css("color", colorClick)
			  }
			);

			$('.template-tc__title > h1').css("color", colorClick);
			$('strong').css("color", colorClick);
			$('h2').css("color", colorClick);
			$('h1').css("color", colorClick);
			$('.template-tc  a').css("color", colorClick);

		}else {
			$('#menu-item-7 > a').css("color", "black");
		}
});

$(document).ready(function(){
		var colorSelect = $('#menu-item-125 > a').css("color")
		$('#menu-item-125 > a').css("color", "black");

		if ($('#menu-item-125').hasClass("current_page_item")) {
			// var colorClick = $('.current_page_item > a').css("color")
			$('#menu-item-125 > a').css("color", colorSelect)
			$('#menu-item-125').hover(function() {
			  	// $('#menu-item-125 > a').css("color", colorSelect)
			  }, function() { 
			  	$('#menu-item-125 > a').css("color", colorSelect)
			  }
			);

			$('.template-tc__title > h1').css("color", colorSelect);
			$('strong').css("color", colorSelect);
			$('h2').css("color", colorSelect);
			$('h1').css("color", colorSelect);
			$('.template-tc  a').css("color", colorClick);

		} else {
			$('#menu-item-125 > a').css("color", "black");
		}

});


$(document).ready(function(){
	var colorSelect = $('#menu-item-9 > a').css("color")
	$('#menu-item-9 > a').css("color", "black");

 //  $('#menu-item-9').hover(function() {
	//   	$('#menu-item-9 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-9 > a').css("color", "black")}
	// );
	if ($('#menu-item-9 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-9 > a').css("color", colorClick)
		$('#menu-item-9').hover(function() {
		  	// $('#menu-item-9 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-9 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);

	} else {
		$('#menu-item-9 > a').css("color", "black");
	}

});
$(document).ready(function(){
	var colorSelect = $('#menu-item-10 > a').css("color")
	$('#menu-item-10 > a').css("color", "black");

 //  $('#menu-item-10').hover(function() {
	//   	$('#menu-item-10 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-10 > a').css("color", "black")}
	// );
	if ($('#menu-item-10 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-10 > a').css("color", colorClick)
		$('#menu-item-8').hover(function() {
		  	// $('#menu-item-10 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-10 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);

	} else {
		$('#menu-item-10 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-11 > a').css("color")
	$('#menu-item-11 > a').css("color", "black");

 //  $('#menu-item-11').hover(function() {
	//   	$('#menu-item-11 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-11 > a').css("color", "black")}
	// );
	if ($('#menu-item-11 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-11 > a').css("color", colorClick)
		$('#menu-item-11').hover(function() {
		  	// $('#menu-item-11 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-11 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);

	}else {
		$('#menu-item-11 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-12 > a').css("color")
	$('#menu-item-12 > a').css("color", "black");

 //  $('#menu-item-12').hover(function() {
	//   	$('#menu-item-12 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-12 > a').css("color", "black")}
	// );
	if ($('#menu-item-12 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-12 > a').css("color", colorClick)
		$('#menu-item-12').hover(function() {
		  	// $('#menu-item-12 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-12 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);

	}else {
		$('#menu-item-12 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-13 > a').css("color")
	$('#menu-item-13 > a').css("color", "black");

 //  $('#menu-item-13').hover(function() {
	//   	$('#menu-item-13 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-13 > a').css("color", "black")}
	// );
	if ($('#menu-item-13 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-13 > a').css("color", colorClick)
		$('#menu-item-13').hover(function() {
		  	// $('#menu-item-13 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-13 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);

	}else {
		$('#menu-item-13 > a').css("color", "black");
	}
});
$(document).ready(function(){
	var colorSelect = $('#menu-item-14 > a').css("color")
	$('#menu-item-14 > a').css("color", "black");

 //  $('#menu-item-14').hover(function() {
	//   	$('#menu-item-14 > a').css("color", colorSelect)
	//   }, function() { 
	//   	$('#menu-item-14 > a').css("color", "black")}
	// );
	if ($('#menu-item-14 > ul > li').hasClass("current_page_item")) {
		var colorClick = $('.current_page_item > a').css("color")
		$('#menu-item-14 > a').css("color", colorClick)
		$('#menu-item-14').hover(function() {
		  	// $('#menu-item-14 > a').css("color", colorSelect)
		  }, function() { 
		  	$('#menu-item-14 > a').css("color", colorClick)
		  }
		);

		$('.template-tc__title > h1').css("color", colorClick);
		$('strong').css("color", colorClick);
		$('h2').css("color", colorClick);
		$('h1').css("color", colorClick);
		$('.template-tc  a').css("color", colorClick);
		
	}else {
		$('#menu-item-14 > a').css("color", "black");
	}
});

$(document).ready(function(){
	var photo = $('.gallery > .gallery__items > img')
	var destak = $('.gallery > .gallery__destak > img')

	// destak.attr('src', firstphoto.currentTarget.currentSrc)

	photo.on('click', function(event){
		destak.attr('src', event.currentTarget.currentSrc)

	});

});

$(document).ready(function(){
  $('.gallery > .gallery__items > img').on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#gallery').offset().top - 100
    }, 500, function(){
    });
  });
});




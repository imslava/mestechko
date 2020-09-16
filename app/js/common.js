$(document).ready(function(){

	$('[data-fancybox]').fancybox({
		touch: false,
		autoFocus: false,
		backFocus: false
	});

	$(".masked").inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});

	$('.js-validate').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	$('.js-validate-consult').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	$('.js-validate-presentation').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	$('.js-validate-map').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	function scroll() {
		$(".js-scroll").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top - 30;
			$('html, body').animate({
				scrollTop: top
			}, 1500);
		});
	}

	scroll();

	$('.header-burger').on('click', function(){
		$(this).toggleClass('header-burger-open');
		$('.header-menu').fadeToggle();

		$("body").toggleClass("compensate-for-scrollbar");
		$(".header-menu ul").toggleClass("compensate-for-scrollbar-menu");

	});

	$("head").append('<style type="text/css">.compensate-for-scrollbar, .compensate-for-scrollbar-menu{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");

});
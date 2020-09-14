$(document).ready(function(){

	$('[data-fancybox]').fancybox({
		touch: false
	});

	$(".masked").inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});

	$('.js-validate').validate({
		rules: {
			phone: {required: true}
		}
	});

	$('.promo h1').html(
		$('.promo h1').html().replace(/(\S+)/g,'<span>$1</span>')
	);

	function scroll() {
		$(".js-scroll").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('html, body').animate({
				scrollTop: top
			}, 1500);
		});
	}

	scroll();

	$('.header-burger').on('click', function(){
		$(this).toggleClass('header-burger-open');
		$('body').toggleClass('overflow');
		$('.header-menu').fadeToggle();
	});

});
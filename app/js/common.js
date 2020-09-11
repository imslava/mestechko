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

});
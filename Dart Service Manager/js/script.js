$(document).ready(function () {

	$('.burger').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.services__item-head').click(function (event) {
		if ($('.services__items').hasClass('one')) {
			$('.services__item-head').not($(this)).removeClass('active');
			$('.spoiler').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.reviews__slider').slick({
		vertical: true,
		arrows: true,
		slidesToShow: 2,
		infinite: true
	});

	$('.team__slider').slick({
		arrows: true,
		infinite: true
	});

});
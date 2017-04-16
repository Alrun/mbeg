$(document).ready(function(){
	
	$('.slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-bg',
		dots: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 10000
	});
	$('.slider-bg').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-main'
	});
	$('.slider-work').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true
	});
	$('.slider-work').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		infinite: false,
		speed: 300,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

});
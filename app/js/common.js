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
		dots: true,
		infinite: true,
		speed: 300,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$('.slider-partner').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		speed: 300,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 544,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

});
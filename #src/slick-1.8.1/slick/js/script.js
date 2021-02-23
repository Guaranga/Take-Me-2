$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});


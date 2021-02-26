//меню бургер
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
	$('body').toggleClass('lock');
});


//кнопка слайдера - замена фона
$(document).ready(function () {
	$('#r41').click(function (event) {
		$('.main-slider__1, .main-slider__2').toggleClass('slide1');


	});

});

//клик по кнопке mine-slider
$(document).ready(function () {

	setTimeout(function () {
		$('#r41').delay(2000).fadeTo(800, 0.2);
		$('#r41').fadeTo(500, 1.0);
		$('#r41').trigger('click');
	}, 6000);

});

//Подключаю третий слайдер slider-2
$(document).ready(function () {
	$('.slider-2').slick(
		{
			arrows: false,
			dots: true,
			addaptiveHight: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			infinite: true,
			initialSlide: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: false,
			draggable: false,
			swipe: true,
			touchThreshold: 3,
			touchMove: true,
			waitForAnimate: true,
			centerMode: true,



			responsive: [ //адабтивность 
				{
					breakpoint: 1283,
					settings: {
						slidesToShow: 1,
						centerMode: false,

					}
				},
				{
					breakpoint: 970,
					settings: {

					}
				}
			]

		}
	);



});





//Подключаю третий слайдер slider - 3
$(document).ready(function () {
	$('slider-3').slick(
		{
			arrows: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 1000,
			infinite: false,
			autoplay: true,
			pauseOnFocus: false,
			waitForAnimate: false,
			variableWidth: false
			responsive: [
				{
					breakpoint: 1283,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 830,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			],
		});
});






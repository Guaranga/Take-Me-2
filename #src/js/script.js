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

			slidesToShow: 2,
			dots: true,
		}
	);



});

//Подключаю третий слайдер slider-2
$(document).ready(function () {
	$('.slider-3').slick(
		{

			slidesToShow: 2,

		}
	);



});
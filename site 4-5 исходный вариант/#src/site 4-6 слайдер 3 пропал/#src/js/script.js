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

//клик по кнопке слайдера
$(document).ready(function () {


	setTimeout(function () {
		$('#r41').delay(2000).fadeTo(800, 0.2);
		$('#r41').fadeTo(500, 1.0);
		$('#r41').trigger('click');
	}, 6000);


});



//Подключаю третий слайдер slider-2
$(document).ready(function () {
	$('.slider-2').slick({
		arrows: false,
		dots: true,
		addaptiveHight: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay: true, // автопрокрутка
		autoplaySpeed: 3000,
		pauseOnFocus: true,  // пауза после фокуса
		pauseOnHover: true,
		pauseOnDotsHover: false,
		draggable: false, // движение мышкой слайдов
		swipe: true,
		touchThreshold: 4, // насколько тянется салйдер
		touchMove: true,
		waitForAnimate: true, // ждать анимацию после нажатия кнопки
		centerMode: true, //..главный слайд всегда по центру
		//variableWidth: true, // слайдер позволяет самому контенту определьять ширину коротко - это функци автоматического адоптивного слайдера
		//rows: 1  // сколько рядов - этажей
		//slidesPerRow: 1 // количество слайдов в ряду
		//vertical: true// вертикальный слайдер - он не так хорошо работает, во избежание проблем лучше указывать высоту
		// verticalSwiping: // включает вертикальную прокрутку
		//fade: true, // показывается только 1 слайд, они плавно переходят один в другой
		//asNawFor:"slider-x" связывает несклько слайдов  для x указываем slider-2 а для slider-2 x/
		// при листании одного слайдера, в другом тоже меняются изображения.
		// mobile-first:false;
		//  ленивая загрузка   data-lazy атрибут img вместо src
		//appendArrows: $('.one-sentence'),// перемещение стрелок и точек в др. див ..
		appendDots: $('.one-sentence'),
		responsive: [ //адабтивность 
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
});


//Подключаю третий слайдер slider-3
$(document).ready(function () {
	$('.slider-3').slick({
		arrows: true,
		dots: false,
		addaptiveHight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'linear',
		infinite: false,
		initialSlide: 3,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: false,
		waitForAnimate: false,
	});
});






// 	// события до смены слайда
// /*
// $('.slider-2').on('beforeChange' function (event, slick, currentSlide, nextSlide) {
// 	console.log(nextSlide); // (currentSlide) - текущий слайд
// });
//  события текщего слайда - отстеживаем текущий слайд.
// $('.slider-2').on('afterChange' function (event, slick, currentSlide, nextSlide) {
// 	console.log(nextSlide); // (currentSlide) - текущий слайд
// });*/
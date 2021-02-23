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
			arrows: false, // стрелки
			dots: true,   // точки
			addaptiveHight: true, // слайдер автоматически настраивается по высоте под конкретный слайд
			slidesToShow: 2,
			slidesToScroll: 1, //количество слайдеров пролистывающееся за один раз
			speed: 1000, // скорость с которой слайды будут пролистываться при нажатии на кнопку
			easing: 'ease', // тип анимации в значении салйда  https://fls.guru/cssanimation.html
			infinite: true, // будет ли слайдер бесконечным (по кругу)?
			initialSlide: 1, // с какого фото будет старт слайда
			autoplay: true, // автопрокрутка
			autoplaySpeed: 2000, // скорость автопрокрутки
			pauseOnFocus: true,  // пауза после фокуса - когда мы нажали на слайдер или его двигали по умолчанию  true
			pauseOnHover: true, // пауза при наведении на всю область слайдера по умолчанию  true
			pauseOnDotsHover: false, // пауза при наведении на точки по умолчанию  true
			draggable: false, // движение мышкой слайдов
			swipe: true, // движение пальцами на телефоне слайдов
			touchThreshold: 3, // насколько тянется салйдер - сколько нужно просвайпить чтобы сработали другие слайды по умолчанию 5 (слайдер делиться на пять частей)
			touchMove: true, // отключает возможностьи тачскрина - отключает возможность его тянуть - по умолчанию  true  
			waitForAnimate: true, // ждать анимацию после нажатия кнопки в этом случае нельзя будет быстро прощелкать кнопками фото 
			centerMode: true, //..главный слайд всегда по центру + начинает выглядывать кусочек др. слайда  slider - item
			//variableWidth: true, // слайдер позволяет самому контенту определьять ширину коротко - это функци автоматического адоптивного слайдера - единственное пропадают отступы (возможно эта проблема решаема)
			//rows: 1  // сколько рядов - этажей у слайда (сколько объектов содержит один слайд)
			//slidesPerRow: 1 // количество рядов слайдов
			//vertical: true// вертикальный слайдер - он не так хорошо работает, во избежание проблем лучше указывать высоту
			// verticalSwiping: // включает вертикальную прокрутку
			//fade: true, // показывается только 1 слайд, они плавно переходят один в другой можно использовать микс следующего свойсва asNawFor с fade - тогда на экране например будет вверху большое фото, а внизу маленькие нажимая на которые мы будем изменять большое фото
			//asNawFor:"slider-x" связывает несклько слайдов  для x указываем slider-2 а для slider-2 x/ это свойство удобно при верстке товаров для интернет магазини, когда нужна например большая и маленькая картинки (связанные друг с другом)
			// при листании одного слайдера, в другом тоже меняются изображения. Должно быть одинаковое количество изображенией в связанных слайдах
			// mobile-first:false;
			//  ленивая загрузка   data-lazy атрибут img вместо src
			//appendArrows: $('.one-sentence'),// перемещение стрелок и точек в др. див ..

			responsive: [ //адабтивность 
				{
					breakpoint: 1283,
					settings: {
						slidesToShow: 1,
						centerMode: false,
					}
				},
				{
					breakpoint: 830,
					settings: {
						dots: false,
					}
				}
			]




		}
	);



});

//Подключаю третий слайдер slider-3
$(document).ready(function () {
	$('.slider-3').slick(
		{
			arrows: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 1000,
			infinite: false, // дополнительный класс slick desabled 
			autoplay: true,
			pauseOnFocus: false,
			waitForAnimate: false,
			//адаптивность
			responsive: [
				{
					breakpoint: 1283,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 830,
					settings: {
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
});
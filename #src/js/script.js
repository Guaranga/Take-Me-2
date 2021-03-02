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


// слайдер slider-2 END

// Подключаю ЗВЕЗДНЫЙ РЕЙТИНГ

// "use strict"

// const raitings = document.querySelectorAll('.raiting');
// if (raitings.length > 0) {
// 	initRaitings();
// }

// //основная функция
// function initRaitings() {
// 	let raitingActive, raitingValue;
// 	// "Бегаем" по всем рейтингам на странице
// 	for (let index = 0; index < raitings.length; index++) {
// 		const raiting = raitings[index];
// 		initRaiting(raiting);
// 	}
// 	//инициализируем конкретный рейтинг
// 	function initRaiting(raiting) {
// 		initRatingVars(rating);

// 		setRatingActiveWidth();

// 		if (rating.classList.contains('rating_set')) {
// 			setRating(rating);
// 		}
// 	}
// 	// инициализация переменных
// 	function initRaitingVars(rating) {
// 		raitingActive = document.querySelector('.raiting__active');
// 		raitingValue = document.querySelector('.raiting__value');
// 	}
// 	//Изменяем ширину активных звезд
// 	function setRaitingActiveWidth(index = ratingValue.innerHTML) {
// 		const raitingActiveWidth = index / 0.05;
// 		raitingActive.style.width = `${ratingActiveWidth}%`;
// 	}
// }

"use strict"

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}


}
// -------------------------- ЗВЕЗДНЫЙ РЕЙТИНГ END
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



//третий слайдер slider - 3 end


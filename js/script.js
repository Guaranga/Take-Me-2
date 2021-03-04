$(document).ready(function () { $(".header__burger").click(function (e) { $(".header__burger,.header__menu").toggleClass("active") }), $("body").toggleClass("lock") }), $(document).ready(function () { $("#r41").click(function (e) { $(".main-slider__1, .main-slider__2").toggleClass("slide1") }) }), $(document).ready(function () { setTimeout(function () { $("#r41").delay(2e3).fadeTo(800, .2), $("#r41").fadeTo(500, 1), $("#r41").trigger("click") }, 6e3) });



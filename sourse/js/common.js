const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/internetinesvetaine-02-servicespsd.png);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function () {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {


		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	// $(" .top-nav li a, .scroll-link").click(function () {
	// 	const elementClick = $(this).attr("href");
	// 	const destination = $(elementClick).offset().top;

	// 	$('html, body').animate({ scrollTop: destination }, 1100);
	// 	return false;
	// });
	if($('div').is('#chart1')){
		var chart1 = new Chart(document.getElementById('chart1').getContext('2d'), {
			// The type of chart we want to create
			type: 'doughnut',
	
			// The data for our dataset
			data: {
				labels: ["", ""],
				datasets: [{
					// labels: ['1', '2'],
					backgroundColor: ["#3e95cd", "#EDEDEE", "#EDEDEE"],
					borderColor: ["#ffffff"],
					data: [35.9, 30.8, 33.5]
				}]
			},
	
			// Configuration options go here
			options: {
				responsive: true,
				cutoutPercentage: 70,
				tooltips: {enabled: false},
				hover: {mode: null},
				maintainAspectRatio: false,
				scaleShowLabels: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				}
			},
		});
	}

	if($('div').is('#chart2')){
		var chart2 = new Chart(document.getElementById('chart2').getContext('2d'), {
			// The type of chart we want to create
			type: 'doughnut',
	
			// The data for our dataset
			data: {
				labels: ["", ""],
				datasets: [{
					// labels: ['1', '2'],
					backgroundColor: ["#EDEDEE", "#51BCF7", "#EDEDEE"],
					borderColor: ["#ffffff"],
					data: [35.9, 30.8, 33.5]
				}]
			},
	
			// Configuration options go here
			options: {
				responsive: true,
				cutoutPercentage: 70,
				tooltips: {enabled: false},
				hover: {mode: null},
				maintainAspectRatio: false,
				scaleShowLabels: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				}
			},
		});
	}
	if($('div').is('#chart3')){
		var chart3 = new Chart(document.getElementById('chart3').getContext('2d'), {
			// The type of chart we want to create
			type: 'doughnut',
	
			// The data for our dataset
			data: {
				labels: ["", ""],
				datasets: [{
					// labels: ['1', '2'],
					backgroundColor: ["#EDEDEE", "#EDEDEE", "#95D1FA"],
					borderColor: ["#ffffff"],
					data: [35.9, 30.8, 33.5]
				}]
			},
	
			// Configuration options go here
			options: {
				cutoutPercentage: 70,
				responsive: true,
				tooltips: {enabled: false},
				hover: {mode: null},
				maintainAspectRatio: false,
				scaleShowLabels: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				}
			},
		});
	}
	if($('div').is('#chart4')){
		var chart4 = new Chart(document.getElementById('chart4').getContext('2d'), {
			// The type of chart we want to create
			type: 'doughnut',
	
			// The data for our dataset
			data: {
				labels: ["", ""],
				datasets: [{
					// labels: ['1', '2'],
					backgroundColor: ["#3e95cd", "#51BCF7", "#95D1FA"],
					borderColor: ["#ffffff"],
					data: [35.9, 30.8, 33.5]
				}]
			},
	
			// Configuration options go here
			options: {
				cutoutPercentage: 70,
				responsive: true,
				tooltips: {enabled: false},
				hover: {mode: null},
				maintainAspectRatio: false,
				scaleShowLabels: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false
				}
			},
		});
	}

};
// /form
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction

	modalCall() {

		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			// type : 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	mobileMenu() {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			const container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});

		$(".menu-mobile__inner-wrapper .menu-item-has-children ").each(function () {
			$(this).append('<div class="toggle-l"></div>');
		})

		$('.menu-mobile__inner-wrapper .menu-item-has-children').on('click', '.toggle-l', function () {
			$(this).prev().slideToggle()
			return false;
		})
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  . 


	// /nlineSVG
	// CustomInputFileCustomInputFile() {
	// 	const file = $(".add-file input[type=file]");
	// 	file.change(function () {
	// 		const filename = $(this).val().replace(/.*\\/, "");
	// 		const name = $(".add-file__filename  ");
	// 		name.text(filename);

	// 	});
	// },

	// /CustomYoutubeBlock
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask


};


// JSCCommon.LazyFunction();
/***/
$(function () {
	function calcYearDif(theYear) {
		return Math.floor(
			Math.floor(
				Math.ceil(
					Math.abs(Date.now() - theYear) / (1000 * 60 * 60 * 24)
				) / 31
			) / 12
		);
	}

	$('.time-difference-parent').each(function () {
		var theYear = $(this).data('date');
		var timeDif = $(this).children('.time-difference');
		if ($(this).hasClass('text-right')) {
			timeDif.text('(' + calcYearDif(Date.parse(theYear)) + ' سال)');
		} else {
			timeDif.text(
				'(' + calcYearDif(Date.parse(theYear)) + ' years)'
			);
		}
	});

	// initialize scrollspy
	$('body').scrollspy({
		target: '.dotted-scrollspy',
	});

	$('.navbar-collapse a').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	/* WOW.js init */
	new WOW().init();

	// MDB Lightbox Init
	$(function () {
		$('#mdb-lightbox-ui').load(
			'./assets/mdb-addons/mdb-lightbox-ui.html'
		);
	});

	// Back to top
	var $btn = $('#btnTop');
	var $home = $('#home');
	var startpoint = $home.scrollTop() + $home.height();
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > startpoint) {
			$btn.show();
		} else {
			$btn.hide();
		}
	});
});

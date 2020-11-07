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
		$(this)
			.children('.time-difference')
			.text('(' + calcYearDif(Date.parse(theYear)) + ' years)');
	});
});

$('.products__row').owlCarousel({
	nav: true,
	dots: false,

	responsive: {
		0: {
			items: 2,
			margin: 20,
		},
		700: {
			items: 3,
			margin: 20,
		},
		1200: {
			items: 4,
			margin: 30,
		},
		1400: {
			items: 5,
			margin: 30,
		}
	}
})

$('.products__row').on('changed.products__row', function (e) {

	$('button.owl-next').removeAttr('disabled');
	$('button.owl-prev').removeAttr('disabled');

	if ((e.page.index + 1) >= e.page.count) {
		$('button.owl-next').attr('disabled', 'disabled');
	} else {
		$('button.owl-next').removeAttr('disabled');
	}

	if (e.page.index == 0) {
		$('button.owl-prev').attr('disabled', 'disabled');
	} else {
		$('button.owl-prev').removeAttr('disabled');
	}

});
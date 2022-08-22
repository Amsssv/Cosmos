$('.news__row').owlCarousel({
	margin: 30,
	dots: false,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		550: {
			items: 2,
			nav: true,
		},
		990: {
			nav: false,
		},
		1400: {
			items: 3,
			nav: false,
		}
	}
})

$('.news__row').on('changed.news__row', function (e) {

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
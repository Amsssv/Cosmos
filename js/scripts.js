$('.categories__carusel').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		500: {
			items: 2
		},
		700: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});

$('.feeds__content').owlCarousel({
	nav: false,
	dots: false,
	margin: 10,
	responsive: {
		0: {
			items: 2
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		},
		1300: {
			items: 5
		}
	}
});

$('.services__content').owlCarousel({
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		500: {
			items: 2
		},
		767: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});

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
});

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
});

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

$('.brand__content').owlCarousel({
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 2
		},
		550: {
			items: 3
		},
		1000: {
			items: 4
		},
		1200: {
			items: 5
		}
	}
});

$('.banner__content').owlCarousel({
	nav: true,
	items: 1
});

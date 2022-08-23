$('#categories').owlCarousel({
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

$('#feeds').owlCarousel({
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

$('#services').owlCarousel({
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

$('#products').owlCarousel({
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

$('#products').on('changed#products', function (e) {

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

$('#collection').owlCarousel({
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

$('#collection').on('changed#collection', function (e) {

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

$('#news').owlCarousel({
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

$('#news').on('changed#news', function (e) {

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

$('#brand').owlCarousel({
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

$('#banner').owlCarousel({
	nav: true,
	items: 1
});

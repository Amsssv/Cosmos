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
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true,
})

gsap.fromTo('.hero-section', { opacity: 1 }, {
	opacity: 0, 
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'center',
		end: '820',
		scrub: true
	}
})

let itemL = gsap.utils.toArray('.gallery__left .gallery__item')

itemL.forEach(item => {
	gsap.fromTo(item, { x: -100, opacity: 0 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})

let itemR = gsap.utils.toArray('.galery__right .gallery__item')

itemR.forEach(item => {
	gsap.fromTo(item, { x: 200, opacity: 0 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})
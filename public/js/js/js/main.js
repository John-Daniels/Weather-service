// auto typing text
var typed = new Typed('.typing-text', {
	strings: ["full gospel church Int'l", "Redemption Chapel", "Akosombo branch"],
	loop: true,
	typeSpeed: 50,
	backSpeed: 100,
	backDelay: 1000,
});


//mobile screen text
// auto typing text
var typed = new Typed('.typing-text-mobile', {
	strings: ["full gospel church Int'l", "Redemption Chapel", "Akosombo branch"],
	loop: true,
	typeSpeed: 50,
	backSpeed: 100,
	backDelay: 1000,
});



// hero sliding blinking problem solved
var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"../img/hero/hero.jpg",
				"../img/hero/hero1.jpg",
				"../img/hero/hero2.jpg",
				"../img/hero/hero3.jpg",
				"../img/hero/hero4.jpg",
				"../img/hero/hero5.jpg",
				"../img/hero/hero6.jpg"
				)
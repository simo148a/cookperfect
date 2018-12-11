//Menu scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}



//Smooth scrolling
$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

//close when click
/*jQuery(document).ready(function () {
    jQuery('.navbar-collapse li a').click(function () {
        jQuery('.navbar-collapse').css('height', '0');

    });
});*/




//Symboler fader ind
$(document).ready(function () {

	/* Every time the window is scrolled ... */
	$(window).scroll(function () {

		/* Check the location of each desired element */
		$('.fadeinleft').each(function (i) {

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {

				$(this).animate({
					'opacity': '1',
					'left': '0'
				}, 800);

			}

		});

	});

});

$(document).ready(function () {

	/* Every time the window is scrolled ... */
	$(window).scroll(function () {

		/* Check the location of each desired element */
		$('.fadeinright').each(function (i) {

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {

				$(this).animate({
					'opacity': '1',
					'left': '0'
				}, 800);

			}

		});

	});

});

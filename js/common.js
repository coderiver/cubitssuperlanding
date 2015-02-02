head.ready(function() {

	$('.js-goto').click(function(event) {
		targ = $(this).data('target');
		$('html, body').animate({
	        scrollTop: $("#"+targ).offset().top - 30
	    }, 1000);
		return false;
	});
});
// PRELOADER

$(window).load(function(){
    $('.preloader').delay(2000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
			"images/tm-bg-slide- (1).jpg",
			"images/tm-bg-slide- (2).jpg",
			"images/tm-bg-slide- (3).jpg",
			"images/tm-bg-slide- (4).jpg",
			"images/tm-bg-slide- (5).jpg",
			"images/tm-bg-slide- (6).jpg",
			"images/tm-bg-slide- (7).jpg",
			"images/tm-bg-slide- (8).jpg",
			"images/tm-bg-slide- (9).jpg",
			"images/tm-bg-slide- (10).jpg",
			"images/tm-bg-slide- (11).jpg",
			"images/tm-bg-slide- (12).jpg",
			"images/tm-bg-slide- (13).jpg",
			"images/tm-bg-slide- (14).jpg",
			"images/tm-bg-slide- (15).jpg",
			"images/tm-bg-slide- (16).jpg",
			"images/tm-bg-slide- (17).jpg",
			"images/tm-bg-slide- (18).jpg",
			"images/tm-bg-slide- (19).jpg",
			"images/tm-bg-slide- (20).jpg",
			"images/tm-bg-slide- (21).jpg",
			"images/tm-bg-slide- (22).jpg",
			"images/tm-bg-slide- (23).jpg",
			"images/tm-bg-slide- (34).jpg",
			"images/tm-bg-slide- (25).jpg",
			"images/tm-bg-slide- (26).jpg",
			"images/tm-bg-slide- (27).jpg"
	 			], 	{duration: 10000, fade: 1300});
		});
})
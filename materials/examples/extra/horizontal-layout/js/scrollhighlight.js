$(document).ready(function() {
	// adapted from http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation
	
	/**
	 * This part handles the highlighting functionality.
	 * We use the scroll functionality again, some array creation and 
	 * manipulation, class adding and class removing, and conditional testing
	 */
	var aChildren = $("nav li").children(); // find the a children of the list items
	var aArray = []; // create the empty aArray
	for (var i = 0; i < aChildren.length; i++) {
		var aChild = aChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	} // this for loop fills the aArray with attribute href values

	$(window).scroll(function() {
		var windowPos = $(window).scrollLeft();
		var windowWidth = $(window).width(); 
		var middlePos = windowPos + (windowWidth / 2.0);

		// find section that is filling the screen most
		var minDist = 100000;
		var closest = null;
		for (var i = 0; i < aArray.length; i++) {
			var theID = aArray[i];
			var divPos = $(theID).offset().left; // get the offset of the div from the top of page
			var divWidth = $(theID).width(); // get the height of the div in question
			var divMiddlePos = divPos + (divWidth / 2.0);
			var dist = Math.abs(divMiddlePos - middlePos);
			if(dist < minDist) {
				closest = theID;
				minDist = dist;
			}		
		}

		$("nav a").removeClass("nav-active");
		if(closest != null){
			$("a[href='" + closest + "']").addClass("nav-active");
		}
	});
});

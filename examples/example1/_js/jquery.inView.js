$( document ).ready(function() {
		var allTrackedElements = '.trackInView';
		isInView(allTrackedElements);
		$(window).on( 'resize scroll', function(){
			isInView(allTrackedElements);
		});
});
	
function isInView(allTrackedElements) {
		$(allTrackedElements).each(function() {
			var scrollPosition = $(window).scrollTop();
			var documentHeight = $(window).height();
			var elementOffset = $(this).offset();
			var elementTop = elementOffset.top;
			var elementHeight = $(this).outerHeight();
			var elementBottom = elementTop + elementHeight;
			
			if ( (scrollPosition + documentHeight > elementTop) &&  (scrollPosition < elementBottom) ) { 
				$(this).addClass('inView').removeClass('notInView');
			} else {
				$(this).removeClass('inView').addClass('notInView'); 
			}
		});
}

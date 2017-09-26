$( document ).ready(function() {
		    statusDisplay();
		    $(window).on( 'resize scroll', function(){
			    statusDisplay();
		    });
		    
});
	
function statusDisplay() {
			var red='.notInView', blue='.notInView', green='.notInView';
			if ( $('#redBox').hasClass('inView') ) { red = '.inView'; }
			if ( $('#blueBox').hasClass('inView') ) { blue = '.inView'; }
			if ( $('#greenBox').hasClass('inView') ) { green = '.inView'; }
			$('#status').html('<p><span class="bg">#redBox' + red + '</span><span class="bg">#blueBox' + blue + '</span><span class="bg">#greenBox' + green + '</span></p>');
}
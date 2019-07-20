/*
 * TheNews - jQuery Plugins
 * version: 0.1.5 (JUL 2016)
 * @requires jQuery v1.9 or later
 */

jQuery(document).ready(function() {

	$(".fancybox").fancybox({
		openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
	});
	
	var wHeader = $('header').outerWidth();
	var wlogo = $('#logo').outerWidth();
	//alert(wlogo);
	var medidaDivsHeader = wHeader - wlogo;
	var elementos = $('#sections .title h2');
	var size = elementos.size();
	
	$.each(elementos, function(i, val){
		var $h2title = jQuery(this);
		var $wH2Title = $h2title.outerWidth();
		var $titleW = $(this).parents('div.title').outerWidth();
		var $resta = $titleW - $wH2Title;
		$(this).css({'margin-left' : $resta / 2});
	});

	$('#social, nav').css({width:medidaDivsHeader});

	$(window).resize(function(){
		var wHeader = $('header').outerWidth();
		var wlogo = $('#logo').outerWidth();
		var medidaDivsHeader = wHeader - wlogo;
		$('#social, nav').css({width:medidaDivsHeader});

		// centrar titulo #sections
		var elementos = $('#sections .title h2');
		var size = elementos.size();
		
		$.each(elementos, function(i, val){
			var $h2title = jQuery(this);
			var $wH2Title = $h2title.outerWidth();
			var $titleW = $(this).parents('div.title').outerWidth();
			var $resta = $titleW - $wH2Title;
			$(this).css({'margin-left' : $resta / 2});
		});
	});
	
	$('nav ul li').click(function(){
		$('ul', this).fadeToggle("slow", "linear");
	});

	
	/* Replace all SVG images with inline SVG */
	jQuery('svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			
			// Replace image with new SVG
			$img.replaceWith($svg);
		});
	});
	// USAGE CSS: 
	/*#logo:hover path {
		fill: rgba(255, 255,255, 0.75);
		border:solid 10px green;
	}*/

	$( document ).tooltip();
});

$('.addsGalery').click(function(){
	var idNodo = $(this).attr('data-state');
	if(idNodo == 'closed'){
		$(this).animate({left:0},150);
		$(this).attr('data-state', 'open');
		$('.galery').fadeIn(1250);
		$('.video').fadeIn(1500);
		$('.web').fadeIn(1750);
		$('.contact').fadeIn(2000);
	}if(idNodo == 'open'){
		$(this).animate({left:-165},350);
		$(this).attr('data-state', 'closed');
		$('.addsGalery a.iconCapMex').fadeOut();
	}
});
























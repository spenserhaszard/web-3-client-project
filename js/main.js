$(document).ready(function(){

	  $("nav a").on("click", function() {
	  	$('.sub-menu').removeClass("drop-down");
	    $("nav a").removeClass('active');
	    $(this).addClass('active');
	    var id = $(this).attr("href");
	    $(id).removeClass("hide");
	    $("main>div").not(id).addClass("hide");
	    $("main>section").not(id).addClass("hide");
	  });

	  $("#home .btn:first-of-type").on("click", function() {
	  	$('.sub-menu').removeClass("drop-down");
	  	$("nav a").removeClass('active');
	  	$('.pizza-anchor').addClass('active');
	  	$('#home').addClass('hide');
	  	$('#pizza').removeClass('hide');
	  });



	$('#menu-li').click( function() {
	  $(".sub-menu").toggleClass("drop-down");
	  $("#arrow").toggleClass("animate");
	} );


	$('.sub-menu > li > a').click(function(){
		$('.sub-menu').removeClass("drop-down");
	});

	$('.mobile-toggle').click( function() {
	  $(this).siblings(".drawer").toggleClass("mobile-hide");
	  $(".mobile-toggle img").toggleClass("animate");
	} );

	$(document).click(function(event) { 
	    if(!$(event.target).closest('nav').length) {
	        if($('.sub-menu').is(":visible")) {
	            $('.sub-menu').removeClass("drop-down");
	        }
	    }        
	})   


});
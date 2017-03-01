$(document).ready(function(){
	

	  $("nav a").on("click", function() {
	    $("nav a").removeClass('active');
	    $(this).addClass('active');
	    var id = $(this).attr("href");
	    $(id).addClass("show");
	    $("div").not(id).removeClass("show");
	    $("section").not(id).removeClass("show");
	  })



	  $("#mobile-menu-btn").on("click", function() {
	    $("nav").removeClass('minimize');
	    $("nav").addClass("maximize");
	    $("#mobile-menu-btn").addClass("minimize");
	  })

	  $(".sub-menu a").on("click", function() {
	  	$("nav").removeClass('maximize');
	    $("nav").addClass("minimize");
	    $("#mobile-menu-btn").addClass("maximize");
	  })




	    // Click a list item to close sub-menu   
	  //   $(document).click(function(e) {
	  //     var target = e.target;
	  //     if (!$(target).is('.sub-menu a') {
	  //       $('nav').removeClass("maximize");
	  //     }
	  //   });
	  // });

	  // Click anywhere to reverse animation and close sub-menu
	  // $(document).click(function(event) {
	  //   if (!$(event.target).closest('.dropdown-toggle').length) {
	  //     if ($('.dropdown').is(':visible')) {
	  //       $('.dropdown').hide();
	  //     } {
	  //       $('.diagonal').removeClass('rotate');
	  //     }
	  //   }
	  // });



});
$(document).ready(function(){
	

	  $("nav a").on("click", function() {
	    $("nav a").removeClass('active');
	    $(this).addClass('active');
	    var id = $(this).attr("href");
	    $(id).addClass("show");
	    $("div").not(id).removeClass("show");
	    $("section").not(id).removeClass("show");
	  })


	  $('#menu-li').click( function() {
	      $(".sub-menu").toggleClass("drop-down");
	      $("#arrow").toggleClass("animate");
	  } );




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
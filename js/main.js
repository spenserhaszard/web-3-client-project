$(document).ready(function(){


	// setTimeout(function(){
	//     $('#loader').addClass('hide');
	//     $('#home').addClass('show');
	// }, 3000);


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
	  $(this).siblings(".drawer").toggleClass("hide");
	  $(".mobile-toggle img").toggleClass("animate");
	} );





	//   $(document).click(function(e) {
	//     var target = e.target;
	//     if (!$(target).is('nav a') {
	//       $('.sub-menu').removeClass("drop-down");
	//     }
	//   });
	// });



	   

	   





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
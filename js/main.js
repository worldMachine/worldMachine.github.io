// $(window).on( 'scroll', function(){
//     var team = $('#Education').offset().top;
//     if ($(window).scrollTop() >= team) {
//         // $('.cubo').css({top:"10%", left: "30%"});
//         $('#nav-home').addClass("active");

//     } else {
//         // $('.cubo').css({top: "0", left:"0"});
//         $('#nav-home').removeClass("active");
//     }
// });



// if ($(window).width() < 960) {
//     // alert('Less than 960');
//     $('#nav-home').attr("data-toggle", "collapse");
//     $('#nav-home').attr("data-target", "navbar-collapse");

//  }
//  else {
//     // alert('More than 960');
    
//  }


// --------------------------------------------------------

// $( '.navbar-nav a' ).on( 'click', function () {
// 	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

$(function() {
    if($(window).width() <= 960) {
        $(".nav-item").attr({
          'data-toggle': 'collapse',
          'data-target': '.navbar-collapse'
        });
       
      } else {
        $(".nav-item").removeAttr('data-toggle data-target'); 
      }
});



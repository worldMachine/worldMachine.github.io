$(function () {
  $('[data-toggle="popover"]').popover({
		placement: 'bottom',
		container: 'body',
		trigger: 'click'
	})
	.click(function () {
		 $(this).text(function(i, text){
				 return text === "View Details" ? "Hide Details" : "View Details";
		 })
	});
	// $('[data-toggle="popover"]').popover({
	//     trigger : 'focus',
	//     placement : 'bottom',
	// 		// html: 'true',
	// 		// animation: 'true'
	//     // content : '<textarea class="popover-textarea">something</textarea>',
	//     // template: ''
	//
	// 		html: 'true',
	// 		title : '<span class="text-info"><strong>title</strong></span>'+
	// 		        '<button type="button" id="close" class="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
	// 		content : 'test'
	// })
// 	$('#mgm-view-details-btn').click(function() {
//     $( '#mgm-view-details-btn' ).html("something ") );
//     return false;
// });
// $( '#mgm-view-details-btn' )
// 	.on( "click", function() {
// 		$( '#mgm-view-details-btn' ).html("something ") );
// });

})

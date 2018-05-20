$("ul").on("click", "li", function () {
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function () {
	$(this).parent().fadeOut(500, function () { //time to fade out in milliseconds, then an anonymous function
		$(this).remove(); // this refers to the whole parent element (li) not just the span
	});
	// event.stopPropagation(); stops events up the breadcrumb from firing
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle(0.3);
})

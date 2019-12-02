$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});


$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){ //Gives parent element
		$(this).remove(); 
	});
	//To not trigger other elements to change
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){   //Enter key number is 13
		var newtodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + newtodo + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
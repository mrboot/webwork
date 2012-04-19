$(document).ready(function(){

	$("#name").val("Please enter your full name");
	$("#field-55d5b2719737aea").val("Incl local dial code");
	$("#field-3d71e928db259fd").val("Format DDMMYYYY");
	$("#field-360c1692698b95b").val("The more you enter here, the less we have to check with you :-)");

	$("input, textarea").focus(function(){
		$(this).select();
	});

	$("figcaption").hide();

	$("figure").each(function(){
		$(this).hover(function(){
			$(this).find("figcaption").slideToggle('slow');
		});
	});

});
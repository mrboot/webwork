$(document).ready(function (){

	// Global variable to hold table row string
	var rowString = "<tr><td>surName</td><td>foreNames</td><td>gender</td><td>dateOfBirth</td><td>expiryDate</td><td>docType</td><td>docNumber</td><td>issuingState</td><td>nationality</td></tr>"

	// On receipt of data string, set focus to hidden field
	// This is indicated by sending special character listened for by this function
	// In testing this is set to "[" (ASCII code 91)
  $("body").keypress(
    function(event) {
      if (event.which == 91) {
        $("input#hiddenInput").focus();
        };
    }
  );

	// receive text from swipe into this text field...

	// on completion of sending data receive special keypress
	// In testing this is set to "TAB" (ASCII code 9)
  $("body").keypress(
    function(event) {
      if (event.which == 9) {
				// read contents of field and split data either side of ":" char
				// store in array variable
				var fieldData = $("input#hiddenInput").val().split(":");

				// update global variable to replace placeholder text with correct value
				rowString = rowString.replace(fieldData[0], fieldData[1]);

				// clear the hidden field
				$("input#hiddenInput").val('');
        };
    }
  );

	// On receipt of END_SWIPE_DATA use global variable to add row to table.
	// This is indicated by sending special character listened for by this function
	// In testing this is set to "]" (ASCII code 93)
  $("body").keypress(
    function(event) {
      if (event.which == 93) {
        $('tr:last').after(rowString);
        };
    }
  );


});




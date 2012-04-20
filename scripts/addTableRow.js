$(document).ready(function (){

	// Global variable to hold table row string
	var rowString = "<tr><td>surName</td><td>foreNames</td><td>gender</td><td>dateOfBirth</td><td>expiryDate</td><td>docType</td><td>docNumber</td><td>issuingState</td><td>nationality</td></tr>"

	// On receipt BEGIN_SWIPE_DATA, set focus to hidden field
	// This is indicated by sending special character listened for by this function
	// In testing this is set to "[" (ASCII code 91)
  $("body").keypress(
    function(event) {
      if (event.which == 91) {
        $("input#hiddenInput").focus();

        // clear the hidden field
        $("input#hiddenInput").val('');
      };
    }
  );

	// receive text from swipe into this text field in comma delimtied form...

	// On receipt of END_SWIPE_DATA use global variable to add row to table.
	// This is indicated by sending special character listened for by this function
	// In testing this is set to "]" (ASCII code 93)
  $("body").keypress(
    function(event) {
      if (event.which == 93) {
        // read contents of field and split into array based on "," char and
        // removing the leading and trailing [] characters.
        // store in array variable
        var fieldData = $("input#hiddenInput").val().replace(/(\[|\])/g, '').split(",");

        // Get rid of the last element in the array as its a blank entry
        fieldData.pop();

        // Iterate through the array splitting out each element into key value pairs.
        // update global variable to replace placeholder text with correct value
        // using the key value pairs
        // rowString = rowString.replace(fieldData[0], fieldData[1]);
        for (var i = 0; i < fieldData.length; i++) {
          rowString = rowString.replace(fieldData[i].split(":")[0], 
                                        fieldData[i].split(":")[1]);
        };

        // add a row after the current last row of the table.
        $('tr:last').after(rowString);
      };
    }
  );

});

// Test String for the text field
// [surName:Booth,foreNames:Mark,gender:Male,dateOfBirth:18-12-1972,expiryDate:20-01-2014,docType:Passport,docNumber:123456789,issuingState:GBR,nationality:GBR,]



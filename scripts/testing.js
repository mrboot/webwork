var tableRow = "<tr><td>10 Aug</td><td>Big Important Meeting</td><td>N/A</td><td>Mark Booth</td></tr>"

$(document).ready(function (){
  $("body").keydown(
    function(event) {
      if (event.which == 83) {
        $('tr:last').after(tableRow).slideDown("slow");
        };
    }
  );
});
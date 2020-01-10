var x = document.getElementById("text_box1").value;

function run()
{
  if(x === "")
  {
    alert("Podaj dane!");
    //tutaj dam zwrot błędu
  }else {
    $.getJSON( "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", function( data ) {
    });
  }
}

var x = document.getElementById("text_box1");

function run()
{
  if(x != "")
  {
    $.getJSON( "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", function( data ) {
    });
  }else
  {
    console.log("Podaj dane!");
    //tutaj dam zwrot błędu
  }
}

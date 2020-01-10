function run()
{
  if(document.getElementById("text_box1") == null)
  {
    alert("Podaj dane!");
  }else {
    $.getJSON( "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", function( data ) {
      var x = document.getElementById("text_box1").value;
      console.log(x);
    });
  }
}

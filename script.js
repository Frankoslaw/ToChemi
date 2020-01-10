function run()
{
  if(document.getElementById("text_box1") == null)
  {
    alert("Błąd kod:2137");
  }
  else 
  {
    var x = document.getElementById("text_box1").value;
    if(x === "")
    {
      alert("Podaj dane!");
    }
    else
    {
      $.getJSON( "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", function( data ) {
        console.log(x.toUpperCase());
        
        for(var i = data["elements"].length;i > 0;i--)
        {
          console.log(data["elements"][i - 1]["symbol"])
        }
      });
    }
  }
}

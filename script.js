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
        for(var i = data["elements"].length;i > 0;i--)
        {
          console.log(x + " | " + data["elements"][i - 1]["symbol"]);
          if(x == data["elements"][i - 1]["symbol"])
          {
            console.log("Masa atomowa" + Math.round(data["elements"][i]["atomic_mass"]));
            console.log("Elektrony i protony" + data["elements"][i]["number"]);
          }
        }
      });
    }
  }
}

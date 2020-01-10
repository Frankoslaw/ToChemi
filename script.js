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
        for(var i = data["elements"].length - 1;i > -1;i--)
        {
          if(x == data["elements"][i]["symbol"])
          {
            //console.log("Masa atomowa" + Math.round(data["elements"][i]["atomic_mass"]));
            //console.log("Elektrony i protony" + data["elements"][i]["number"]);
            
            grupa.innerText = data["elements"][i]["xpos"];
            elektrony_walencyjne.innerText = data["elements"][i]["electron_configuration"].slice(-1);
            ilosc_wionzani.innerText = "Do zrobienia";
          }
        }
      });
    }
  }
}

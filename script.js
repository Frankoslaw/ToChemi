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
            if(data["elements"][i]["xpos"] == "1" || data["elements"][i]["xpos"] == "2")
            {
                elektrony_walencyjne.innerText = data["elements"][i]["xpos"];
            }
            else if(data["elements"][i]["xpos"] > 12 && data["elements"][i]["xpos"] < 19)
            {
                elektrony_walencyjne.innerText = data["elements"][i]["xpos"] - 10;
            }
            else
            {
              elektrony_walencyjne.innerText = "Nie da się łatwo określić";
            }
            
            
            if(data["elements"][i]["symbol"] == "H")
            {
              ilosc_wionzani.innerText = "1";
            }
            else
            {
              ilosc_wionzani.innerText = 8 - elektrony_walencyjne.innerText;
            }
          }
        }
      });
    }
  }
}

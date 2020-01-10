var network_data;
$.getJSON("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", 
function(data){
    network_data = data.contents;
})

console.log(network_data["elements"].length);

var myDATA;

$.getJSON( "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", function( data ) {
  myDATA = data;
});

console.log(myDATA);

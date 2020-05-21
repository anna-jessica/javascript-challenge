// from data.js
var tableData = data;
console.log(data);
    

var tbody = d3.select("tbody");
data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
function searchResults(data) {
tbody.html("");
data.forEach((entry)=>{
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);

        });
    });

}
button.on("click", function() {
    var searchDate = input.property("value");
    var filteredTable = data.filter(search => search.datetime === searchDate)
    searchResults(filteredTable)
});

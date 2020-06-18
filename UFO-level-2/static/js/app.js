// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sighting data from data.js
console.log(tableData);

// Use d3 to update each cell's text with column values
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
  


// grab references to the button element 
var button =d3.select("#filter-btn");

filteredData = tableData

// Submit Button handler
function handleSubmit() {
// button.on("click", handleClick); {
    console.log("Hey! I'm inside the function")
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");

    console.log(dateInput)

    // Clear the inputValue
    d3.select("#datetime").property("value", "")
    d3.select("#city").property("value", "")
    d3.select("#state").property("value", "")
    d3.select("#country").property("value", "")
    d3.select("#shape").property("value", "")
    console.log("Everything is cleared out")

    // Check to see if any input in any boxes
    if (dateInput != ""){
        filteredData = filteredData.filter(data => data.datetime === dateInput);
    }
    if (cityInput != ""){
        filteredData = filteredData.filter(data => data.city === cityInput);
    }
    if (stateInput != ""){
        filteredData = filteredData.filter(data => data.state === stateInput);
    }
    if (countryInput != ""){
        filteredData = filteredData.filter(data => data.country === countryInput);
    }
    if (shapeInput != ""){
        filteredData = filteredData.filter(data => data.shape === shapeInput);
    }

    // Clear out tbody
    tbody.html("")
    console.log("Tbody is cleared out")

    // Append filtered data to tbody
    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


d3.select("#filter-btn").on("click", handleSubmit)}; 

function renderTable(dataSet) {
    // get a reference to the tbody tag
    var tbody = d3.select('tbody');

    // Find all child <tr> and delete them, emptying the table
    tbody.selectAll('tr').remove()

    // Loop through the data
    dataSet.forEach((dataPoint) => {
        // add a <tr>
        var tr = tbody.append('tr');

        // add <td> tags for table data fields
        tr.append('td').text(dataPoint.datetime);
        tr.append('td').text(dataPoint.city);
        tr.append('td').text(dataPoint.state);
        tr.append('td').text(dataPoint.country);
        tr.append('td').text(dataPoint.shape);
        tr.append('td').text(dataPoint.durationMinutes);
        tr.append('td').text(dataPoint.comments);
    });
}


// from data.js
var tableData = data;

// YOUR CODE HERE!

renderTable(tableData)

// Reference to the filter button
var filterButton = d3.select('button#filter-btn')

// Listen for click events, and filter the data
filterButton.on('click', () => {

    // get filters from input
    var dateTimeInput = d3.select('input#datetime').property('value')
    var cityInput = d3.select('input#datetime').property('value')
    var countryInput = d3.select('input#country').property('value')
    var shapeInput = d3.select('input#shape').property('value')
    
    // filter the data set (non-permanently)
    var dateFilteredData = tableData.filter(dp => dp.datetime.startsWith(dateTimeInput))
    var cityFilteredData = dateFilteredData.filter(dp => dp.city === cityInput)
    var countryFilteredData = cityFilteredData.filter(dp => dp.country === countryInput)
    var shapeFilteredData = countryFilteredData.filter(dp => dp.shape.startsWith(shapeInput))
    
    // render the filtered data
    renderTable(shapeFilteredData)
});




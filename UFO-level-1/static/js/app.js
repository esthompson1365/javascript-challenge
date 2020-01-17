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
    // get date from input
    var dateTimeInput = d3.select('input#datetime').property('value')
    
    // filter the data set (non-permanently)
    var filteredData = tableData.filter(dataPoint => dataPoint.datetime.startsWith(dateTimeInput))

    // render the filtered data
    renderTable(filteredData)

});




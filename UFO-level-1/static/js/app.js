// from data.js
var tableData = data;

// YOUR CODE HERE!

// get a reference to the tbody tag
var tbody = d3.select('tbody');

// Loop through the data
data.forEach((dataPoint) => {
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


// // from data.js

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var initialTable = (table) => { 
    table.forEach((obs)  => {
    var row = tbody.append('tr');
    Object.entries(obs).forEach(([key, value]) => {
        var cell = tbody.append('td');
        cell.text(value);
    });
});
}

initialTable(tableData);

var dateFiltering = () => {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(obs => obs.datetime === inputValue);

    tbody.selectAll('td').remove();

    filteredData.forEach((obs)=> {
        var row = tbody.append("tr");
        Object.entries(obs).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
};

var submit = d3.select("#filter-btn");

submit.on('click', dateFiltering);
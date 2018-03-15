/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=19wBYPRVM5tBYRZtDhCYkfx7lMDwXX15X4xlA0MjhRgo&output=html&usp=sharing&range=B2:D11');
    //  query.setQuery('SELECT A, B, C, D label A "Duration", B "Song", C "Requested By", D "URL"');
    query.setQuery('SELECT B, C, D label B "Room", C "Now", D "Next"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        // alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();

    var timetables = document.querySelectorAll('div.timetable');
    for (var i = 0, element; element = timetables[i]; i++) {

        visualization = new google.visualization.Table(element);
        visualization.draw(data, {
            allowHtml: true,
            cssClassNames: {
                headerRow: 'timetable-header',
                tableRow: 'timetable-row',
                oddTableRow: 'timetable-row'
            }
        });

    }
}
//google.setOnLoadCallback(drawVisualization);
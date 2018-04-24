$(document).ready(function() {
// write your code here
    var html = '';
    $.getJSON( "data.json", function(data) {
        for (var i in data) {
            //console.log(data[i].name);
            console.log(data[i].location);
            html += '<tr><td>' + data[i].name +'</td><td>' +
             data[i].description + '</td><td><a href="http://maps.google.com/?q=' +
              data[i].location +
               '"><button id ="googlemaps-button">Open in Google Maps</button></a></td></tr>';
        }
       $('table').append(html);
    })
})


//<a href="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003">...</a>

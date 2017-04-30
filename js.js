$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    console.log(response.results);
    var tbl = $("<table/>").attr("id", "mytable");
    $("#test").append(tbl);
    for (var i = 0; i < response.results.length; i++) {

      var divop = "<div>"
      var td1 = "<div>" + response.results[i]["dateOfShow"] + "</div> ";
      var td2 = "<div>" + response.results[i]["name"] + "</div>";
      var td3 = "<div>" + response.results[i]["eventHallName"] + "</div>";
      var td4 = "<div class='gallery'><img src='" + response.results[i]['imageSource'] + "'><p class='desc'>" + response.results[i]['eventDateName'] + "</p>";
      var td5 = "" + response.results[i]["name"] + "";
      var td6 = "<div>" + response.results[i]["userGroupName"] + "</div>";
      var divlok = "</div>"

      $("#mytable").append(divop + td4 + divlok);

    }


  }
});

$(function() {
  $("#tabs").tabs();
});
/*
$(document).ready(function() {

    $('#calendar').fullCalendar({

      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listYear'
      },

      displayEventTime: false, // don't show the time column in list view

      googleCalendarApiKey: 'AIzaSyB4HaFwZgQjw1SbZR5cFiSxdOV-LcJ74Ig',

      // US Holidays
      events: 'en.usa#holiday@group.v.calendar.google.com',

      eventClick: function(event) {
        // opens events in a popup window
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },

      loading: function(bool) {
        $('#loading').toggle(bool);
      }

    });

  });*/

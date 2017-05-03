/* Function til að ná í gögn frá midi.is Api og setja það í divs sem sýnir mynd og nafn*/
var arrays = [];
var datearray = [];
$.ajax({
  url: 'http://apis.is/concerts',
  type: 'GET',
  dataType: 'json',
  success: function (response) {

    var tagged = {};
    var gamlabio = [];
    var haskolabio = [];
    var akureyri = [];
    var hannesarholt = [];
    var spot = [];
    var hotelork = [];
    console.log(response.results);
    var tbl = $("<table/>").attr("id", "mytable");
    $("#events").append(tbl);
    $.each(response.results , function() {
      var divop = "<div id='imgdiv'>";
      var td1 = "<div>" + this.dateOfShow + "</div> ";
      var td2 = "<div>" + this.name + "</div>";
      var td3 = "<div>" + this.eventHallName + "</div>";
      var td4 = "<div class='gallery' data-tags='" + this.eventHallName + "' alt='" + this.eventDateName + "'><img src='" + this.imageSource + "'></img><p class='desc'>" + this.eventDateName + "</p>";
      var td5 = "<div>" + this.userGroupName + "</div>";
      var divlok = "</div>";


      if (this.eventHallName.includes("Gamla")) {
        gamlabio.push(this);
      }
      else if (this.eventHallName.includes("Háskóla")) {
        haskolabio.push(this);
      }
      else if (this.eventHallName.includes("Kópavogi")) {
        spot.push(this);
      }
      else if (this.eventHallName.includes("Akureyri")) {
        akureyri.push(this);
      }
      else if (this.eventHallName.includes("Hannesarholt")) {
        hannesarholt.push(this);
      }
      else if (this.eventHallName.includes("Örk")) {
        hotelork.push(this);
      }

      $("#mytable").append(divop + td4 + divlok);

      moment.locale('is');
      var day = moment(this.dateOfShow);
      var event = {
        title: "" + this.eventDateName + "",
         start : day,
         allDay: false,
      };
      $('#calendar').fullCalendar('renderEvent',event,true);



      datearray.push(day);
    });

    arrays.push(response.results,gamlabio,haskolabio,spot,akureyri,hannesarholt,hotelork);
    console.log(datearray);
    console.log(moment().format('LLLL'));


  }
});



$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      header :{
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      height: parent,
      locale: 'is',
      allDaySlot: false,
      navLinks: true,


        // put your options and callbacks here
    });    

});

$(function() {
  $("#tabs").tabs({
    show: function(event, ui) {
        $('#calendar').fullCalendar('render');
    }
  });
});



/*$(document).ready(function() {

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

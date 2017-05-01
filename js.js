/* Function til að ná í gögn frá midi.is Api og setja það í divs sem sýnir mynd og nafn*/
var arrays = [];
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
    for (var i = 0; i < response.results.length; i++) {
      var x = i + 1;
      var divop = "<div id='imgdiv'>";
      var td1 = "<div>" + response.results[i].dateOfShow + "</div> ";
      var td2 = "<div>" + response.results[i].name + "</div>";
      var td3 = "<div>" + response.results[i].eventHallName + "</div>";
      var td4 = "<div class='gallery' data-tags='" + response.results[i].eventHallName + "' alt='" + response.results[i].eventDateName + "'><img src='" + response.results[i].imageSource + "'></img><p class='desc'>" + response.results[i].eventDateName + "</p>";
      var td5 = "<div>" + response.results[i].userGroupName + "</div>";
      var divlok = "</div>";


      if (response.results[i].eventHallName.includes("Gamla")) {
        gamlabio.push(response.results[i]);
      }
      else if (response.results[i].eventHallName.includes("Háskóla")) {
        haskolabio.push(response.results[i]);
      }
      else if (response.results[i].eventHallName.includes("Kópavogi")) {
        spot.push(response.results[i]);
      }
      else if (response.results[i].eventHallName.includes("Akureyri")) {
        akureyri.push(response.results[i]);
      }
      else if (response.results[i].eventHallName.includes("Hannesarholt")) {
        hannesarholt.push(response.results[i]);
      }
      else if (response.results[i].eventHallName.includes("Örk")) {
        hotelork.push(response.results[i]);
      }



      /*var $btns = $('.btn').click(function() {
        if (this.id == 'all') {
          $("#mytable").append(divop + td4 + divlok);
        }
        else if (this.id == '1') {

        }
      })*/



      $("#mytable").append(divop + td4 + divlok);
    }
    arrays.push(response.results,gamlabio,haskolabio,spot,akureyri,hannesarholt,hotelork);
    console.log(arrays);
    console.log(arrays[0][1].imageSource);

    /*for (var i = 0; i < arrays.length; i++) {
      var array1 = "<div class='gallery' data-tags='" + arrays[0][1].eventHallName + "' ><img src='" + arrays[0][1].imageSource + "'></img><p class='desc'>" + arrays[0][1].eventDateName + "</p>";
      var array2 = "<div class='gallery' data-tags='" + arrays[1][1].eventHallName + "' ><img src='" + arrays[1][1].imageSource + "'></img><p class='desc'>" + arrays[1][1].eventDateName + "</p>";
      var array3 = "<div class='gallery' data-tags='" + arrays[2][1].eventHallName + "' ><img src='" + arrays[2][1].imageSource + "'></img><p class='desc'>" + arrays[2][1].eventDateName + "</p>";
      var array4 = "<div class='gallery' data-tags='" + arrays[3][1].eventHallName + "' ><img src='" + arrays[3][1].imageSource + "'></img><p class='desc'>" + arrays[3][1].eventDateName + "</p>";
      var array5 = "<div class='gallery' data-tags='" + arrays[4][1].eventHallName + "' ><img src='" + arrays[4][1].imageSource + "'></img><p class='desc'>" + arrays[4][1].eventDateName + "</p>";
      var array6 = "<div class='gallery' data-tags='" + arrays[5][1].eventHallName + "' ><img src='" + arrays[5][1].imageSource + "'></img><p class='desc'>" + arrays[5][1].eventDateName + "</p>";
      var array7 = "<div class='gallery' data-tags='" + arrays[6][1].eventHallName + "' ><img src='" + arrays[6][1].imageSource + "'></img><p class='desc'>" + arrays[6][1].eventDateName + "</p>";
      $("#events").append(array1);
    }*/


    /*arrays.forEach(function() {
      var btn = "<button class='button' text='" + arrays[i][i].eventHallName + "'>";
      $("#buttons").append(btn);
    });*/

    /*$.each(arrays, function(item) {
      $('<button/>', {
        text: tagName + ' (' + arrays[i][i].eventHallName + ')',
        click: function() {
          $(this).addClass('active').siblings().removeClass('active');
          $('gallery').hide().filter(arrays[i][i].eventHallName).show();
        }
      }).appendTo($buttons);
    });*/
    console.log(arrays[1][1].eventHallName);

  }
});

$(function() {
  $("#tabs").tabs();
});




/*(function() { // Lives in an IIFE
  var $imgs = $('#events img'); // Get the images
  var $search = $('#search'); // Get the input element
  var cache = []; // Create an array called cache

  $imgs.each(function() { // For each image
    cache.push({ // Add an object to the cache array
      element: this, // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() { // Declare filter() function
    var query = this.value.trim().toLowerCase(); // Get the query
    cache.forEach(function(img) { // For each entry in cache pass image
      var index = 0; // Set index to 0

      if (query) { // If there is some query text
        index = img.text.indexOf(query); // Find if query text is in there
      }

      img.element.style.display = index === -1 ? 'none' : ''; // Show / hide
    });
  }

  if ('oninput' in $search[0]) { // If browser supports input event
    $search.on('input', filter); // Use input event to call filter()
  } else { // Otherwise
    $search.on('keyup', filter); // Use keyup event to call filter()
  }

}());*/

/*(function() {
  var $imgs = $('#imgdiv img');
  var $buttons = $('#buttons');
  var tagged = {};

  $imgs.each(function() {
    var img = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function(tagName) {
        if (tagged[tagName === null]) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      });
    }
  });

    $('<button/>' , {
      text: 'Show All',
      class: 'active',
      click: function(){
        $(this).addClass('active').siblings().removeClass('active');
        $imgs.show();
      }
    }).appendTo($buttons);

    $.each(tagged, function(tagName) {
      $('<button/>', {
        text: tagName + ' (' + tagged[tagName] + ')',
        click: function() {
          $(this).addClass('active').siblings().removeClass('active');
          $imgs.hide().filter(tagged[tagName]).show();
        }
      }).appendTo($buttons);
    });

}());*/

/* Function sem setur upp tabs úr jqueryUI */


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

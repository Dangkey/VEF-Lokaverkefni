/* Function til að ná í gögn frá midi.is Api og setja það í divs sem sýnir mynd og nafn*/
var datearray = [];
$.ajax({
  url: 'http://apis.is/concerts',
  type: 'GET',
  dataType: 'json',
  success: function(response) {



    console.log(response.results);
    var tbl = $("<table/>").attr("id", "mytable");
    $("#events").append(tbl);
    $.each(response.results, function() {
      moment.locale('is');
      var day = moment(this.dateOfShow);
      var divop = "<div id='imgdiv'>";
      var td1 = "<div>" + this.dateOfShow + "</div> ";
      var td2 = "<div>" + this.name + "</div>";
      var td3 = "<div>" + this.eventHallName + "</div>";
      var td4 = "<div class='gallery' data-tags='" + this.eventHallName + "' alt='" + this.eventDateName + "'><img src='" + this.imageSource + "'></img><p class='desc'>" + this.eventDateName + '<br>' + this.eventHallName + '<br>' + moment(day).format('Do MMMM YYYY') + "</p>";
      var td5 = "<div>" + this.userGroupName + "</div>";
      var divlok = "</div>";

      $("#mytable").append(divop + td4 + divlok);


      var event = {
        title: "" + this.eventDateName + "",
        start: day,
        allDay: false,
      };
      datearray.push(day);





      $('#calendar').fullCalendar('renderEvent', event, true);


    });

  }
});



$(document).ready(function() {


  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    height: parent,
    locale: 'is',
    allDaySlot: false,
    navLinks: true,
    defaultView: 'listWeek'




  });

});





function initMap() {
  mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(64.914438, -18.2557869),
    mapTypeId: 'roadmap'
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var markers = [
    ['Háskólabíó, Reykjavík', 64.140366, -21.954583],
    ['Gamlabíó, Reykjavík', 64.146996, -21.933359],
    ['Hannesarholt, Reykjavík', 64.144256, -21.935549],
    ['Spot, Kópavogi', 64.100077, -21.876811],
    ['Hótel Örk, Hveragerði', 63.996944, -21.192109],
    ['Hlégarður, Mosfellsbær', 64.168054, -21.690595],
    ['Kaffi Rauðka, Siglufjörður', 66.149292, -18.909037],
    ['Græni Hatturinn, Akureyri', 65.681356, -18.089589],

  ];

  var infoWindowContent = [
    ['<div class="info_content">' +
      '<h3>Háskóla Bíó</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Gamlabíó</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Hannesarholt</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Spot</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Hótel Örk</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Hlégarður</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Kaffi Rauðka</h3>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Græni Hatturinn</h3>' +
      '</div>'
    ]
  ];
  var infoWindow = new google.maps.InfoWindow(),
    marker, i;

  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
        map.panTo(marker.getPosition());
            map.setZoom(15);
            map.setCenter(marker.getPosition());

      };

    })(marker, i));

  }
}
jQuery('#tabs, #map').tabs({
  activate: function(event, ui) {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(mapOptions.center);
  }
});

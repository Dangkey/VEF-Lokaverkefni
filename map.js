var panorama;
      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
              position: {lat: 64.3270716, lng: -20.119947799999977},
              pov: {heading: 0, pitch: -20},
              zoom: 1
            });
      }

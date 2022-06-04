if ($("#google-map").length) {
    function initialize() {
        var mapOptions = {
            zoom: 3,
            scrollwheel: false,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d3d3d3"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f3f3f3"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d3d3d3"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#f8f8f8"
                }, {
                    "lightness": 25
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#222222"
                }, {
                    "lightness": 30
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 10
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }],

            /* --Add your Location here-- */
            center: new google.maps.LatLng(35.8617, 104.1954)
        };
        var map = new google.maps.Map(document.getElementById('google-map'),
            mapOptions);

        var Location = [];
        var j=0;
        $('.map-locations li').each(function () {
            var dataCountry = $(this).attr("data-country");
            var dataLat = $(this).attr("data-lat");
            var dataLong = $(this).attr("data-long");
            var dataInfected = $(this).attr("data-infected");
            var dataRecovered = $(this).attr("data-recovered");
            var dataDeadth = $(this).attr("data-deadth");
            var dataTotalPop = $(this).attr("data-total-population");
            // alert("The data is: " + dataCountry + "lat: " +dataLat+ "Long: "+dataLong+" infected: "+dataInfected+" "+dataRecovered+" "+dataDeadth+" "+dataTotalPop);
            location[j]=[dataCountry,dataLat,dataLong,dataInfected,dataRecovered,dataDeadth,dataTotalPop];
            location[j++];
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i=0;

        for (i = 0; i < j; i++) {
            var percent;
            percent =location[i][3]/location[i][6]*100;
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(location[i][1], location[i][2]),
                center: location[i],
                icon:  {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: percent,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.3,
                    strokeWeight:percent,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    radius: 50
                },
                map: map,
            });


            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                var content='<div class="map-content-area"><h4>'+location[i][0]+'</h4><span class="infected">Infected Case :<i>'+location[i][3]+'</i></span><span class="recovered">Recovered:<i>'+location[i][4]+'</i></span><span class="deadth">Deaths:<i>'+location[i][5]+'</i></span></div>';
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }



    }
    google.maps.event.addDomListener(window, 'load', initialize);
}




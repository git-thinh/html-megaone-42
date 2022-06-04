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

        // var marker = new google.maps.Marker({
        //     position: map.getCenter(),
        //     /* Map Marker if you want to add custom icon */
        //     icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
        //     },
        //     map: map
        // });

        // google.maps.event.addListener(marker, 'click', function() {
        //
        //     infowindow.open(map, this);
        // });


        var locations = [
            //[NAME, LAT, LONG, ,INFECTED,RECOVERED,DEATHS,TOTAL POPULATION]
            ['China',35.8617,104.1954,1800,200,30,5000],
            ['Italy',41.8719,12.5674,1200,200,30,5000],
            ['Iran',32.4279,53.6880,800,65,85,8000],
            ['Spain',39.32683959,-4.83819008,120,12,10,6000],
            ['Germany',51.1657,10.4515,180,3,2,5000],
            ['France',46.2276,2.2137,160,100,80,6000],
            ['United States US',39.7837304,-100.4458825,360,100,80,5000],
            ['South Korea',35.9078,127.7669,660,100,80,5000],
            ['Switzerland',46.8182,8.2275,660,100,80,5000],
            ['United Kingdom UK',55.3781,3.4360,660,100,80,5000],
            ['Netherlands',52.1326,5.2913,360,100,80,5000],
            ['Austria',47.5162,14.5501,260,100,80,5000],
            ['Norway',60.5000209,9.0999715,160,100,80,5000],
            ['Belgium',50.5039,4.4699,160,100,80,5000],
            ['Sweden',59.6749712,14.5208584,160,100,80,5000],
            ['Denmark',56.2639,9.5018,80,100,80,5000],
            ['Malaysia',4.2105,101.9758,260,100,80,5000],
            ['Canada',61.0666922,-107.9917071,560,100,80,5000],
            ['Qatar',25.3336984,51.2295295,460,100,80,5000],
            ['Singapore',1.357107,103.8194992,460,100,80,5000],
            ['Indonesia',0.7893,113.9213,460,100,80,5000],
            ['Pakistan',30.3753,69.3451,200,50,1,5000],
            ['India',22.3511148,78.6677428,200,40,3,5000],
            ['Saudi Arabia',23.8859,45.0792,360,100,80,5000],
            ['Iraq',33.2232,43.6793,560,100,80,5000],
            ['United Arab Emirates UAE',23.4241,53.8478,660,100,80,5000],
            ['Sri Lanka',7.8731,8.7718,460,100,80,5000],
            ['New Zealand',-41.5000831,172.8344077,760,100,80,5000],
        ];


        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            var percent;
            percent =locations[i][3]/locations[i][6]*100;
            var svg = [
                '<svg class="map-icons" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">',
                '<g><title>background</title><rect fill="none" id="canvas_background" height="100%" width="100" y="-1" x="-1"/>',
                '<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g>',
                '</g>',
                '<g>',
                '<title>Layer 1</title>',
                '<ellipse stroke="rgba(241, 0, 0, 0.5)" ry="'+percent+'" rx="'+percent+'" id="svg_1" cy="25" cx="25" stroke-width="'+percent+'" fill="#ffaaaa"/>',
                '</g>',
                '</svg>'
            ].join('\n');
            // alert(Math.sqrt(locations[i][3]) * 100);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                // icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
                // },
                center: locations[i],

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
                var content='<div class="map-content-area"><h4>'+locations[i][0]+'</h4><span class="infected">Infected Case :<i>'+locations[i][3]+'</i></span><span class="recovered">Recovered:<i>'+locations[i][4]+'</i></span><span class="deadth">Deaths:<i>'+locations[i][5]+'</i></span></div>';
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }



    }
    google.maps.event.addDomListener(window, 'load', initialize);
}




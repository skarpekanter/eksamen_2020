/**
 * file: js.js
 * purpose: interactivity
 **/

console.log('JavaScript from js/js.js: up and running!');

//MAPBOX API
mapboxgl.accessToken = 'pk.eyJ1Ijoic2thcnBla2FudGVyIiwiYSI6ImNrZnFrZWR2cjE1OXEyeW9lazVmZ2lidGgifQ.rHA3DQA4-1UVos68yT2JxA';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/skarpekanter/ckihxx3wk6znl19pmpduvprm9', // style URL
center: [8.43362429158215, 55.47378549640349], // starting position [lng, lat]
zoom: 15, // starting zoom
});

//MAPBOX API SLUT

//Markør Ikon på MAP
    map.on('load', function () {
        map.loadImage(
            "/img/mapmarker.png",
            function (error, image) {
                if (error) throw error;
                map.addImage('marker', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [8.433465898192582, 55.474168818325]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'marker',
                        'icon-size': 0.05
                    }
                });
            }
        );
    });    
//Markør Ikon på MAP
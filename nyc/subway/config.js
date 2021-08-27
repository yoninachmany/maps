var config = {
    style: 'mapbox://styles/yoninachmanymapbox/cksrui6pr2m3h17n0uqje6ta4?fresh=true',
    accessToken: 'pk.eyJ1IjoieW9uaW5hY2htYW55bWFwYm94IiwiYSI6ImNrMTg3dXo4dDAwbHkzYnBob3dtajM4a2kifQ.SNPc6w7pfD_HalkSzRkFKw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'New York City Subway Map in 3D',
    subtitle: 'Reimagining the curves of the 1979 Hertz-Tauranac map as 3D arcs',
    byline: 'By Yoni Nachmany',
    footer: 'Source: <a href="https://new.mta.info/map/5256" target="_blank">The New York City Subway map</a>, <a href="https://work.co/clients/mta/" target="_blank">The MTA Live Subway Map</a>, <a href="https://data.cityofnewyork.us/Transportation/Subway-Lines/3qz8-muuu" target="_blank">NYC Open Data</a>, <a href="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html" target="_blank">The New York Times: "New York\'s Subway Map Like You\'ve Never Seen It Before"</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'right',
            hidden: false,
            title: 'Geography x Geometry',
            description: 'By styling a Mapbox map to resemble today\'s subway map and connecting points along subway lines in a third dimension, I play with <a href="https://work.co/clients/mta/" target="_blank"> the flow of Hertz\'s map and the abstraction of Vignelli\'s map</a>.',
            location: {
                center: [-73.857, 40.7179],
                zoom: 10.19,
                pitch: 0,
                bearing: 29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mapbox-streets-and-mapbox-studio',
            alignment: 'right',
            hidden: false,
            title: 'Mapbox Streets & Mapbox Studio',
            description: '<a href="https://www.mapbox.com/maps/streets" target="_blank">Mapbox Streets</a> assembles geographic data into a coherent map, with increasing detail as you zoom in. <a href="https://www.mapbox.com/mapbox-studio" target="_blank">Mapbox Studio</a> enabled me to start from a simpler basemap and modify the visible features and color palette to look like the iconic subway map that I grep up reading as I waited for the train to arrive.',
            location: {
                center: [-73.90287, 40.86379],
                zoom: 13.8,
                pitch: 0,
                bearing: 29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'growing-up',
            alignment: 'right',
            hidden: false,
            title: 'Growing up...',
            image: 'https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-videoSixteenByNineJumbo1600.jpg',
            description: 'I got on and off the subway at 96th & Broadway, and to get to high school, I took the crosstown bus with my student metrocard.',
            location: {
                center: [-73.95586, 40.79445],
                zoom: 14.69,
                pitch: 0,
                bearing: 29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nowadays',
            alignment: 'center',
            hidden: false,
            title: 'Nowadays...',
            description: 'Back on the Upper West Side, during this pandemic summer, Central Park is where I go to run and relax.',
            location: {
                center: [-73.9693, 40.78312],
                zoom: 14.53,
                pitch: 0,
                bearing: 119
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'back-in-high-school',
            alignment: 'center',
            hidden: false,
            title: 'Back in High School...',
            description: 'I took the 4/5/6 line, known as \'the most crowded in the country\', to gym classes at Hunter College.',
            location: {
                center: [-73.96349, 40.78214],
                zoom: 14.59,
                pitch: 41,
                bearing: -151.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'back-to-business',
            alignment: 'center',
            hidden: false,
            title: 'Back to Business',
            description: 'Today, I work with maps and satellite imagery, which open new ways of seeing the world and telling stories. For this project, I visualized <a href="https://data.cityofnewyork.us/Transportation/Subway-Lines/3qz8-muuu#Export" target="_blank">NYC open data</a> using <a href="https://deck.gl/docs/api-reference/layers/arc-layer" target="_blank">deck.gl\'s Arc Layer</a> as a <a href="https://blog.mapbox.com/launching-custom-layers-with-uber-2a235841a125" target"_blank">Mapbox GL JS custom layer</a>. The height and width of arcs are proportional to their distance and the number of train lines between points. By surfacing data and patterns about subway routes, we can better appreciate the spectrum of this system.',
            location: {
                center: [-73.95791, 40.77354],
                zoom: 14.72,
                pitch: 85,
                bearing: -150.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nyc-open-data',
            alignment: 'center',
            hidden: false,
            title: '"NYC Open Data"',
            description: 'The "Subway Lines" dataset on the portal reflect the shapes of routes, but with some extra line segments.',
            location: {
                center: [-73.96527, 40.7651],
                zoom: 14.54,
                pitch: 85,
                bearing: 170.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hand-drawn-curves',
            alignment: 'center',
            hidden: false,
            title: 'Hand-Drawn Curves',
            description: 'According to <a href="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html" target="_blank">The New York Times</a>, the designer Nobuyuki Siraisi "rode the length of every train line with his eyes closed, feeling the curve of each track and then drawing the path he perceived in his sketchbook."',
            location: {
                center: [-73.98884, 40.7104],
                zoom: 13.61,
                pitch: 85,
                bearing: 48.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'take-the-a-train',
            alignment: 'center',
            hidden: false,
            title: '"Take the A Train"',
            description: 'Featuring the longest route, from Inwood to Far Rockaway, and the longest distance between two stations. The breadth and complexity of the A train embodies the scale of three systems merged to one and evolving.',
            location: {
                center: [-73.83352, 40.63108],
                zoom: 12.65,
                pitch: 85,
                bearing: -50.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'the-end',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-73.98079, 40.70337],
                zoom: 13.51,
                pitch: 48,
                bearing: 38.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

const IMAGES = {
    'Statue of Liberty': 'https://miro.medium.com/max/2000/0*uFDrXUtm3MGuPld5.png',
    "Lady Liberty's Torch": 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Seurat-La_Parade_detail.jpg/280px-Seurat-La_Parade_detail.jpg',
    'Ellis Island': './images/openpointclouddata.jpg',
    'Red Hook': 'https://www1.nyc.gov/assets/doitt/images/content/pages/gis-lidar-and-derived-products.jpg',
    "Governor's Island": 'https://maps.nyc.gov/lidar/2017/img/topo.png',
    'The Battery': 'https://cesium.com/images/cesium-ion/photogrammetry.jpg',
    'The Oculus': 'https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/image3.gif',
    'Freedom Tower': 'https://cesium.com/images/cesium-ion/photogrammetry.jpg'
};

const DESCRIPTIONS = {
    'Statue of Liberty': "When I shared the news that I was moving to DC to work at <a href='https://www.mapbox.com/' target='_blank'>Mapbox</a>, I posted this image. I'm a New Yorker who loves art and maps, so <a href='https://blog.mapbox.com/coloring-lidar-4522ca5a7186' target='_blank'>this piece</a> by Allan Walker piqued all of my interests.",
    "Lady Liberty's Torch": "Look at those dots - it's like jumping <i>into</i> a pointallist painting!",
    'Ellis Island': 'Nearly a year later, I was in quarantined in DC and missing home. NYC was going through it, and I wanted to feel connected. I started to recreate this work and posted a picture on April 15th.',
    'Red Hook': 'For elevation data, I found the <a href="https://maps.nyc.gov/lidar/2017/" target="_blank">2017 NYC LiDAR Capture</a>, collected after Hurricane Sandy for recovery and resiliency.',
    "Governor's Island": 'Airplanes overhead captured a topographic "point cloud", using lasers! Below, points are colored by category, like land or water.',
    'The Battery': 'For more photorealism, I <a href="https://pdal.io/workshop/exercises/analysis/colorization/colorization.html" target="_blank">colorized points</a> with satellite imagery, which I uploaded to <a href="https://cesium.com/blog/2019/11/06/cesium-uber/" target="_blank">Cesium</a>, a platform for 3D geospatial data.',
    'The Oculus': 'To render 280 million points, I used loaders.gl, which supports <a href="https://loaders.gl/examples/3d-tiles" target="_blank">3D Tiles</a> for <a href="https://deck.gl/examples/tile-3d-layer/" target="_blank">deck.gl</a> and can be used with a <a href="https://deck.gl/docs/api-reference/mapbox/mapbox-layer" target="_blank">Mapbox map</a>.',
    'Freedom Tower': 'I like the richness of point cloud data, more than this pictured "photogrammetry", which is neither abstract nor realistic enough.',
    'Dumbo': 'I had to recreate this classic view from downtown Brooklyn.',
    'Union Square': 'We bought the last Harry Potter book in this Barnes & Nobles.',
    'Flatiron': "My first summer of college, I'd walk to work from USQ to 22nd.",
    'Empire State': 'Speaks for itself.',
    'United Nations': 'When my mom moved to New York, she worked at the UN.',
    'Roosevelt Island': 'One hot summer day in high school, I canvassed here.',
    'Central Park': '"The Lungs of New York", which built up my lungs.',
    'Riverside Park': 'Riverside pulsed with joy when I was back this summer.',
    'GW Bridge': 'A long run to the Little Red Lighthouse would make my day.',
    'Inwood': 'This is the end of our flight together through my map of points.'
};

const LOCATIONS = {
    'Statue of Liberty': {
        center: [-74.030178, 40.69085],
        zoom: 15.23,
        pitch: 85,
        bearing: 69.1
    },
    "Lady Liberty's Torch": {
        center: [-74.03727, 40.69086],
        zoom: 16.57,
        pitch: 85.00,
        bearing: 72.30
    },
    'Ellis Island': {
        center: [-74.04090, 40.69923],
        zoom: 15.96,
        pitch: 68.00,
        bearing: -58.40
    },
    'Red Hook': {
        center: [-74.01159, 40.68770],
        zoom: 16.44,
        pitch: 79.00,
        bearing: -33.60
    },
    "Governor's Island": {
        center: [-74.01465, 40.69188],
        zoom: 16.38,
        pitch: 84.00,
        bearing: 24.00
    },
    'The Battery': {
        center: [-74.00837, 40.71010],
        zoom: 15.26,
        pitch: 85.00,
        bearing: 32.00
    },
    'The Oculus': {
        center: [-74.00965, 40.71227],
        zoom: 16.48,
        pitch: 79.00,
        bearing: 79.20
    },
    'Freedom Tower': {
        center: [-73.96168, 40.71920],
        zoom: 13.77,
        pitch: 85.00,
        bearing: 80.80
    },
    'Dumbo': {
        center: [-73.99218, 40.70533],
        zoom: 16.76,
        pitch: 76.00,
        bearing: -28.20
    },
    'Union Square': {
        center: [-73.98755, 40.73530],
        zoom: 16.90,
        pitch: 40.00,
        bearing: 29.20
    },
    'Flatiron': {
        center: [-73.98532, 40.74135],
        zoom: 16.85,
        pitch: 72.00,
        bearing: 95.60
    },
    'Empire State': {
        center: [-73.98189, 40.75334],
        zoom: 15.53,
        pitch: 74.00,
        bearing: 28.40
    },
    'United Nations': {
        center: [-73.97396, 40.75295],
        zoom: 16.02,
        pitch: 85.00,
        bearing: -58.00
    },
    'Roosevelt Island': {
        center: [-73.95261, 40.76029],
        zoom: 16.39,
        pitch: 78.00,
        bearing: -81.20
    },
    'Central Park': {
        center: [-73.96573, 40.78174],
        zoom: 16.47,
        pitch: 65.00,
        bearing: -161.20
    },
    'Riverside Park': {
        center: [-73.96359, 40.81017],
        zoom: 16.55,
        pitch: 63.00,
        bearing: -130.70
    },
    'GW Bridge': {
        center: [-73.94007, 40.84540],
        zoom: 15.80,
        pitch: 85.00,
        bearing: 149.70
    },
    'Inwood': {
        center: [-73.92269, 40.87641],
        zoom: 16.78,
        pitch: 81.00,
        bearing: 174.70
    }
};

var chapters = [];
for (const [title, location] of Object.entries(LOCATIONS)) {
    id = title.replace(' ', '-');
    image = IMAGES[title];
    description = DESCRIPTIONS[title];

    chapter = {
        id: id,
        title: title,
        image: image,
        description: description,
        location: location,
        onChapterEnter: [],
        onChapterExit: []
    };
    if (title === 'Empire State') {
        chapter['rotateAnimation'] = true;
    }

    chapters.push(chapter);
}

var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWFwYm94c2F0ZWxsaXRlIiwiYSI6ImNqZWZ0MHg0djFqZWoyeG9kN3ZiMmkyd3cifQ.y2HNjGo7FcKQ7psI_BfGqQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Impression, NYC',
    byline: 'By Yoni Nachmany',
    footer: 'Thanks to Allan Walker for his inspiration, NYC/NYS for their open data, and the developers of Mapbox GL JS, deck.gl, loaders.gl, and Cesium!',
    chapters: chapters
};
const IMAGES = {
    'Chelsea Piers': 'https://www.dropbox.com/s/uqd1eahqgywn58g/Chelsea%20Piers.JPG?dl=1',
    'Hudson Yards': 'https://www.dropbox.com/s/hw5gzffspzlnhoo/Hudson%20Yards.JPG?dl=1',
    'The Landmark': 'https://www.dropbox.com/s/jwd3foawuc792jc/The%20Landmark.JPG?dl=1',
    'West Side': 'https://www.dropbox.com/s/16oflalu6jvcm95/West%20Side.HEIC?dl=1',
    'United Nations': 'https://www.dropbox.com/s/z9nkbaufb993lfw/United%20Nations.JPG?dl=1',
    'Con Edison': 'https://www.dropbox.com/s/palitwvuvsv9fn1/Con%20Edison.JPG?dl=1',
    'Williamsburg Bridge': 'https://www.dropbox.com/s/cxqcjyoh2j5rvps/Williamsburg%20Bridge.JPG?dl=1',
    'Brooklyn Bridge': 'https://www.dropbox.com/s/b6fazdipgn4uki4/Brooklyn%20Bridge.JPG?dl=1',
    'The Battery': 'https://www.dropbox.com/s/uqgh4ti4rpd7l8b/The%20Battery.HEIC?dl=1'

};

const LOCATIONS = {
    'Chelsea Piers': {
        center: [-74.005255, 40.748036],
        zoom: 15.99,
        pitch: 76,
        bearing: 94.4
    },
    'Hudson Yards': {
        center: [-73.99932, 40.752876],
        zoom: 15.96,
        pitch: 83,
        bearing: 123.2
    },
    'The Landmark': {
        center: [-73.989909, 40.770977],
        zoom: 16.73,
        pitch: 84.8,
        bearing: 82
    },
    'West Side': {
        center: [-73.984646, 40.771174],
        zoom: 15.84,
        pitch: 81,
        bearing: 128
    },
    'United Nations': {
        center: [-73.97273, 40.751184],
        zoom: 16.07,
        pitch: 77,
        bearing: -69.8
    },
    'Con Edison': { 
        center: [-73.974379, 40.730353],
        zoom: 16.63,
        pitch: 85,
        bearing: -21
    },
    'Williamsburg Bridge': {
        center: [-73.976216, 40.71492],
        zoom: 16.34,
        pitch: 82,
        bearing: -74.6
    },
    'Brooklyn Bridge': {
        center: [-73.997655, 40.705648],
        zoom: 16.9,
        pitch: 85,
        bearing: -70.6
    },
    'The Battery': {
        center: [-74.00761, 40.710665],
        zoom: 15.26,
        pitch: 84,
        bearing: 26.4
    }
};

var chapters = [];
for (const [title, location] of Object.entries(LOCATIONS)) {
    id = title.replace(' ', '-');
    image = IMAGES[title];

    chapter = {
        id: id,
        title: title,
        image: image,
        location: location,
        onChapterEnter: [],
        onChapterExit: []
    };

    chapters.push(chapter);
}

var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWFwYm94c2F0ZWxsaXRlIiwiYSI6ImNqZWZ0MHg0djFqZWoyeG9kN3ZiMmkyd3cifQ.y2HNjGo7FcKQ7psI_BfGqQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Architecture Boat Tour',
    byline: 'By Yoni Nachmany',
    footer: 'Thank you Abba! <3',
    chapters: chapters
};
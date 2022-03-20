var config = {
    accessToken: 'pk.eyJ1IjoieW9uaW5hY2htYW55IiwiYSI6ImNqYWFocjVlajBocDcyd3RleW9sZWpkN3YifQ.9dk1UZWtf_NliyYFd0DALQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Panoramic view of Manhattan, showing Brooklyn Bridge under construction',
    byline: 'Joshua H. Beal, 1876 — from <a href="http://digitalcollections.nypl.org/items/bceb5a80-d567-0131-e064-58d385a7bbd0" target="blank">The New York Public Library Digital Collections</a>',
    footer: 'Source: <a href="https://digitalcollections.nypl.org/" target="_blank">The New York Public Library Digital Collections</a>, <a href="http://spacetime.nypl.org/" target="_blank">NYC Space/Time Directory</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'right',
            hidden: false,
            description: '"Beal\'s view of New York City was shot in January 1876, after the photographer wrestled his heavy camera equipment, glass plate negatives, and tripod up the tower\'s thirty flights of stairs. He exposed five negatives to create a composite photograph..., which provided a sweeping panorama of lower Manhattan\'s landmarks, including <b>Trinity Church</b> and the <b>nine-story headquarters of the New York Tribune</b>, in addition to <b>commercial activity along the East River</b>."</p>',
            location: {
                center: [-80, -83.94],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'trinity-church',
            alignment: 'left',
            hidden: false,
            title: 'Trinity Church in 1889, from the Equitable Building',
            image: 'https://images.nypl.org/index.php?id=801093&t=w&download=1&suffix=510d47e1-10b2-a3d9-e040-e00a18064a99.001',
            location: {
                center: [-126.388, -83.367],
                zoom: 6.83,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'new-york-tribune',
            alignment: 'right',
            hidden: false,
            title: 'The New York Tribune Building in 1923',
            image: 'https://images.nypl.org/index.php?id=486940&t=w&download=1&suffix=510d47db-bf2a-a3d9-e040-e00a18064a99.001',
            location: {
                center: [-86.722, -83.376],
                zoom: 6.6,
                pitch: 0,
                bearing: 0,
                speed: 0.15,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'east-river',
            alignment: 'center',
            hidden: false,
            title: 'Commercial activity along the East River',
            image: 'https://images.nypl.org/index.php?id=731839F&t=w&download=1&suffix=510d47dd-9946-a3d9-e040-e00a18064a99.001',
            location: {
                center: [-98.874, -84.364],
                zoom: 5.49,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'new-york-tower',
            alignment: 'left',
            hidden: false,
            title: 'New York Tower of the Brooklyn Bridge',
            description: '"Dominating the scene is the massive <b>New York Tower of the Brooklyn Bridge</b>, which was completed in 1883. Commercial signage along the sides of buildings may be seen, including Harper\'s, American Rubber Maint., Abel Bros. Iron, Judd Storage, Van Dyke\'s Hotel, United States Bonded Warehouse, Ferry from Roosevelt SINY, as well as Beal\'s enhanced handwritten caption information, Clyde\'s Line from Phila." New York, An Illustrated History, 170-171 (detail).',
            location: {
                center: [-83.275, -83.693],
                zoom: 5.59,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-1',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-90.00615, -83.62991],
                zoom: 5.88,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-2',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-71.37157, -83.58547],
                zoom: 6.70,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-3',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-69.29515, -84.43020],
                zoom: 6.74,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-4',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-38.52815, -84.22493],
                zoom: 5.22,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-5',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-33.31224, -84.11528],
                zoom: 6.60,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-6',
            alignment: 'right',
            hidden: true,
            location: {
                center: [-16.24927, -84.35337],
                zoom: 5.85,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop-7',
            alignment: 'right',
            hidden: true,
            location: {
                center: [0.63188, -83.96315],
                zoom: 6.37,
                pitch: 0,
                bearing: 0,
                speed: 0.1,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


    ]
};

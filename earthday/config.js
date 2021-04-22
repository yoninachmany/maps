var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWFwYm94c2F0ZWxsaXRlIiwiYSI6ImNqZWZ0MHg0djFqZWoyeG9kN3ZiMmkyd3cifQ.y2HNjGo7FcKQ7psI_BfGqQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Happy 🌍 Day from our 🛰 team',
    subtitle: 'Our favorite places, seen from above',
    byline: 'By: Camilla Mahon',
    footer: 'Source: <a href="https://blog.mapbox.com/earth-day-mapbox-satellite-layer-5fb0c3180eb1">https://blog.mapbox.com/earth-day-mapbox-satellite-layer-5fb0c3180eb1</a>',
    chapters: [
        {
            id: 'earth',
            alignment: 'right',
            hidden: false,
            title: 'Earth',
            description: 'We do a whooole lot of Earth-gazing on the satellite team. We each have our handful of favorite spots on the satellite layer—places we have personal connections to, or places we just like to look at. Today, we want to celebrate this beautiful ball of ecosystems we call home by sharing a few of those places.',
            location: {
                center: [2, -2],
                zoom: 2,
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
            id: 'alps',
            alignment: 'left',
            hidden: false,
            title: 'The Southern Alps, New Zealand',
            image: 'https://miro.medium.com/max/2000/1*AKl1FKaCr7IkEkquqbbFvw.png',
            description: '<blockquote>Love this view of the snow pack on New Zealand’s Southern Alps and how the Main Divide separates the eastern and western water catchments. The range is bisected by glacial valleys, many filled with glacial lakes. This shot shows Lakes Tekapo, Pukaki and Ohau.—Julianne Baker Gallegos</blockquote>',
            location: {
                center: [-549.3933, -43.7423],
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'scilly',
            alignment: 'right',
            hidden: false,
            title: 'Hugh Town, Isles of Scilly, United Kingdom',
            image: 'https://miro.medium.com/max/2000/0*2C0-BfOvr46ybAmd.png',
            description: '<blockquote>The Isles of Scilly is an archipelago off the southwest corner of Cornwall, England. It is remote and is home to about 2,000 inhabitants. I like the scene because the water is clear in the harbor so that you can see the seaweed. The Scillonian [the archipelago’s famous passenger ferry] is in dock, so lots of people are starting their holidays as I did many years ago! — <a href="https://twitter.com/normanbarker">Norman Barker</a></blockquote>',
            location: {
                center: [-6.31435, 49.91701],
                zoom: 15,
                pitch: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sutter',
            alignment: 'left',
            hidden: false,
            title: 'Sutter Buttes, California',
            image: 'https://miro.medium.com/max/2000/0*MgYeMJL2mvP9a1G4.png',
            description: '<blockquote>Sutter Buttes is a round complex of extinct lava domes in the Sacramento Valley. Rising over 2000 feet, their undeveloped flanks contrast starkly with the surrounding agricultural landscape. — <a href="https://twitter.com/dnomadb">Damon Burgett</a></blockquote>',
            location: {
                center: [-121.7914, 39.2216],
                zoom: 10.66,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'desirade',
            alignment: 'right',
            hidden: false,
            title: 'La Désirade, French West Indies',
            image: 'https://miro.medium.com/max/2000/0*P36o-eYWGugx_pdz.jpeg',
            description: '<blockquote>La Désirade is a French island in the Caribbean arc. Fun fact about the island: It’s the home of the <a href="https://en.wikipedia.org/wiki/Lesser_Antillean_iguana">Lesser Antillean iguana</a>, an endangered species. — <a href="https://twitter.com/_vincents_">Vincent Sarago</a></blockquote>',
            location: {
                center: [-61.064046, 16.320794],
                zoom: 12.9,
                pitch: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'maine',
            alignment: 'left',
            hidden: false,
            title: 'See below. 😉',
            image: 'https://miro.medium.com/max/2000/0*wKHPAD0QyvjjpwYe.jpeg',
            description: '<blockquote>Maine: It’s the best state. — <a href="https://twitter.com/jqtrde">Jacques Tardie</a></blockquote>',
            location: {
                center: [-69.335, 46.256],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'carrera',
            alignment: 'right',
            hidden: false,
            title: 'General Carrera Lake, Argentina and Chile',
            image: 'https://miro.medium.com/max/2000/1*UBjeZX2e4mNb7MDZx9MHYA.png',
            description: '<blockquote>Craggy mountains border General Carrera Lake (aka Lake Buenos Aires) on the Chile-Argentina border.—<a href="https://twitter.com/perrygeo">Matt Perry</a></blockquote>',
            location: {
                center: [-72.0741, -46.5604],
                zoom: 10.98,
                pitch: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'uluru',
            alignment: 'left',
            hidden: false,
            title: 'Uluru (formerly Ayers Rock), Australia',
            image: 'https://miro.medium.com/max/2000/0*bqqIi7r2EtrWOpgB.jpeg',
            description: '<blockquote>We’re used to seeing Uluru in profile. From above we get to see new features. The fissures on top, filled with bright green vegetation, stand out against the folds of red sandstone. — <a href="https://twitter.com/rachelmholm">Rachel Holm</a></blockquote>',
            location: {
                center: [131.04293, -25.34785],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'malaspina',
            alignment: 'right',
            hidden: false,
            title: 'Malaspina Glacier, Alaska',
            image: 'https://miro.medium.com/max/2000/0*FyViej3ngbpYrMud.png',
            description: '<blockquote>Malaspina Glacier, in southeastern Alaska, is the largest <a href="https://nsidc.org/cryosphere/glaciers/gallery/piedmont.html">piedmont glacier</a> in the world. — <a href="https://twitter.com/prtkydv">Pratik Yadav</a></blockquote>',
            location: {
                center: [-140.3448, 59.8559],
                zoom: 9,
                pitch: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'shawangunk',
            alignment: 'left',
            hidden: false,
            title: 'Shawangunk Ridge, New York',
            image: 'https://miro.medium.com/max/2000/0*Amca2e19UXzq9QUx.png',
            description: '<blockquote>I love this view of the <a href="https://en.wikipedia.org/wiki/Shawangunk_Ridge#Geology">recently glaciated</a> Shawangunk Ridge in New York state, cutting diagonally to the Northeast — kind of amazing to be able to see it from above. Lake Minnewaska is the body of water to the west. I lived at the base of this cliff band in my early 20s and will never forget the views towards the Hudson Valley (to the east) from the top of the ridge. — <a href="https://twitter.com/camillacaros">Camilla Mahon</a></blockquote>',
            location: {
                center: [-74.1974, 41.7426],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tweet',
            alignment: 'right',
            hidden: false,
            title: 'We’d love to see your favorite locations, too',
            description: 'Check out the <a href="https://a.tiles.mapbox.com/v4/mapbox.satellite/page.html?access_token=pk.eyJ1IjoibXVsbG92ZXJpdCIsImEiOiIzVzZyY05JIn0.QxNcdiemvp44I0vi0ppBuw#3/31.73/9.67">satellite layer</a> and <a href="https://twitter.com/Mapbox">tweet a snapshot to @Mapbox</a> with the hashtag <a href="https://twitter.com/search?q=%23EarthDay">#EarthDay</a>.',
            location: {
                center: [9.67, 31.73],
                zoom: 1,
                pitch: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

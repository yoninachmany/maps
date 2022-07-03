const style = {
    "version": 8,
    "name": "D3",
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.country-boundaries-v1",
            "type": "vector"
        },
        "graticules": {
            "data": "./ne_110m_graticules_10.geojson",
            "type": "geojson"
        }
    },
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {"background-color": "hsl(0, 0%, 100%)"}
        },
        {
            "id": "graticules-line",
            "type": "line",
            "source": "graticules",
            "layout": {},
            "paint": {"line-color": "light gray", "line-width": 0.5}

        },
        {
            "id": "country-boundaries",
            "type": "fill",
            "source": "composite",
            "source-layer": "country_boundaries",
            "layout": {},
            "paint": {}
        },
    ],
    "id": "cl54jbvrj001t15mjwazti4ma",
}
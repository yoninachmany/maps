var style = {
  "version": 8,
  "name": "Parks Basemap v1.0.5",
  "sources": {
    "parksbase": {
      "type": "vector",
      "tiles": [
        "https://s3.amazonaws.com/maps.nycgovparks.org/parkmap/{z}/{x}/{y}"
      ],
      "attribution": "<a href='https://tree-map.nycgovparks.org/' target='_blank'>City of New York</a> | <a href='www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap<a>"
    },
    "basemap": {
      "type": "vector",
      "tiles": [
        "https://s3.amazonaws.com/maps.nycgovparks.org/basemap/{z}/{x}/{y}"
      ],
    },
    "parkslayer": {
      "type": "vector",
      "tiles": [
        "https://s3.amazonaws.com/maps.nycgovparks.org/parks/{z}/{x}/{y}"
      ],
    },
    "trees": {
      "type": "vector",
      "tiles": [
        "https://maps.nycgovparks.org/trees_prd2/{z}/{x}/{y}"
      ],
    }
  },
  "sprite": "https://s3.amazonaws.com/access-allow/web/map/icons/sprite",
  "glyphs": "https://s3.amazonaws.com/access-allow/web/map/glyphs/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {},
      "paint": { "background-color": "#e0e6e6" }
    },
    {
      "id": "ocean",
      "type": "fill",
      "source": "basemap",
      "source-layer": "water_polygon_nyc",
      "layout": {},
      "paint": { "fill-color": "hsl(195, 50%, 75%)" }
    },
    {
      "id": "landuse_park",
      "type": "fill",
      "source": "basemap",
      "source-layer": "parks_osm",
      "layout": {},
      "paint": { "fill-color": "hsl(94, 50%, 80%)", "fill-opacity": 1 }
    },
    {
      "id": "landuse_overlay_national_park",
      "type": "fill",
      "source": "basemap",
      "source-layer": "national_park_osm",
      "paint": { "fill-color": "hsl(94, 50%, 80%)", "fill-opacity": 1 }
    },
    {
      "id": "building-shadow",
      "type": "fill",
      "source": "basemap",
      "source-layer": "building_osm",
      "minzoom": 14,
      "paint": {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          "hsl(180, 11%, 89%)",
          22,
          "hsl(180, 1%, 47%)"
        ],
        "fill-translate": [3, 3],
        "fill-outline-color": "hsla(0, 0%, 0%, 0)"
      }
    },
    {
      "id": "building",
      "type": "fill",
      "source": "basemap",
      "source-layer": "building_osm",
      "paint": { "fill-color": "#d4d8d8" }
    },
    {
      "id": "parks-1wlmjg",
      "type": "fill",
      "source": "parkslayer",
      "source-layer": "parks",
      "filter": [
        "all",
        ["!=", "gispropnum", "M360"],
        ["==", "$type", "Polygon"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "hsl(101, 44%, 54%)",
        "fill-outline-color": "rgba(255, 255, 255, 0)",
        "fill-opacity": 1
      }
    },
    {
      "id": "greenstreet-bgx9ab",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "greenstreet",
      "minzoom": 14.5,
      "filter": ["==", "$type", "Polygon"],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#77bd56" }
    },
    {
      "id": "areas-beach",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "polytype", "Beach"]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#feeb8a" }
    },
    {
      "id": "Areas-golfcourse",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 12,
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "polytype", "Golf"]],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#7daf71" }
    },
    {
      "id": "landuse_woods",
      "type": "fill",
      "source": "basemap",
      "source-layer": "wood_osm",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": "hsl(101, 44%, 47%)",
        "fill-opacity": 1,
        "fill-outline-color": "hsla(0, 0%, 0%, 0)"
      }
    },
    {
      "id": "complexs1",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "complex",
      "minzoom": 13,
      "filter": ["==", "$type", "Polygon"],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": [
          "match",
          ["get", "complextyp"],
          "Botanical Garden",
          "#7daf71",
          "Zoo",
          "#7daf71",
          "Cemetery",
          "hsl(94, 50%, 80%)",
          "hsla(180, 11%, 89%, 0)"
        ],
        "fill-outline-color": [
          "match",
          ["get", "complextyp"],
          "Aquarium",
          "hsl(200, 100%, 39%)",
          "hsla(200, 100%, 39%, 0)"
        ]
      }
    },
    {
      "id": "water-dwsrl3",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "water",
      "layout": {},
      "paint": { "fill-color": "hsl(195, 50%, 75%)" }
    },
    {
      "id": "complex-pool",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "complex",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "complextyp", "", "Pool"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "#e0e6e6",
        "fill-outline-color": [
          "interpolate",
          ["exponential", 0.5],
          ["zoom"],
          15.5,
          "hsla(200, 100%, 39%, 0)",
          22,
          "#0083C5"
        ]
      }
    },
    {
      "id": "areas-playground",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [
          "all",
          ["!=", "signname", "Leif Ericson Park"],
          ["==", "polytype", "Playground"]
        ]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#e0e6e6" }
    },
    {
      "id": "areas-safetysurface",
      "type": "fill",
      "metadata": {},
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "polytype", "SafetySurface"]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(291, 13%, 68%)" }
    },
    {
      "id": "areas-dogrun",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "polytype", "DogRun"]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(33, 70%, 61%)" }
    },
    {
      "id": "athletic-fields",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["!in", "surface_ty", "Asphalt", "Synthetic"],
        ["in", "primary_sp", "", "CRK", "FTB", "RBY", "SCR"]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#adc897" }
    },
    {
      "id": "athletic-track",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": ["in", "primary_sp", "", "TRK"],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(12, 48%, 63%)" }
    },
    {
      "id": "athletic-handball",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "primary_sp", "", "HDB"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "#d2c295",
        "fill-outline-color": [
          "interpolate",
          ["exponential", 0.5],
          ["zoom"],
          15.5,
          "hsla(0, 0%, 100%, 0)",
          22,
          "#e0e6e6"
        ]
      }
    },
    {
      "id": "athletic-fields turf",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "surface_ty", "Synthetic"],
        ["in", "primary_sp", "", "CRK", "FTB", "RBY", "SCR"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "hsla(152, 28%, 69%, 0)",
        "fill-outline-color": "#e0e6e6"
      }
    },
    {
      "id": "athletic-diamonds",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [
          "all",
          ["!in", "surface_ty", "Asphalt", "Synthetic"],
          ["in", "primary_sp", "", "BSB", "SFB"]
        ]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#fcd2a5" }
    },
    {
      "id": "athletic-fields copy",
      "type": "line",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 16,
      "filter": [
        "all",
        ["!in", "surface_ty", "Asphalt", "Synthetic"],
        ["in", "primary_sp", "", "CRK", "FTB", "RBY", "SCR"]
      ],
      "layout": {},
      "paint": {
        "line-color": "#77bd56",
        "line-width": ["interpolate", ["linear"], ["zoom"], 15.5, 0, 20, 1]
      }
    },
    {
      "id": "athletic-asphalt",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [
          "all",
          ["==", "surface_ty", "Asphalt"],
          ["in", "primary_sp", "", "BSB", "FTB", "SFB", "MPPA"]
        ]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#bfbfc0", "fill-outline-color": "#e0e6e6" }
    },
    {
      "id": "athletic-diamonds turf",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["in", "primary_sp", "", "BSB", "SFB"],
        ["in", "surface_ty", "", "Synthetic"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "hsla(0, 0%, 100%, 0)",
        "fill-outline-color": "#e0e6e6"
      }
    },
    {
      "id": "areas-skatepark",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["all", ["!=", "gispropnum", "B268"], ["==", "polytype", "Skatepark"]]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(240, 1%, 75%)" }
    },
    {
      "id": "areas-turf",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 13.5,
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "polytype", "Turf"]],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#00683d" }
    },
    {
      "id": "rivers",
      "type": "fill",
      "source": "basemap",
      "source-layer": "water_osm",
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(195, 50%, 75%)" }
    },
    {
      "id": "waterway",
      "type": "line",
      "source": "basemap",
      "source-layer": "waterway_label_osm",
      "minzoom": 0,
      "maxzoom": 24,
      "filter": ["==", "$type", "LineString"],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "hsl(195, 50%, 75%)",
        "line-width": { "stops": [[12, 1], [13, 1], [14, 2], [17, 17]] }
      }
    },
    {
      "id": "cscl-trail",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["==", "stname_lab", "High Bridge Park Trl"],
          ["in", "rw_type", 5, 6, 8]
        ]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": "hsl(180, 11%, 89%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          4,
          0.2,
          20,
          35
        ],
        "line-dasharray": [0.5, 3]
      }
    },
    {
      "id": "trails-paved",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["==", "linetype", "Trail"],
          [
            "in",
            "surface",
            "Boardwalk",
            "Concrete",
            "Crushed Rock",
            "Gravel",
            "Paved"
          ]
        ]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": "hsl(180, 11%, 89%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          14,
          0.5,
          20,
          35
        ]
      }
    },
    {
      "id": "trails",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "surface", "Boardwalk", "Concrete", "Paved", "Road"],
          [
            "!in",
            "trail_name",
            "Blue Trail",
            "Blue Trail/Orange Trail",
            "Blue/Red Trail",
            "Orange Trail",
            "Orange/Blue Trail",
            "Orange/White Trail",
            "Red Trail",
            "Red/Blue Trail",
            "Red/White Trail",
            "Red/White/Blue Trail",
            "White Trail",
            "Yellow Trail"
          ],
          ["==", "linetype", "Trail"]
        ]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": "hsl(180, 11%, 89%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          14,
          0.5,
          20,
          35
        ],
        "line-dasharray": [0.5, 3]
      }
    },
    {
      "id": "Paths-Sidewalk",
      "type": "fill",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "polytype", "Sidewalk"],
        ["!=", "shape_star", 65700.0486755]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(180, 11%, 89%)" }
    },
    {
      "id": "Paths-Sidewalk Outline",
      "type": "line",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "polytype", "Sidewalk"],
        ["!=", "shape_star", 65700.0486755]
      ],
      "layout": { "line-cap": "round" },
      "paint": { "line-color": "#e0e6e6" }
    },
    {
      "id": "road-rails copy",
      "type": "line",
      "source": "basemap",
      "source-layer": "road_rails_osm",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "LineString"]],
      "layout": { "visibility": "visible" },
      "paint": { "line-color": "#e0ded8", "line-width": 3 }
    },
    {
      "id": "road-rails",
      "type": "line",
      "source": "basemap",
      "source-layer": "road_rails_osm",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "LineString"]],
      "layout": { "visibility": "visible" },
      "paint": { "line-color": "#b3b3b3" }
    },
    {
      "id": "road-rail tracks",
      "type": "line",
      "source": "basemap",
      "source-layer": "road_rails_osm",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "LineString"]],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-dasharray": [0.1, 5],
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          13,
          4,
          20,
          8
        ],
        "line-color": "#b3b3b3"
      }
    },
    {
      "id": "cscl-minor local",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!=", "segment_ty", "G"], ["in", "rw_type", 1, 2, 9]]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "#f2f2f2",
        "line-width": [
          "interpolate",
          ["exponential", 1.55],
          ["zoom"],
          4,
          0.25,
          20,
          30
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          13,
          1
        ]
      }
    },
    {
      "id": "cscl-minor citywide",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "maxzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "rw_type", 1], ["in", "segment_ty", "B", "E", "G", "U"]]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "hsl(0, 0%, 95%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.55],
          ["zoom"],
          4,
          0.25,
          20,
          30
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          13,
          1
        ]
      }
    },
    {
      "id": "Paths-Boardwalk",
      "type": "fill",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14,
      "filter": ["==", "polytype", "Boardwalk"],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "#d1c194",
        "fill-outline-color": "hsla(0, 0%, 0%, 0)"
      }
    },
    {
      "id": "paths-parking lot",
      "type": "fill",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "polytype", "Parking Lot"]
      ],
      "layout": {},
      "paint": { "fill-color": "#e0e6e6" }
    },
    {
      "id": "areas-playground fence",
      "type": "line",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [
          "all",
          ["!=", "signname", "Leif Ericson Park"],
          ["==", "polytype", "Playground"]
        ]
      ],
      "layout": {},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 0.5],
          ["zoom"],
          15.5,
          "hsla(180, 11%, 89%, 0)",
          22,
          "hsl(0, 0%, 30%)"
        ]
      }
    },
    {
      "id": "buildings-cub4k9 small",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "buildings",
      "minzoom": 15,
      "filter": [
        "all",
        ["<", "shape_star", 100000],
        ["==", "$type", "Polygon"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-translate": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["literal", [0, 0]],
          17,
          ["literal", [3, 3]]
        ],
        "fill-color": "#5c5c5c"
      }
    },
    {
      "id": "buildings-cub4k9 small copy",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "buildings",
      "minzoom": 14.5,
      "filter": [
        "all",
        ["<", "shape_star", 100000],
        ["==", "$type", "Polygon"]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#737578" }
    },
    {
      "id": "buildings-cub4k9 large",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "buildings",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [">", "shape_star", 100000]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-translate": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          ["literal", [0, 0]],
          17,
          ["literal", [5, 5]]
        ],
        "fill-color": "#5c5c5c"
      }
    },
    {
      "id": "buildings-cub4k9 large copy",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "buildings",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        [">", "shape_star", 100000]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#737578" }
    },
    {
      "id": "athletic-courts",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "athletic",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "primary_sp", "", "BKB", "BOC", "HKY", "NTB", "TNS", "VLB"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": [
          "match",
          ["get", "surface_ty"],
          "Synthetic",
          "hsla(44, 0%, 100%, 0)",
          "hsl(44, 40%, 70%)"
        ],
        "fill-outline-color": [
          "match",
          ["get", "surface_ty"],
          "Synthetic",
          "hsla(0, 0%, 100%, 0.65)",
          "hsla(0, 0%, 100%, 0)"
        ]
      }
    },
    {
      "id": "areas-iceRink",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "polytype", "IceRink"]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-color": "hsl(180, 11%, 89%)",
        "fill-outline-color": [
          "interpolate",
          ["exponential", 0.5],
          ["zoom"],
          15.5,
          "hsla(195, 50%, 75%, 0)",
          22,
          "#a0cfdf"
        ]
      }
    },
    {
      "id": "areas-pool",
      "type": "fill",
      "source": "parksbase",
      "source-layer": "areas",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["all", ["!in", "complextyp", "Pool", "''"], ["==", "polytype", "Pool"]]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "hsl(196, 76%, 57%)" }
    },
    {
      "id": "landuse_overlay_fountain",
      "type": "fill",
      "source": "basemap",
      "source-layer": "fountain_osm",
      "paint": {
        "fill-color": "#9fcfdf",
        "fill-opacity": 1,
        "fill-outline-color": "hsla(0, 0%, 0%, 0)"
      }
    },
    {
      "id": "Paths-Roadbed",
      "type": "fill",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14.5,
      "filter": [
        "all",
        ["==", "polytype", "Roadbed"],
        ["!=", "shape_star", 2514.66925049],
        ["!=", "shape_star", 14048.521575899998]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "fill-color": "#f2f2f2" }
    },
    {
      "id": "Paths-Roadbed Outline",
      "type": "line",
      "source": "basemap",
      "source-layer": "paths",
      "minzoom": 14.5,
      "filter": [
        "all",
        ["==", "polytype", "Roadbed"],
        ["!=", "shape_star", 2514.66925049],
        ["!=", "shape_star", 14048.521575899998]
      ],
      "layout": {},
      "paint": { "line-color": "#f2f2f2" }
    },
    {
      "id": "parks-border",
      "type": "line",
      "metadata": {},
      "source": "parkslayer",
      "source-layer": "parks",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        ["!=", "gispropnum", "M360"],
        ["==", "$type", "Polygon"]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "#629d36",
        "line-opacity": { "stops": [[6, 0], [18, 1]] }
      }
    },
    {
      "id": "cscl-major citywde",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "maxzoom": 14.5,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["in", "carto_disp", "10", "20", "30"],
          ["in", "segment_ty", "B", "G", "U"]
        ]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "#fafafa",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          6,
          0.5,
          20,
          30
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          13,
          1
        ]
      }
    },
    {
      "id": "cscl-major local",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!in", "rw_type", 3, 4], ["==", "segment_ty", "R"]]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "#f2f2f2",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          6,
          0.5,
          20,
          30
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1.2],
          ["zoom"],
          5,
          0,
          13,
          1
        ]
      }
    },
    {
      "id": "cscl-tunnel",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "rw_type", 4], ["in", "segment_ty", "E", "R"]]
      ],
      "layout": {},
      "paint": {
        "line-color": "#fafafa",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          6,
          0.5,
          20,
          30
        ],
        "line-dasharray": [0.28, 0.14]
      }
    },
    {
      "id": "cscl-bridge_major case",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "rw_type", 3], ["in", "segment_ty", "R", "U"]]
      ],
      "layout": { "line-cap": "round", "line-join": "round" },
      "paint": {
        "line-color": "hsl(0, 0%, 87%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.6],
          ["zoom"],
          12,
          0.5,
          20,
          10
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.55],
          ["zoom"],
          4,
          0.25,
          20,
          30
        ]
      }
    },
    {
      "id": "cscl-bridge_major",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "rw_type", 3], ["in", "segment_ty", "R", "U"]]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": "hsl(0, 0%, 98%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          6,
          0.5,
          20,
          30
        ]
      }
    },
    {
      "id": "trails copy",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "linetype", "Trail"]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": [
          "match",
          ["get", "trail_name"],
          "Blue Trail",
          "#0088ce",
          "Orange Trail",
          "#ff5800",
          "Yellow Trail",
          "hsl(59, 100%, 67%)",
          "Red Trail",
          "#d52b1e",
          "White Trail",
          "hsl(180, 0%, 100%)",
          "hsla(180, 11%, 89%, 0)"
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          14,
          0.9,
          20,
          35
        ],
        "line-dasharray": [0.5, 3]
      }
    },
    {
      "id": "trails offset",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "linetype", "Trail"]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": [
          "match",
          ["get", "trail_name"],
          "Orange/Blue Trail",
          "hsl(200, 100%, 40%)",
          "Red/Blue Trail",
          "#0088ce",
          "Blue Trail/Orange Trail",
          "#ff5800",
          "Blue/Red Trail",
          "hsl(4, 75%, 48%)",
          "Red/White/Blue Trail",
          "hsl(180, 0%, 100%)",
          "Orange/White Trail",
          "hsl(180, 0%, 100%)",
          "Red/White Trail",
          "hsl(180, 0%, 100%)",
          "hsla(180, 11%, 89%, 0)"
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          14,
          0.5,
          20,
          35
        ],
        "line-dasharray": [0.5, 3],
        "line-translate": [0, 0],
        "line-gap-width": 0,
        "line-offset": -5
      }
    },
    {
      "id": "trails copy 1",
      "type": "line",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["==", "linetype", "Trail"]
      ],
      "layout": { "line-join": "round", "line-cap": "round" },
      "paint": {
        "line-color": [
          "match",
          ["get", "trail_name"],
          "Orange/Blue Trail",
          "#ff5800",
          "Blue/Red Trail",
          "#0088ce",
          "Blue Trail/Orange Trail",
          "#0088ce",
          "Red Trail",
          "#d52b1e",
          "Orange/White Trail",
          "#ff5800",
          "Red/White Trail",
          "#d52b1e",
          "Red/Blue Trail",
          "#d52b1e",
          "Bridle Path/Orange Trail",
          "#ff5800",
          "hsla(180, 11%, 89%, 0)"
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.78],
          ["zoom"],
          14,
          0.5,
          20,
          35
        ],
        "line-dasharray": [0.5, 3],
        "line-offset": 0
      }
    },
    {
      "id": "road-rails bridge case",
      "type": "line",
      "source": "parksbase",
      "source-layer": "road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "bridge", "yes"], ["==", "railway", "rail"]]
      ],
      "layout": { "visibility": "visible" },
      "paint": {
        "line-color": "#dedede",
        "line-width": [
          "interpolate",
          ["exponential", 1.6],
          ["zoom"],
          12,
          0.5,
          20,
          10
        ]
      }
    },
    {
      "id": "road-rails bridge",
      "type": "line",
      "source": "parksbase",
      "source-layer": "road",
      "minzoom": 13,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "bridge", "yes"], ["==", "railway", "rail"]]
      ],
      "layout": { "visibility": "visible" },
      "paint": { "line-color": "hsl(0, 0%, 70%)" }
    },
    {
      "id": "street-trees",
      "type": "circle",
      "source": "trees",
      "source-layer": "street_trees",
      "paint": {
        "circle-radius": {
          "base": 1.75,
          "stops": [
            [12, 2],
            [22, 100]
          ]
        },
        "circle-color": ["get", "c"],
        "circle-opacity": 0.75
      }
    },
    {
      "id": "place_label_other",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "place_label_other_osm",
      "minzoom": 8,
      "layout": {
        "text-field": ["to-string", ["get", "name"]],
        "text-font": ["AkkuratRegular"],
        "text-max-width": 6,
        "text-size": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          6,
          12,
          12,
          12
        ]
      },
      "paint": {
        "text-halo-blur": 1,
        "text-halo-color": "#fafafa",
        "text-halo-width": 1,
        "text-color": "hsl(0, 0%, 59%)"
      }
    },
    {
      "id": "waterway-label",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "waterway_label_osm",
      "filter": ["==", "$type", "LineString"],
      "layout": {
        "visibility": "visible",
        "text-field": ["to-string", ["get", "name"]],
        "text-font": ["PTSerifItalic"],
        "symbol-placement": "line",
        "text-letter-spacing": 0.5,
        "text-size": 14,
        "symbol-spacing": 700
      },
      "paint": { "text-color": "hsl(0, 0%, 100%)" }
    },
    {
      "id": "water-label",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "water_label_osm",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "!in",
          "name",
          "Azalea Pond",
          "Cherry Hill Fountain",
          "Fountain of the Planet of the Apes",
          "Sea Lion Pool"
        ],
        ["in", "$type", "Point", "Polygon"]
      ],
      "layout": {
        "visibility": "visible",
        "symbol-spacing": 700,
        "text-font": ["PTSerifItalic"],
        "text-field": ["get", "name"],
        "text-letter-spacing": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          0.6,
          22,
          0
        ],
        "text-size": 14,
        "symbol-avoid-edges": true,
        "text-padding": 2,
        "text-ignore-placement": false,
        "text-allow-overlap": false
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "icon-translate-anchor": "map"
      }
    },
    {
      "id": "trails label",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "all",
          [
            "!in",
            "trail_name",
            "Blue Trail",
            "Blue Trail/Orange Trail",
            "Blue/Red Trail",
            "Orange Trail",
            "Orange/Blue Trail",
            "Orange/White Trail",
            "Red Trail",
            "Red/Blue Trail",
            "Red/White Trail",
            "Red/White/Blue Trail",
            "White Trail",
            "Yellow Trail"
          ],
          ["==", "linetype", "Trail"]
        ],
        ["in", "$type", "LineString", "Point", "Polygon"]
      ],
      "layout": {
        "text-field": ["to-string", ["get", "trail_name"]],
        "symbol-placement": "line",
        "text-font": ["AkkuratRegular"],
        "text-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          10,
          10,
          20,
          17
        ],
        "text-letter-spacing": 0.05
      },
      "paint": {
        "text-color": "#666",
        "text-halo-color": "#e0e6e6",
        "text-halo-width": 2
      }
    },
    {
      "id": "highline",
      "type": "line",
      "source": "parksbase",
      "source-layer": "parks",
      "minzoom": 12.5,
      "filter": [
        "all",
        ["==", "gispropnum", "M360"],
        ["in", "$type", "LineString", "Polygon"]
      ],
      "layout": { "line-join": "round" },
      "paint": { "line-width": 2.5, "line-color": "hsl(94, 49%, 56%)" }
    },
    {
      "id": "arealabelsorted-8bwdxu",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16.5,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        [
          "all",
          ["!=", "signname", "Charybdis Playground"],
          [
            "!in",
            "polytype",
            "BBQ Area",
            "Beach",
            "DogRun",
            "Golf",
            "Picnic Area",
            "Pool",
            "Turf"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "#e0e6e6",
        "text-halo-width": 2
      }
    },
    {
      "id": "arealabelsorted-8bwdxu Large",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 14,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "Golf"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)",
        "text-halo-width": 0
      }
    },
    {
      "id": "complex label",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        [
          "in",
          "polytype",
          "Aquarium",
          "Botanical Garden",
          "Cemetery",
          "Community Center",
          "Historic House",
          "IceRink",
          "Marina",
          "Performance Space",
          "Recreation Center",
          "Zoo"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "#737578",
        "text-halo-width": 2
      }
    },
    {
      "id": "complex label large",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["in", "signname", "Bronx Zoo", "New York Botanical Garden"]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "#737578",
        "text-halo-width": 0
      }
    },
    {
      "id": "Pool label",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 15.5,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "Pool"]],
      "layout": {
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Dog Run",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "DogRun"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "dog",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Bocce",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "BOC"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "hdb",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "SkatePark",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "polytype", "Skatepark"]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "skateboarding",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Handball",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "HDB"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "handball",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Tennis",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "TNS"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "tns",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Cricket",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "CRK"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "crk",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Soccer",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "SCR"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "scr",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Volleyball",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "VLB"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "vlb",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Picnic",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "polytype", "Picnic Area"]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "picnic",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "BBQ",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "polytype", "BBQ Area"]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "bbq",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Basketball",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "BKB"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "bkb",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Football",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "FTB"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "ftb",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Baseball",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "polytype", "BSB"]],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "bsb",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "Playground",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 16,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "polytype", "PlayArea"]
      ],
      "layout": {
        "visibility": "visible",
        "text-max-width": 7,
        "text-font": ["AkkuratRegular"],
        "text-size": 13,
        "icon-image": "plg",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.5
        ],
        "icon-allow-overlap": false
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "hsla(0, 0%, 0%, 0.89)"
      }
    },
    {
      "id": "buildings-comfort station",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "buildings",
      "minzoom": 16,
      "filter": [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "comforts_1", "Yes"]
      ],
      "layout": {
        "icon-image": "restroom",
        "icon-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          0,
          0.85,
          22,
          1.25
        ],
        "icon-allow-overlap": false
      },
      "paint": { "icon-opacity": 1 }
    },
    {
      "id": "cscl_minor_label",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 12.5,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!=", "stname_lab", "Unnamed St"],
          ["==", "rw_type", 1],
          ["in", "segment_ty", "B", "E", "G", "U"]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": ["AkkuratRegular"],
        "text-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          10,
          9,
          20,
          16
        ],
        "text-field": ["get", "stname_lab"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 40%)",
        "text-halo-color": "#fafafa",
        "text-halo-width": 2
      }
    },
    {
      "id": "cscl_major_label local",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "lines",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!in", "rw_type", 3, 4], ["==", "segment_ty", "R"]]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": ["AkkuratRegular"],
        "text-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          10,
          10,
          20,
          17
        ],
        "text-field": ["get", "stname_lab"]
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "#fafafa",
        "text-halo-width": 2
      }
    },
    {
      "id": "cscl_major_label citywide",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "lines",
      "maxzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["in", "carto_disp", "10", "20", "30"],
          ["in", "segment_ty", "B", "G", "U"]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": ["AkkuratRegular"],
        "text-size": [
          "interpolate",
          ["exponential", 1.4],
          ["zoom"],
          10,
          10,
          20,
          17
        ],
        "text-field": ["get", "stname_lab"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 35%)",
        "text-halo-color": "#fafafa",
        "text-halo-width": 2
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "basemap",
      "source-layer": "place_label_city_osm",
      "maxzoom": 16,
      "layout": {
        "text-field": ["to-string", ["get", "name"]],
        "text-font": ["AkkuratRegular"],
        "text-max-width": 10,
        "text-size": ["interpolate", ["exponential", 1], ["zoom"], 3, 12, 8, 16]
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "greenstreet-bgx9ab copy",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "greenstreet",
      "minzoom": 14.5,
      "filter": ["==", "$type", "Polygon"],
      "layout": {
        "text-letter-spacing": 0.05,
        "text-font": ["AkkuratBold"],
        "text-max-width": 8,
        "text-field": ["to-string", ["get", "GStreet__G"]]
      },
      "paint": {
        "text-color": "#629d36",
        "text-halo-width": 1.5,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    },
    {
      "id": "gtlabels-aj7rdd",
      "type": "symbol",
      "source": "parksbase",
      "source-layer": "area_labels",
      "minzoom": 15.5,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["==", "polytype", "GreenThumb"]
      ],
      "layout": {
        "visibility": "visible",
        "text-padding": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          0,
          20,
          22,
          3
        ],
        "text-font": ["AkkuratRegular"],
        "text-size": 14,
        "text-max-width": 8,
        "text-field": ["get", "signname"]
      },
      "paint": {
        "text-halo-width": 1.5,
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-color": "#629d36"
      }
    },
    {
      "id": "parks-label Vsmall",
      "type": "symbol",
      "source": "parkslayer",
      "source-layer": "park_label_sorted",
      "minzoom": 17.5,
      "maxzoom": 24,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        [
          "all",
          ["!in", "signname", "Garden", "Lot", "Park", "Strip"],
          ["<", "shape_star", 196380911]
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["AkkuratBold"],
        "text-letter-spacing": 0.05,
        "text-field": ["to-string", ["get", "signname"]],
        "text-max-width": 7,
        "symbol-avoid-edges": false,
        "text-allow-overlap": false,
        "text-size": 13,
        "visibility": "none"
      },
      "paint": {
        "text-color": "#629d36",
        "text-halo-width": 1.2,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    },
    {
      "id": "parks-label small",
      "type": "symbol",
      "source": "parkslayer",
      "source-layer": "park_label_sorted",
      "minzoom": 12.5,
      "maxzoom": 24,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        [
          "all",
          ["!in", "signname", "Garden", "Lot", "Park", "Strip"],
          ["<", "shape_star", 196380911]
        ]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["AkkuratBold"],
        "text-letter-spacing": 0.05,
        "text-field": ["to-string", ["get", "signname"]],
        "text-max-width": 7,
        "symbol-avoid-edges": false,
        "text-allow-overlap": false,
        "text-size": { "stops": [[15, 16], [20, 12]] }
      },
      "paint": {
        "text-color": "#629d36",
        "text-halo-width": 1.5,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    },
    {
      "id": "parks-label large",
      "type": "symbol",
      "source": "parkslayer",
      "source-layer": "park_label_sorted",
      "minzoom": 10,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["all", ["!=", "signname", "Park"], [">", "shape_star", 1963811]]
      ],
      "layout": {
        "text-field": ["to-string", ["get", "signname"]],
        "text-font": ["AkkuratBold"],
        "text-letter-spacing": 0.05,
        "text-padding": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          0,
          20,
          16,
          6
        ],
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#629d36",
        "text-halo-width": 1.5,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    }
  ],
  "id": "zmmzm91zo"
};

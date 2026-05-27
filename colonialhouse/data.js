var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 887,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10132409614932669,
          "pitch": 0.02148452773944598,
          "rotation": 0,
          "target": "1-corridor"
        },
        {
          "yaw": -1.5038307275430451,
          "pitch": 0.013412987836773027,
          "rotation": 0,
          "target": "2-garden"
        },
        {
          "yaw": 1.3075444198388322,
          "pitch": 0.052563053389951264,
          "rotation": 0,
          "target": "2-garden"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7733889026507796,
          "pitch": -0.12800312488723264,
          "title": "Parking Space",
          "text": "Secure and spacious parking area with easy access to the guest house entrance."
        },
        {
          "yaw": 1.4471407994795484,
          "pitch": 0.2381271626094943,
          "title": "Lush Shrubbery",
          "text": "Beautifully maintained tropical shrubs and greenery create a peaceful colonial garden atmosphere."
        }
      ]
    },
    {
      "id": "1-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 887,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.014499810734632135,
          "pitch": -0.007740409855133024,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.43661030571331416,
          "pitch": -0.008815737079057584,
          "rotation": 0,
          "target": "2-garden"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.083954962335217,
          "pitch": -0.0296676358915704,
          "title": "TV &amp; Entertainment Area",
          "text": "Comfortable entertainment lounge with television, seating, and a relaxing social atmosphere."
        },
        {
          "yaw": -1.3267879293126068,
          "pitch": -0.1060916575643649,
          "title": "Mosquito-Netted Beds",
          "text": "Comfortable bedrooms fitted with mosquito nets for a peaceful and restful night’s sleep"
        },
        {
          "yaw": -2.021677449751044,
          "pitch": -0.4252036027049577,
          "title": "Local Artwork",
          "text": "Locally inspired artwork and décor reflecting Zambian culture and heritage."
        }
      ]
    },
    {
      "id": "2-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6500097662700437,
          "pitch": 0.06393389661254645,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.34006164994234567,
          "pitch": 0.20727532566053775,
          "title": "Open Event Spaces",
          "text": "Wide open outdoor spaces ideal for private gatherings, weddings, evening dinners, and special events."
        },
        {
          "yaw": 1.505995769876975,
          "pitch": 0.12616545495881937,
          "title": "Garden Seating Area",
          "text": "Relax under the parasol in a calm outdoor seating space surrounded by nature."
        },
        {
          "yaw": 0.46550387810339267,
          "pitch": 0.023156700895860638,
          "title": "Scenic Garden Views",
          "text": "Beautiful garden scenery with lush greenery and tranquil colonial-style surroundings."
        },
        {
          "yaw": -0.9470322148477059,
          "pitch": 0.09725039258239576,
          "title": "Bench Areas",
          "text": "Quiet bench spots perfect for reading, conversation, or enjoying the fresh garden air."
        }
      ]
    }
  ],
  "name": "Colonial Garden House Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

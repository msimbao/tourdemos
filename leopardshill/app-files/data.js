var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view",
      "name": "Street View",
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
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.20744827120314824,
        "pitch": 0.10736550575656167,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 0.48641787632987743,
          "pitch": 0.22014889083464517,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23632205787240146,
          "pitch": -0.5756658743462566,
          "title": "Modern Street-Facing Exterior",
          "text": "Admire the home’s bold contemporary façade, clean architectural lines, and premium boundary wall design that create a striking first impression from the street."
        },
        {
          "yaw": 0.7871160528289316,
          "pitch": -0.09647566283123332,
          "title": "Secure Sliding Entrance Gate",
          "text": "The wide sliding gate offers both privacy and convenience, complementing the property’s secure and upscale exterior presentation."
        }
      ]
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
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
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.827501935541159,
          "pitch": 0.0330318387256483,
          "rotation": 0,
          "target": "0-street-view"
        },
        {
          "yaw": 2.380214729678473,
          "pitch": -0.1465664932869899,
          "rotation": 0,
          "target": "3-upstairs-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2764013459622472,
          "pitch": -0.49398266349588127,
          "title": "Open-Plan Living Area",
          "text": "Enjoy a spacious open-plan living area designed for comfort, entertaining, and effortless everyday living, with generous floor space and a bright modern feel."
        },
        {
          "yaw": 0.2935146416744878,
          "pitch": 0.02520831276317992,
          "title": "Premium Leather Seating",
          "text": "Warm-toned leather sofas and accent seating bring comfort, texture, and a refined lounge atmosphere to the heart of the home."
        },
        {
          "yaw": -0.2764418305002252,
          "pitch": -0.1193983079378711,
          "title": "Feature TV Lounge",
          "text": "The central TV lounge creates a relaxed family setting, perfectly positioned within the open-plan layout for both entertainment and conversation."
        },
        {
          "yaw": 1.9923153474353121,
          "pitch": 0.08180955100737464,
          "title": "Contemporary Dining Space",
          "text": "The dining area connects seamlessly with the lounge and kitchen, making it ideal for hosting guests or enjoying family meals in one connected space."
        },
        {
          "yaw": -2.6542050848639,
          "pitch": -0.4569561173534211,
          "title": " Natural Light &amp; Indoor Flow",
          "text": "Large openings and a thoughtfully connected layout allow natural light to move beautifully through the living, dining, and kitchen areas."
        },
        {
          "yaw": 0.8947809075710786,
          "pitch": 0.49641056939365313,
          "title": "Luxury Large-Format Floor Tiles",
          "text": "Large-format tiled flooring adds a clean, elegant finish while visually enhancing the openness and continuity of the interior spaces."
        }
      ]
    },
    {
      "id": "2-master-bedroom",
      "name": "Master Bedroom",
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
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8255714900067002,
          "pitch": 0.2715383785601766,
          "rotation": 0,
          "target": "3-upstairs-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22062249392992328,
          "pitch": 1.0993221510425553,
          "title": "Statement Accent Rug",
          "text": "The bold accent rug introduces warmth, color, and personality, helping define the sleeping area within the room’s spacious footprint."
        },
        {
          "yaw": 1.2405303188498795,
          "pitch": -0.12274665528817863,
          "title": " Private En-Suite Access",
          "text": "Direct access to the en-suite bathroom enhances convenience and reinforces the master bedroom’s private suite experienc"
        },
        {
          "yaw": 2.6009502896007906,
          "pitch": 0.027544589453492918,
          "title": "Natural Light &amp; Window Dressing",
          "text": "Large windows and full-length curtains bring in natural light while maintaining softness, privacy, and a relaxed bedroom feel."
        },
        {
          "yaw": -0.2607657293837544,
          "pitch": -0.32779966050348364,
          "title": "Spacious Master Bedroom",
          "text": "The master bedroom offers a generous layout with a calm, uncluttered design that creates a restful and luxurious private retreat."
        },
        {
          "yaw": -0.24937944641929022,
          "pitch": 0.11511843694264812,
          "title": "Elegant Headboard Feature",
          "text": "The upholstered headboard creates a sophisticated focal point, adding softness and comfort to the room’s modern interior style."
        }
      ]
    },
    {
      "id": "3-upstairs-lounge",
      "name": "Upstairs Lounge",
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
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0206873120175217,
          "pitch": 0.6056080350173367,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 3.0248546916903187,
          "pitch": 0.1766289797063081,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.16277882506779484,
          "pitch": -0.06875539477553616,
          "title": "Cozy TV Corner",
          "text": "The TV area is designed for comfort and casual downtime, with a warm, intimate setup ideal for movie nights or laid-back evening viewing."
        },
        {
          "yaw": -1.2695386791387175,
          "pitch": 0.03664078893163847,
          "title": "Glass Balustrade Stair Landing",
          "text": "The glass balustrade keeps the upper landing feeling open and modern, while visually connecting the lounge to the circulation space below."
        }
      ]
    }
  ],
  "name": "Leopards Hill Luxury Guest House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

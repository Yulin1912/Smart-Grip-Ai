# SmartGrip AI

A concept + proof-of-concept website for **SmartGrip AI**, a miniature tennis-handle motion system.

The site is written in the language of two references:

- [Garmin Wearable Science — Multi-Sensor](https://ph.garmin.com/minisite/garmin-technology/wearable-science/multi-sensor/)
- [Dyson Demo VR / Rethinking technology](https://www.dyson.com/discover/innovation/rethinking-technology/dyson-demo-vr)

The electronics object is shown as a Tracer-like assembled IMU board, in the same product-photo language as [elektroThing’s Tracer](https://www.hackster.io/elektroThing/tracer-a-wearable-for-your-things-d9fc16).

## Pages

### SmartGrip AI — tennis handle system

| Page | Intent |
| --- | --- |
| `index.html` | Cinematic product story, problem, goals, app concept |
| `technology.html` | Multi-sensor science: gyro, accel, pressure, fusion |
| `module.html` | Hardware object — chip photo, specs, capsule, exploded stack |
| `prototype.html` | Form vs function prototypes, tests, limits, next work |

### RestGuard — enclosure disturbance monitor

Warm cream / sage / gold, matching the portfolio boards. Same Garmin + Dyson page structure, lighter and pet-facing.

| Page | Intent |
| --- | --- |
| `restguard/index.html` | Opportunity, three events, states, device, staff UI |
| `restguard/technology.html` | ToF, sound level, reed switch, live score `D = 2P + 3O + 0.25A` |
| `restguard/module.html` | Tracer-like ESP32-S3 board, exploded stack, enclosure |
| `restguard/prototype.html` | Levels A–D, validation, ethics, reflection |

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## GitHub Pages

Settings → Pages → Deploy from branch `main` / root. After that the public URL is:

`https://yulin1912.github.io/Smart-Grip-Ai/`

RestGuard: `https://yulin1912.github.io/Smart-Grip-Ai/restguard/`

## Positioning

SmartGrip AI investigates the relationship between player movement, grip pressure, and racket dynamics. Metrics on the site are **estimated / experimental / conceptual**. They are training insight, not radar-certified ball speed or medical advice.

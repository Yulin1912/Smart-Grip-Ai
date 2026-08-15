# SmartGrip AI

A concept + proof-of-concept website for **SmartGrip AI**, a miniature tennis-handle motion system.

The site is written in the language of two references:

- [Garmin Wearable Science — Multi-Sensor](https://ph.garmin.com/minisite/garmin-technology/wearable-science/multi-sensor/)
- [Dyson Demo VR / Rethinking technology](https://www.dyson.com/discover/innovation/rethinking-technology/dyson-demo-vr)

The electronics object is shown as a Tracer-like assembled IMU board, in the same product-photo language as [elektroThing’s Tracer](https://www.hackster.io/elektroThing/tracer-a-wearable-for-your-things-d9fc16).

## Pages

| Page | Intent |
| --- | --- |
| `index.html` | Cinematic product story, problem, goals, app concept |
| `technology.html` | Multi-sensor science: gyro, accel, pressure, fusion |
| `module.html` | Hardware object — chip photo, specs, capsule, exploded stack |
| `prototype.html` | Form vs function prototypes, tests, limits, next work |

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## GitHub Pages

Settings → Pages → Deploy from branch `main` / root. After that the public URL is:

`https://yulin1912.github.io/Smart-Grip-Ai/`

## Positioning

SmartGrip AI investigates the relationship between player movement, grip pressure, and racket dynamics. Metrics on the site are **estimated / experimental / conceptual**. They are training insight, not radar-certified ball speed or medical advice.

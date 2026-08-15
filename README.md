# RestGuard

A concept + portfolio-prototype website for **RestGuard**, a non-contact disturbance monitor for animal-care enclosures.

The site is written in the language of two references:

- [Garmin Wearable Science — Multi-Sensor](https://ph.garmin.com/minisite/garmin-technology/wearable-science/multi-sensor/)
- [Dyson Demo VR / Rethinking technology](https://www.dyson.com/discover/innovation/rethinking-technology/dyson-demo-vr)

The electronics object is shown as a Tracer-like assembled board, in the same product-photo language as [elektroThing’s Tracer](https://www.hackster.io/elektroThing/tracer-a-wearable-for-your-things-d9fc16), on the warm cream palette from the RestGuard portfolio (`#F5F4EE`, sage, gold).

## Pages

| Page | Intent |
| --- | --- |
| `index.html` | Cinematic product story, problem, live score demo, staff app |
| `technology.html` | Multi-sensor science: ToF, MEMS mic, reed, fusion |
| `module.html` | Hardware object — chip photo, specs, enclosure, exploded stack |
| `prototype.html` | Prototype levels, tests, ethics, limits, next evidence |

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

RestGuard reports measurable environmental events and offers visitor guidance. It does **not** diagnose stress, store raw audio or images, or replace trained staff. The disturbance score is a prototype formula, not a welfare standard.

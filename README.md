# Fieldwork product catalog

A small fictional product page built with HTML, CSS and vanilla JavaScript.
Product names, copy and CSS illustrations are original synthetic demo content.
No external assets, dependencies, accounts or payment integrations are required.
The starting scaffold was prepared with AI assistance before recording.

## Run locally

From the project directory, start a static server:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 in Chrome. Stop the server with Control+C.
Use a consistent address and port so saved browser preferences use the same origin.

## Files

- `index.html`: catalog and appearance selector.
- `style.css`: layout, CSS product illustrations and both appearance palettes.
- `script.js`: selected mode, browser storage and system appearance handling.

## Appearance behavior

The available selections are Light, Dark and System. The selected mode is saved
locally in this browser. System should follow the operating system appearance;
explicit Light and Dark selections should remain independent of system changes.

This repository is the unfinished starting version. See the open GitHub issue
for the appearance synchronization work. Diagnosis, repair and acceptance
verification have not been completed.

## Acceptance results

To be completed during the repair. Record the actual result for each check:

| Check | Expected | Actual result |
| --- | --- | --- |
| Select Light | Light palette applies | Not recorded |
| Select Dark | Dark palette applies | Not recorded |
| System with light emulation | Light palette applies | Not recorded |
| System with dark emulation | Dark palette applies | Not recorded |
| Change emulation while System is selected | Palette updates immediately | Not recorded |
| Light selected; emulate dark | Explicit Light remains | Not recorded |
| Dark selected; emulate light | Explicit Dark remains | Not recorded |
| Return from manual selection to System | Current system appearance applies | Not recorded |
| Reload each selected mode | Mode is restored with correct palette | Not recorded |
| Repeated mode and system changes | Consistent response without duplicate handling | Not recorded |
| Inspect browser console | No application errors | Not recorded |

Use Chrome DevTools appearance emulation to exercise both conditions regardless
of the host computer's current setting. Document the environment and any
limitations alongside the actual results after completing the checks.


---

## ✅ 2. `manifest.json` (for PWA)

Save as `manifest.json` in your repo:

```json
{
  "name": "Spot & Score",
  "short_name": "SpotScore",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#111111",
  "theme_color": "#222222",
  "orientation": "portrait",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

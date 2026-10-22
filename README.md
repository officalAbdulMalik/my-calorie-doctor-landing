# My Calorie Doctor Landing Page

Standalone TypeScript landing page for the My Calorie Doctor app.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The page uses Vite, vanilla TypeScript, and CSS. App images are copied into `public/images` so the project can run independently from the Flutter app.

## App screenshots

The phones on the page show real screenshots from the app. Put them in
`public/screenshots/` with these exact names:

| File | Screen |
| --- | --- |
| `dashboard.png` | Dashboard (calories left, macros, What to eat next) |
| `scan.png` | Smart Scan camera pointed at a meal |
| `scan-result.png` | Scan result (calories, macros, ingredients) |
| `search.png` | Search Food with AI results |
| `plan.png` | Profile goals & targets (daily calorie and macro targets) |
| `progress.png` | Progress |

Use full-screen iPhone screenshots (portrait, e.g. 1179×2556). Until a file
exists, its phone shows a labelled placeholder instead of a broken image.

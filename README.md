# Nandi Traders Website

## Run the website while editing

From the project folder, run:

```powershell
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:3000). This development server updates the page when you save source files. A deployed website does not update just because local files change; rebuild and redeploy it with `npm run build`.

## Add or replace photos

Put each image in `public/images/`. The website uses these paths; keep the filenames or update the matching source in `src/pages/`:

| Photo | Filename |
|---|---|
| CEO and first team member | `member-1.jpg` |
| Team members 2–6 | `member-2.jpg` through `member-6.jpg` |
| Mission garden | `mission-garden.jpg` |
| Vision drying yard | `vision-drying-yard.jpg` |
| Harvest process | `process-harvest.jpg` |
| Dehusking process | `process-dehusking.jpg` |
| Boiling process | `process-boiling.jpg` |
| Drying process | `process-drying.jpg` |
| Grading process | `process-grading.jpg` |
| Packaging process | `process-packaging.jpg` |

Use the `.jpg` extension for the listed names, or change the corresponding `/images/...` path if you use another image format. Vite serves files in `public/images/` from the website path `/images/`.

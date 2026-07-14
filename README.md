# Data-table

A clean, modern **people directory** — a fast, searchable, sortable data table
powered by **jQuery + DataTables**, restyled with a minimalist green theme.

![People Directory](https://img.shields.io/badge/DataTable-2.1.8-16a34a) ![jQuery](https://img.shields.io/badge/jQuery-3.7.1-0769ad)

## ✨ Features

- 🔎 **Instant search** — global filter across every column
- ↕️ **Sortable & paginated** — responsive Bootstrap-5 styled table
- 🖼️ **Avatar column** — circular profile images with graceful fallback
- 📄 **Resume links** — one-click open of each person's PDF
- 📊 **Live stats** — total entries shown in the hero and synced on filter
- 📱 **Fully responsive** — looks great on mobile and desktop
- 🎨 **No build step** — plain HTML/CSS/JS, open and go

## 🚀 Live demo

▶️ https://data-table-gamma.vercel.app/

## 📁 Project structure

```sh
.
├── Data
│   ├── data.json          # the people dataset
│   ├── images/            # profile pictures
│   │   ├── cristiano.jpg
│   │   ├── elon.jpg
│   │   ├── jetli.jpg
│   │   ├── john.jpg
│   │   ├── lena.jpg
│   │   ├── mbappe.jpg
│   │   ├── messi.jpg
│   │   └── neymar.jpg
│   └── resumes
│       └── resume.pdf
├── index.html             # page markup
├── style.css              # green theme + DataTables overrides
├── script.js              # DataTable init + column renderers
├── LICENSE
└── README.md
```

## 🛠️ Run locally

Because the data is loaded via `fetch` (AJAX), serve the folder over HTTP —
opening `index.html` directly with `file://` will block the JSON request.

```sh
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then open <http://localhost:8000>.

## 🧩 Data format

Edit `Data/data.json` to manage the roster. Each entry:

```json
{
  "name": "Mbappe",
  "forename": "Kylian",
  "birthday": "2022-03-09",
  "position": "Soccer Player",
  "email": "mbappe@psg",
  "adress": "clairefontaine 32",
  "zip code": "H8R 2Z2",
  "comments": "Best player of french team.",
  "profile": "Data/images/mbappe.jpg",
  "CV": "Data/resumes/resume.pdf"
}
```

> The `profile` and `CV` fields are plain paths — the table renders the
> avatar and the resume link automatically.

## 🧱 Tech stack

- **HTML5** + **CSS3** (custom green theme)
- **jQuery 3.7**
- **DataTables 2.1** (Bootstrap 5 styling)
- Font: **Inter** (Google Fonts)
- Deployed on **Vercel**

## 👤 Author

Saliou — [@seasayDev](https://github.com/seasayDev)

## 📄 License

MIT — see [LICENSE](LICENSE).

# INNO-SCREW — GitHub Pages Website

A bilingual (🇩🇪 German / 🇬🇧 English) academic research project website ready to publish on GitHub Pages.

## ✨ Features

- **Bilingual** — DE/EN toggle stored in `localStorage`
- **Dark / Light mode** — toggle with 🌙 button
- **Responsive** — mobile-friendly with hamburger menu
- **5 pages**: Home, About/Team, Interactive Demo, Publications, Contact/Impressum
- **Interactive Demo** — Canvas-based screw-process simulator with ML anomaly detection visualization
- **Publications** — filterable list with expandable BibTeX entries
- **No dependencies** — pure HTML, CSS, JavaScript (no frameworks)

## 📁 File Structure

```
/
├── index.html          ← Homepage
├── about.html          ← Team & Institute
├── demo.html           ← Interactive screw-process demo
├── publications.html   ← Publication list with filters & BibTeX
├── contact.html        ← Contact form & Impressum
├── css/
│   └── style.css       ← All styles (dark mode, responsive)
├── js/
│   └── main.js         ← Language toggle, theme, navigation
└── README.md           ← This file
```

## 🚀 Publishing to GitHub Pages

### Option A — Direct Upload (Easiest)

1. Create a new GitHub repository (e.g. `my-research-project`)
2. Upload all files (maintain folder structure)
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch → main → / (root)**
5. Click **Save** → your site will be live at  
   `https://YOUR-USERNAME.github.io/my-research-project/`

### Option B — Git Command Line

```bash
# Clone your empty repo
git clone https://github.com/YOUR-USERNAME/my-research-project.git
cd my-research-project

# Copy all files from this package into the folder
cp -r path/to/github-pages-site/* .

# Commit & push
git add .
git commit -m "Initial site"
git push origin main

# Enable Pages in GitHub Settings → Pages
```

### Option C — Organization Repository

For URLs like `https://your-org.github.io/project-name/`:
- Same steps, but create the repo under your **Organization**

> 💡 If your repo is not at the root (e.g. `/project-name/` not `/`), links between pages already use **relative paths** and will work correctly.

## ✏️ Customization Checklist

| What to change | Where |
|---|---|
| Project name & logo initials | `nav-brand` div in all HTML files |
| Hero headline & description | `index.html` hero section + `js/main.js` translations object |
| Team members | `about.html` team-grid section |
| Publications | `publications.html` pub-list section |
| Contact details (address, email) | `contact.html` |
| Colors (accent, nav, etc.) | `css/style.css` `:root` variables |
| German translations | `js/main.js` `translations.de` object |
| English translations | `js/main.js` `translations.en` object |
| Funding notice text | `index.html` funding section |

## 🌍 Adding More Languages

Edit `js/main.js` and add a third language block (e.g. `fr: { ... }`), then update the toggle button logic.

## 📝 License

Free to use and adapt for academic research purposes.  
Please credit RIF Institut für Forschung und Transfer e.V. if building on the INNO-SCREW project content.

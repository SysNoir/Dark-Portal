# Dark-Portal

☽ A retro-modern gateway into goth culture.  
Part sorting quiz, part curated directory, part zine.  
Created by **SysNoir**.

---

## ✦ What is this?

Dark-Portal is a static site (hosted on GitHub Pages) that blends the energy of early web webrings with modern safety and accessibility. It’s meant to be fun, informative, and non-gatekeepy:

- 🕯️ **Sorting Quiz** — answer 30 playful questions, get your archetype and a printable “goth card.”  
- 🔎 **Search Directory** — explore bands, venues, and cultural references from the 1970s to today.  
- 📖 **Launch Guide** — a starting point for new visitors.  
- 🔗 **Webring** — link out to other projects, zines, or community sites.

---

## ✦ Live site

👉 [https://sysnoir.github.io/Dark-Portal/](https://sysnoir.github.io/Dark-Portal/)

---

## ✦ Repository structure

---

## ✦ How the search works

- **`/data/entities.json`** — master index of ~242 artists/events, built from CSV.  
- **`/data/concepts.json`** — maps aliases & misspellings (e.g., `siouxie` → *Siouxsie and the Banshees*).  
- **`/js/search.js`** — loads both files, normalizes input, matches against `blob` fields (name, styles, era, region, desc).

### To update search
1. Edit `entities.json` or regenerate from CSV.  
2. Add aliases/misspellings to `concepts.json`.  
3. Commit changes. No build step needed.

---

## ✦ Development

This site is pure static HTML/CSS/JS.

- Test locally by opening `index.html` in a browser.  
- Or run a simple server (e.g., `python -m http.server 8000`).  
- Deploys automatically via GitHub Pages on the `main` branch.

---

## ✦ Contributing

Pull requests welcome for:
- Additional search entries (`/data/entities.json`).  
- More concept aliases (`/data/concepts.json`).  
- Quiz question ideas.  
- Style/CSS tweaks (retro is the vibe).  

Please keep the tone inclusive: no gatekeeping, no punching down.  
Neurodiverse and LGBTQIA+ communities are integral here.

---

## ✦ License

[CC0](https://creativecommons.org/publicdomain/zero/1.0/) / MIT — use, remix, share.  
Attribution to **SysNoir** appreciated.


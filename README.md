# WinBGM marketing website

A single-page, dependency-free marketing website for [WinBGM](https://github.com/hariharen9/WinBGM),
a portable Windows background and startup manager.

## Run locally

No build step - open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# or: npx serve .
```

Then open http://localhost:8000.

## Structure

- `index.html` - all page content, ordered as: hero, problem statement,
  capabilities (`#features`), startup surfaces (`#surfaces`), safety model
  (`#safety`), workflow (`#workflow`), extra capabilities, platform, download
  (`#download`), FAQ, final call to action
- `styles.css` - dark design system, one file, no preprocessor
- `script.js` - scroll progress, mobile menu, reveal animations, FAQ
  accordions, and the mock product window's pointer depth effect
- `assets/` - app icon and brand mark

## Routing

The whole site lives on one page and navigates with HTML anchor links
(`#features`, `#safety`, `#workflow`, `#download`). Download and source links
point to the project's GitHub repository and Releases page.

## Product accuracy

The content is based on the WinBGM README and source structure. The product
window is a static marketing representation of the application, not a live
connection to a Windows machine. Sample values are illustrative.

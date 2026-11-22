# Patrick Dass — Portfolio

Static website (plain HTML/CSS/JS, no build step), converted from the Google Sites version.

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `about-me.html` | About Me |
| `resume-awards.html` | Resume + Awards |
| `class-projects.html` | Class Projects |
| `machine-shop-projects.html` | Machine Shop Projects |
| `fluid-transport-lab-projects.html` | Fluid Transport Lab Projects |
| `styles.css` | All styling (colors and fonts are set at the top in `:root`) |
| `script.js` | Image carousels and the mobile menu |
| `images/` | All photos, stored locally |

## Publish on GitHub Pages

1. Sign in at github.com and create a **new repository**.
   - Name it `<your-username>.github.io` to get the address `https://<your-username>.github.io/`, or
   - give it any other name (e.g. `portfolio`) to get `https://<your-username>.github.io/portfolio/`.
   - Make it **Public**.
2. In the new repo, click **uploading an existing file**. Drag in everything in this folder
   (all the `.html` files, `styles.css`, `script.js`, `README.md`, and the whole `images` folder),
   then click **Commit changes**. The web uploader takes up to 100 files at a time; this site is under that.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**,
   Branch to **main** and folder **/ (root)**, then **Save**.
4. After a minute or two the page shows *"Your site is live at …"*. That's the URL to share.

### Using your own domain (optional)

1. Buy a domain from any registrar (Namecheap, Cloudflare, Squarespace Domains, etc.).
2. In the repo: **Settings → Pages → Custom domain**, enter e.g. `www.patrickdass.com`, and save.
3. At your registrar, add a DNS record: `CNAME` for `www` pointing to `<your-username>.github.io`.
   For the bare domain (`patrickdass.com`), add `A` records pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Once DNS is verified, tick **Enforce HTTPS**.

## Editing later

- Change text directly in the `.html` files. Each project is a `<section>` block.
- To add a photo, put it in `images/` and copy an existing `<figure>…</figure>` or carousel `<figure class="slide">…</figure>`.
- Upload the changed files to the repo again; GitHub Pages republishes automatically.

The resume on the Resume page is embedded from Google Docs, so that document must stay shared as
"Anyone with the link can view".

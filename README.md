# Dr. Sharath Adiga M: website guide

This folder is a complete website. It's plain HTML and CSS with no database and no monthly cost, so it can be hosted free on GitHub Pages or Netlify.

```
website/
├── index.html          Home page
├── about.html          About, qualifications, experience, publications
├── conditions.html     Conditions treated (expandable list)
├── procedures.html     Tests and procedures
├── contact.html        OPD timings, phone numbers, map
├── images/             ← all photos live here
│   ├── doctor-portrait.jpg     (placeholder)
│   ├── doctor-consulting.jpg   (placeholder)
│   └── hospital.jpg            (placeholder)
└── assets/
    ├── style.css       colours, fonts, layout
    ├── site.js         mobile menu + "OPD today" box (OPD hours are set here too)
    └── favicon.svg     small icon shown in the browser tab
```

To preview it on your computer, unzip the folder and double-click `index.html`.

---

## 1. Replace the placeholder pictures

Each placeholder image says which file it is and what size it should be.

| File | Where it appears | Best size | Shape |
|---|---|---|---|
| `images/doctor-portrait.jpg` | Home page (top) and About page | 800 × 1000 px | Portrait (taller than wide) |
| `images/doctor-consulting.jpg` | Home page, next to "Tests and procedures" | 1200 × 900 px | Landscape |
| `images/hospital.jpg` | Appointments page, above the map | 1200 × 800 px | Landscape |

### The easy way (recommended)

1. Get your photo ready and **rename it to exactly the same name** as the placeholder, for example `doctor-portrait.jpg`.
   - The name must match exactly: lower-case, with hyphens and `.jpg`.
   - If your photo is a `.png` or `.jpeg`, see "Using a different file name" below.
2. Copy it into the `images` folder and choose **Replace** when asked.
3. Refresh the page in your browser. The new photo appears everywhere that placeholder was used.

### Make photos load fast

Phone photos are often 3–5 MB, which makes the site slow on mobile data. Before replacing:

1. Go to **https://squoosh.app** (free and runs in your browser).
2. Drop in your photo, set **Resize** to the "Best size" in the table above, and choose **MozJPEG** with quality around 75.
3. Download it. Aim for **under 300 KB** per photo.

Photos don't need to be exactly the right size. The site crops them neatly to fit, so keep the doctor's face near the centre of the photo.

### Using a different file name

If you'd rather keep your own file name (say `sharath.png`), open the HTML file in a text editor (Notepad, TextEdit, or VS Code) and search for the old name. Every image has a comment above it:

```html
<!-- PHOTO: replace images/doctor-portrait.jpg ... -->
<img src="images/doctor-portrait.jpg" alt="Dr. Sharath Adiga M" ...>
```

Change `images/doctor-portrait.jpg` to `images/sharath.png` in the `src="..."` part. The portrait appears on **both** `index.html` and `about.html`, so change it in both.

### Adding more photos later

Copy an existing `<img ...>` line, point `src` at your new file, and update the `alt="..."` text. The `alt` text is what screen readers and Google read, so describe what's in the photo.

---

## 2. Edit text, phone numbers or timings

- **Words on a page:** open the `.html` file in a text editor, find the sentence, change it, and save. Only change the text **between** tags like `<p>` and `</p>`. Leave the tags themselves alone.
- **Phone numbers:** each number appears in several places, including inside `tel:` links. Use your editor's **Find and Replace** across all five `.html` files.
- **OPD timings:** these are in two places:
  1. the table rows in `index.html` and `contact.html` (search for `9 am – 5 pm`)
  2. the `OPD` list at the top of `assets/site.js`, which drives the "OPD today" box
- **Colours:** change the values at the top of `assets/style.css` under `:root`.

---

## 3. Put the website online for free (GitHub Pages)

You only do this once. After that, updating the site is just uploading changed files.

1. Create a free account at **https://github.com**.
2. Click **+** (top right), then **New repository**.
   - Name: for example `dr-sharath-adiga`
   - Choose **Public**.
   - Click **Create repository**.
3. On the next screen, click the link **"uploading an existing file"**.
4. Open the unzipped `website` folder on your computer, select **everything inside it** (the 5 HTML files, `README.md`, and the `images` and `assets` folders), and drag it onto the GitHub page.
   - Drag the *contents*, not the `website` folder itself. `index.html` must sit at the top level.
5. Scroll down and click **Commit changes**.
6. Go to **Settings**, then **Pages** (left sidebar).
   - Under **Build and deployment**, set Source to **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)**. Click **Save**.
7. Wait 1–2 minutes and refresh. GitHub shows your link, which looks like this:
   **`https://YOUR-USERNAME.github.io/dr-sharath-adiga/`**

> Tip: If you name the repository exactly `YOUR-USERNAME.github.io`, the address becomes the shorter `https://YOUR-USERNAME.github.io`.

### Replacing a photo on the live site

1. In your GitHub repository, open the `images` folder.
2. Click **Add file**, then **Upload files**.
3. Drag in your photo, **named exactly like the placeholder** (for example `doctor-portrait.jpg`). GitHub replaces the old file.
4. Click **Commit changes**. The live site updates within a minute or two. If you don't see the change, press Ctrl+Shift+R (or Cmd+Shift+R on a Mac) to force a refresh.

To edit text on the live site, open any `.html` file on GitHub, click the **pencil icon**, make the change, and click **Commit changes**.

### Alternative: Netlify (even quicker, no GitHub needed)

Go to **https://app.netlify.com/drop** and drag the whole `website` folder onto the page. You'll get a free link like `something.netlify.app` straight away. Sign up for a free account so the site doesn't expire, and rename it under **Site configuration**. To update the site, drag the folder in again.

---

## 4. Later: use your own domain (e.g. drsharathadiga.com)

Nothing on the site needs to change. You just point the domain at it.

1. Buy a domain from a registrar such as GoDaddy, Hostinger, Namecheap, or Cloudflare. A `.com` or `.in` costs roughly ₹800–1,200 a year.
2. **On GitHub:** go to **Settings**, then **Pages**, then **Custom domain**. Enter `www.yourdomain.com` and click **Save**.
3. **At your domain registrar,** open the DNS settings and add these records:

   | Type | Name / Host | Value |
   |---|---|---|
   | CNAME | `www` | `YOUR-USERNAME.github.io` |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |

4. Wait from a few minutes up to 24 hours. Then go back to GitHub Pages and tick **Enforce HTTPS** for the secure padlock (it's free).

If you used Netlify instead, go to **Domain management**, then **Add a domain**, and follow the records Netlify shows you.

---

## 5. Recommended extras (free)

- **Google Business Profile** (https://business.google.com): list "Dr. Sharath Adiga M, Neurologist" at Hitech Medicare Hospital, Udupi, and add the website link. This is how most patients find a doctor on Google Maps.
- **Google Search Console** (https://search.google.com/search-console): add the site so Google indexes it sooner.
- Keep the content factual. Indian medical council guidelines restrict how doctors may advertise, so avoid patient testimonials, "best neurologist" claims, and promised outcomes.

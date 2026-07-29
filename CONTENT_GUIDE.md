# How to add your own images & edit content

You don't need to know how to code to make most changes — just edit text
between quotes, or drop image files into the `public` folder.

## 1. Add your profile photo (hero section)

1. Pick a square-ish photo of yourself, rename it `profile.jpg`.
2. Put it inside the `public` folder (same level as `package.json`).
3. Open `app/page.js`, find this block (search for "hero-avatar"):

   ```jsx
   <div className="hero-avatar">
     <span className="hero-avatar-initials">SS</span>
   </div>
   ```

4. Replace it with:

   ```jsx
   <div className="hero-avatar">
     <img src="/profile.jpg" alt="Sakshi Saini" />
   </div>
   ```

That's it — Next.js automatically serves anything in `public/` from the
site root, so `public/profile.jpg` becomes `/profile.jpg`.

## 2. Add more images anywhere else

Same rule everywhere: drop the file in `public/`, then reference it as
`/filename.jpg` (or `.png`, `.svg`, etc.) in an `<img src="..." />` tag.

## 3. Edit text content

Almost all the site's text lives in a few arrays near the top of
`app/page.js` — you can edit these directly without touching any layout code:

| What you want to change      | Look for this variable in `app/page.js` |
|-------------------------------|------------------------------------------|
| Stats (3+ Years, etc.)        | `STATS`                                   |
| Services list                 | `SERVICES`                                |
| Tech stack chips              | `TECH`                                    |
| Work experience                | `EXPERIENCE`                              |
| Testimonials                  | `TESTIMONIALS`                            |
| FAQ questions                 | `FAQS`                                    |
| Hero headline / intro text    | inside the `<section className="hero">`   |
| Contact email / phone         | inside the `<footer>` at the bottom       |

## 4. Edit or add projects (Live Builds section)

Projects live in `app/components/Projects.jsx`, in the `BUILDS` array near
the top. Each project needs:

```js
{
  name: 'Project Name',
  url: 'yourdomain.com',      // no https://, just the domain
  tag: 'WordPress Website',   // short label shown under the title
  category: 'WordPress',      // must be 'WordPress', 'WooCommerce', or 'Shopify'
                               // to show up under the matching tab
},
```

The homepage screenshot preview is generated automatically from the `url`
— no image needed for that part.

## 5. After any change

1. Save the file.
2. In GitHub Desktop: type a short commit message, **Commit to main**, then
   **Push origin**.
3. Vercel redeploys automatically — check your live link in about a minute.

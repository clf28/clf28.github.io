# Lifeng Chen's personal homepage

Live site: [https://clf28.github.io/](https://clf28.github.io/)

A small static academic homepage with a light default theme, an optional dark theme, and responsive layouts. It uses plain HTML, CSS, and JavaScript, with no build dependencies, analytics, or third-party font requests.

## Update content

- Edit `index.html` for About me, publications, and the research-experience timeline. Education is summarized in About me.
- Edit `style.css` for layout and colors. After a style change, update the stylesheet `v` parameter in `index.html` and `credits.html` so browsers load the current version.
- Replace `assets/profile-anime.webp` to change the selected profile illustration, and update its source record in `credits.html`.
- The lucky-cat favicon is provided in `assets/favicon-cat.ico` (16, 32, and 48px), `assets/favicon-cat-32.png` (32px), and `assets/favicon-cat-180.png` (180px Apple touch icon). Keep the icon references in both HTML files consistent when changing it.
- Add publication figures or videos to `assets/`, retaining source attribution in `credits.html`. Each paper uses a 16:9 media frame. Replace its `<img>` with a `<video controls playsinline preload="metadata" poster="assets/example.webp"><source src="assets/example.mp4" type="video/mp4"></video>` when a video is ready. A video with controls should sit inside a `<div class="paper-figure">` rather than a project-page link, so controls do not trigger navigation.
- Publication entries contain the title, authors, a venue when supplied, and resource links or status. Publication venues and personal dates follow the author's supplied record.
- Genesis lists all sixteen authors, with equal-contribution marks on the first four, and shows "Code and Tech Report coming soon." The equal-contribution note applies to the full publication list. MedVIGIL uses a text thumbnail; its venue and resources are omitted until provided.

The homepage uses public professional contact information and concise publication records. The original resume PDF is not included in the repository.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/).

## Publish

GitHub Pages publishes the repository root from the `main` branch. Commit and push changes to `main` to update the live site. `.nojekyll` keeps the site a plain static site.

## Image sources

The homepage layout and code are original. The simple academic presentation was visually inspired by [Haofan Wang's homepage](https://haofanwang.github.io/); no source code or personal imagery was copied from that site.

| Asset | Original source | Attribution and license |
| --- | --- | --- |
| `assets/detail.webp` | [Detail++ teaser](https://detail-plus-plus.github.io/static/images/teaser.png) | Lifeng Chen et al.; the [project page](https://detail-plus-plus.github.io/) states CC BY-SA 4.0. Thumbnail retains that license. |
| `assets/echo.webp` | [ECHO training pipeline](https://echo-midea-airc.github.io/images/figure2.png) | Lifeng Chen et al.; the [project page](https://echo-midea-airc.github.io/) states CC BY-SA 4.0. Thumbnail retains that license. |
| `assets/medim.webp` | [MeDiM framework](https://jwmao1.github.io/MeDiM_web/images/images/framework.jpg) | Jiawei Mao et al., including Lifeng Chen; no separate image license is stated on the [project page](https://jwmao1.github.io/MeDiM_web/). Rights remain with the original authors. |
| `assets/profile-anime.webp` | User-provided anime screenshot | Selected central character reframed and resized to a 512 × 512 artistic profile illustration. Rights remain with the original creators. |
| `assets/favicon-cat.ico`, `assets/favicon-cat-32.png`, `assets/favicon-cat-180.png` | User-provided anime screenshot | Large lucky cat reframed and resized for browser and Apple touch icons. Rights remain with the original creators. |
| `assets/experience-firered.png` | User-provided FireRed logo representing Xiaohongshu | Copied without image changes. Brand and trademark rights remain with the respective organization. |
| `assets/experience-midea.png` | User-provided Midea logo | Copied without image changes. Brand and trademark rights remain with Midea. |
| `assets/experience-westlake.png` | User-provided Westlake University logo | Copied without image changes. Brand and trademark rights remain with Westlake University. |
| `assets/google-scholar.svg`, `assets/github.svg` | [Simple Icons](https://github.com/simple-icons/simple-icons/tree/98820a4dc8c363ca72fa2c0d294ea4a0a9bba75d/icons) | CC0 1.0; Google Scholar color adjusted, GitHub white backing added. |
| `assets/linkedin.svg` | [Font Awesome Free / Fonticons, Inc.](https://github.com/FortAwesome/Font-Awesome/blob/14c65a3747d0f3b751f15831fc719236aea8729d/svgs/brands/linkedin.svg) | CC BY 4.0; color and SVG viewport adjusted. |

Publication thumbnails were resized without cropping and converted to WebP. Full credits are also available on the [image credits page](https://clf28.github.io/credits.html).

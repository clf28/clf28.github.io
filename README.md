# Lifeng Chen's personal homepage

Live site: [https://clf28.github.io/](https://clf28.github.io/)

A small static academic homepage with a light default theme, an optional dark theme, and responsive layouts. It uses plain HTML, CSS, and JavaScript, with no build dependencies, analytics, or third-party font requests.

## Update content

- Edit `index.html` for About me, publications, and the research-experience timeline. Education is summarized in About me.
- The About me introduction describes Lifeng as a first-year Ph.D. student. The document icon after LinkedIn links to `assets/Lifeng_Chen_CV.pdf`, copied from the author-supplied resume PDF.
- Edit `style.css` for layout and colors. After a style change, update the stylesheet `v` parameter in `index.html` and `credits.html` so browsers load the current version.
- Replace `assets/profile-anime.webp` to change the selected profile illustration, and update its source record in `credits.html`.
- The lucky-cat favicon is provided in `assets/favicon-cat.ico` (16, 32, and 48px), `assets/favicon-cat-32.png` (32px), and `assets/favicon-cat-180.png` (180px Apple touch icon). Keep the icon references in both HTML files consistent when changing it.
- Add publication figures or videos to `assets/`, retaining source attribution in `credits.html`. Every thumbnail uses a 16:9 frame and `object-fit: contain` to preserve the complete source. `media.js` manages the silent looping video previews, pause controls, and click-to-enlarge dialogs with native video controls. Previews load/play as they enter the viewport, pause offscreen and in background tabs, and honor reduced-motion preferences. Mobile thumbnails use the available column width.
- Publication entries contain the title, authors, a venue when supplied, and resource links or status. Publication venues and personal dates follow the author's supplied record.
- Publication order: Detail++, ECHO, Genesis, MeDiM, MedVIGIL. Genesis lists all sixteen authors, with equal-contribution marks on the first four. Below its venue, the resource row reads "Code and Tech Report is coming soon". MedVIGIL lists NeurIPS 2026 (Evaluations & Datasets Track) and shows "Code and Paper is coming soon" below the venue. These status rows use the resource-link color without hyperlinks. The equal-contribution note applies to the full publication list.

The homepage uses professional contact information and concise publication records. The author-supplied two-page CV is available through the profile's CV link.

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
| `assets/detail-demo.mp4`, `assets/detail-poster.jpg` | Author-supplied `intro.pdf`, corresponding to Figure 2 in the [Detail++ paper](https://arxiv.org/abs/2507.17853) | Lifeng Chen et al. Prompt cards and original figure panels move, shrink, and fan out to illustrate prompt decomposition, parallel branches with shared layout, and progressive detail injection. The animation explains the method rather than playing a sequence of close-up comparisons. It is an edited explanation using published examples, not an inference recording. Original project artwork is distributed under CC BY-SA 4.0. |
| `assets/echo-demo.mp4`, `assets/echo-poster.jpg` | [Original ECHO demo video](https://echo-midea-airc.github.io/images/demo_cropped.mp4) | Lifeng Chen et al.; MP4 is copied byte-for-byte, 1006×614, 11.64s, 25fps. Poster extracted at 11s. Original project media is distributed under CC BY-SA 4.0. |
| `assets/genesis-demo.mp4`, `assets/genesis-poster.jpg` | Author-supplied GENESIS manuscript, appendix Figure 6 and its accompanying chain of thought | Fan Yang, Lifeng Chen, et al. The base scene is an AI-cleaned adaptation of Figure 6, checked for its six objects and query-relevant attributes. White object contours, white text labels, and colored leaders follow the figure's annotation style. The paper's chain of thought is presented as a simulated autoregressive token stream, with matching colors connecting object phrases to their visual primitives and a final answer of four. It is an illustrated trace, not a live model execution. Rights remain with the original authors. |
| `assets/medvigil-motivation.webp` | Author-supplied MedVIGIL motivation figure | Hanqi Jiang et al., including Lifeng Chen. Lossless 3924×1448 WebP preserves every RGBA pixel and all three figure columns. Rights remain with the original authors. |
| `assets/medim.webp` | [MeDiM framework](https://jwmao1.github.io/MeDiM_web/images/images/framework.jpg) | Jiawei Mao et al., including Lifeng Chen; no separate image license is stated on the [project page](https://jwmao1.github.io/MeDiM_web/). Rights remain with the original authors. |
| `assets/profile-anime.webp` | User-provided anime screenshot | Selected central character reframed and resized to a 512 × 512 artistic profile illustration. Rights remain with the original creators. |
| `assets/favicon-cat.ico`, `assets/favicon-cat-32.png`, `assets/favicon-cat-180.png` | User-provided anime screenshot | Large lucky cat reframed and resized for browser and Apple touch icons. Rights remain with the original creators. |
| `assets/experience-firered.png` | User-provided FireRed logo representing Xiaohongshu | Copied without image changes. Brand and trademark rights remain with the respective organization. |
| `assets/experience-midea.png` | User-provided Midea logo | Copied without image changes. Brand and trademark rights remain with Midea. |
| `assets/experience-westlake.png` | User-provided Westlake University logo | Copied without image changes. Brand and trademark rights remain with Westlake University. |
| `assets/google-scholar.svg`, `assets/github.svg` | [Simple Icons](https://github.com/simple-icons/simple-icons/tree/98820a4dc8c363ca72fa2c0d294ea4a0a9bba75d/icons) | CC0 1.0; Google Scholar color adjusted, GitHub white backing added. |
| `assets/linkedin.svg` | [Font Awesome Free / Fonticons, Inc.](https://github.com/FortAwesome/Font-Awesome/blob/14c65a3747d0f3b751f15831fc719236aea8729d/svgs/brands/linkedin.svg) | CC BY 4.0; color and SVG viewport adjusted. |

All videos are silent H.264/yuv420p with faststart for browser playback. Original manuscripts are not published in this repository. The profile's CV PDF is published at the author's request. Full credits are also available on the [image credits page](https://clf28.github.io/credits.html).

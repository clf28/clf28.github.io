# Lifeng Chen's personal homepage

Live site: [https://clf28.github.io/](https://clf28.github.io/)

A small static academic homepage with a light default theme, an optional dark theme, and responsive layouts. It uses plain HTML, CSS, and JavaScript, with no build dependencies, analytics, or third-party font requests.

## Update content

- Edit `index.html` for the biography, publications, research experience, and education.
- Edit `style.css` for layout and colors.
- Replace `assets/profile.jpg` to change the profile image.
- Add publication figures to `assets/`, retaining source attribution in `credits.html`.
- Publication venues and personal dates follow the author's supplied CV. Genesis has no public resource link in this first version.

The first version uses public professional contact information and concise research summaries. The original resume PDF is not included in the repository.

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
| `assets/profile.jpg` | [Current public GitHub avatar](https://avatars.githubusercontent.com/u/142436322?v=4) | Existing avatar of the `clf28` account. |

Publication thumbnails were resized without cropping and converted to WebP. Full credits are also available on the [image credits page](https://clf28.github.io/credits.html).

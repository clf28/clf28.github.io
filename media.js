(() => {
  const dialog = document.querySelector('#media-dialog');
  if (!dialog) return;
  const content = dialog.querySelector('.media-dialog-content');
  const title = dialog.querySelector('#media-dialog-title');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const figures = [...document.querySelectorAll('.paper-media')];
  const previews = figures.filter(figure => figure.querySelector('video')).map(figure => ({
    figure,
    video: figure.querySelector('video'),
    toggle: figure.querySelector('.media-toggle'),
    visible: false,
    manuallyPaused: false,
    manuallyPlaying: false,
  }));
  let opener;
  let resumeModal = false;

  function updateLabel(preview) {
    const playing = !preview.video.paused;
    preview.toggle.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${preview.figure.dataset.title} preview`);
    preview.toggle.firstElementChild.textContent = playing ? 'Ⅱ' : '▶';
  }

  function syncPlayback(preview) {
    const mayPlay = preview.visible && !document.hidden && !dialog.open && !preview.manuallyPaused
      && (!reducedMotion.matches || preview.manuallyPlaying);
    if (mayPlay) preview.video.play().catch(() => updateLabel(preview));
    else preview.video.pause();
    updateLabel(preview);
  }

  previews.forEach(preview => {
    preview.video.muted = true;
    preview.toggle.hidden = false;
    preview.video.addEventListener('play', () => updateLabel(preview));
    preview.video.addEventListener('pause', () => updateLabel(preview));
    preview.toggle.addEventListener('click', () => {
      preview.manuallyPaused = !preview.video.paused;
      preview.manuallyPlaying = !preview.manuallyPaused;
      syncPlayback(preview);
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const preview = previews.find(item => item.figure === entry.target);
        preview.visible = entry.isIntersecting;
        syncPlayback(preview);
      });
    }, { threshold: 0.25 });
    previews.forEach(preview => observer.observe(preview.figure));
  } else {
    previews.forEach(preview => { preview.visible = true; syncPlayback(preview); });
  }

  const syncAll = () => previews.forEach(syncPlayback);
  document.addEventListener('visibilitychange', () => {
    const media = content.querySelector('video');
    if (document.hidden) {
      resumeModal = Boolean(media && !media.paused);
      media?.pause();
    } else if (resumeModal && dialog.open && media) {
      media.play().catch(() => {});
      resumeModal = false;
    }
    syncAll();
  });
  reducedMotion.addEventListener('change', () => {
    previews.forEach(preview => { preview.manuallyPlaying = false; });
    syncAll();
  });

  figures.forEach(figure => {
    figure.querySelector('.media-open').addEventListener('click', event => {
      opener = event.currentTarget;
      title.textContent = figure.dataset.title;
      const isVideo = figure.dataset.mediaType === 'video';
      const media = document.createElement(isVideo ? 'video' : 'img');
      media.src = figure.dataset.mediaSrc;
      if (isVideo) {
        media.controls = true;
        media.playsInline = true;
        media.muted = true;
        media.loop = true;
        media.poster = figure.querySelector('video').poster;
      } else {
        media.alt = figure.dataset.mediaAlt;
      }
      content.replaceChildren(media);
      document.body.classList.add('media-is-open');
      dialog.showModal();
      syncAll();
      if (isVideo) media.play().catch(() => {});
    });
  });

  dialog.querySelector('.media-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right
      || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    resumeModal = false;
    content.querySelector('video')?.pause();
    content.replaceChildren();
    document.body.classList.remove('media-is-open');
    opener?.focus();
    syncAll();
  });
})();

(() => {
  const links = [...document.querySelectorAll('.structure-nav a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  let scheduled = false;
  function update() {
    const marker = Math.min(window.innerHeight * 0.35, 260);
    let current = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= marker) current = section;
    for (const link of links) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  update();
})();

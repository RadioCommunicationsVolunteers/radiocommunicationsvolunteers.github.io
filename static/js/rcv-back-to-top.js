(() => {
  const button = document.querySelector('.rcv-back-to-top');
  const header = document.querySelector('header');
  const desktopQuery = window.matchMedia('(min-width: 992px)');

  if (!button || !header) return;

  const updateVisibility = () => {
    button.classList.toggle(
      'is-visible',
      desktopQuery.matches && window.scrollY > header.offsetHeight,
    );
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  desktopQuery.addEventListener('change', updateVisibility);
  updateVisibility();
})();

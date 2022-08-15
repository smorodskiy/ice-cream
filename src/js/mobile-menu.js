(() => {
  // Scroll size
  document.documentElement.style.setProperty(
    '--scrollbar-width',
    window.innerWidth - document.documentElement.clientWidth + 'px'
  );

  const menuBtnsRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  for (const btn in menuBtnsRef) {
    if (Object.hasOwnProperty.call(menuBtnsRef, btn)) {
      const element = menuBtnsRef[btn];
      element.addEventListener('click', () => {
        const expanded =
          element.getAttribute('aria-expanded') === 'true' || false;
        element.classList.toggle('is-open');
        element.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
      });
    }
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove('is-open');

    for (const btn in menuBtnsRef) {
      if (Object.hasOwnProperty.call(menuBtnsRef, btn)) {
        const element = menuBtnsRef[btn];
        element.setAttribute('aria-expanded', false);
        element.classList.remove('is-open');
      }
    }

    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

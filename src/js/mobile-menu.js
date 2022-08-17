(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open"); 
  });
    
  // Close the mobile menu on wider screens if the device orientation changes
     window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    });
})();

// (() => {
//   const menuBtnsRef = document.querySelectorAll('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   for (const btn in menuBtnsRef) {
//     if (Object.hasOwnProperty.call(menuBtnsRef, btn)) {
//       const element = menuBtnsRef[btn];
//       console.log(element);

//       element.addEventListener('click', () => {
//         toogleClass();
//       });
//     }
//   }

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenuRef.classList.remove('is-open');

//     closeModal();

//     // bodyScrollLock.enableBodyScroll(document.body);
//   });

//   function closeModal() {
//     console.log('close');
//     for (const btn in menuBtnsRef) {
//       if (Object.hasOwnProperty.call(menuBtnsRef, btn)) {
//         const element = menuBtnsRef[btn];
//         console.log(element);
//         element.setAttribute('aria-expanded', false);
//         element.classList.remove('is-open');
//       }
//     }
//   }

//   function toogleClass() {
    
//     for (const btn in menuBtnsRef) {
//       if (Object.hasOwnProperty.call(menuBtnsRef, btn)) {
//         const element = menuBtnsRef[btn];
//         const expanded =
//         element.getAttribute('aria-expanded') === 'true' || false;
//         element.classList.toggle('is-open');
//         element.setAttribute('aria-expanded', !expanded);
//       }
//     }

//     mobileMenuRef.classList.toggle('is-open');
//   }

// })();

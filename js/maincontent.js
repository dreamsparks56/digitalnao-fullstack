window.addEventListener("DOMContentLoaded", event => {

  const scrolledNavbar = () => {
      const navbar = document.getElementById("contenido")
      if (!navbar) {
          return;
      }
      if (window.scrollY === 0) {
          navbar.classList.remove('navbar-scrolled')
      } else {
          navbar.classList.add('navbar-scrolled')
      }

  }

  scrolledNavbar()

  document.addEventListener('scroll', scrolledNavbar);

  const navbar = document.getElementById("contenido")
  if (navbar) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#contenido',
          rootMargin: '0px 0px -40%',
      })
  }

})
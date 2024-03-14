class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  //=========liste de villas

   // Adiciona evento de clique aos cabeçalhos
   var accordionHeaders = document.querySelectorAll('.accordion-header');
   accordionHeaders.forEach(function(header) {
       header.addEventListener('click', function() {
           // Troca a classe "ativo" para abrir ou fechar o acordeão
           this.parentElement.classList.toggle('ativo');
           // Seleciona o conteúdo do acordeão
           var accordionContent = this.nextElementSibling;
           // Abre ou fecha o conteúdo do acordeão
           if (accordionContent.style.display === 'block') {
               accordionContent.style.display = 'none';
           } else {
               accordionContent.style.display = 'block';
           }
       });
   });
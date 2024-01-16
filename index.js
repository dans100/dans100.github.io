class JWG {
  constructor() {
    this.mobileMenu();
    this.smoothScroll();
    this.accordion();
  }

  // Mobile menu
  mobileMenu() {
    const menuToggler = document.querySelector(".js-toggler-mobile-menu");
    const mobileMenu = document.querySelector(".js-mobile-menu");

    menuToggler.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.toggle("active");
      menuToggler.classList.toggle("open");
    });
  }

  // Scroll to offers
  smoothScroll() {
    const bannerBtn = document.querySelector(".js-banner-btn");
    const offersSection = document.querySelector(".js-offers");

    bannerBtn.addEventListener("click", () => {
      const sectionTop = offersSection.offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    });
  }

  // Accordion
  accordion() {
    const accordionItems = document.querySelectorAll(".js-accordion-item");

    accordionItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.toggleAccordionItem(item);
      });
    });
  }

  toggleAccordionItem(item) {
    const accordionTitle = item.querySelector(".js-accordion-title");
    const accordionContent = item.querySelector(".js-accordion-content");

    if (!item.classList.contains("active")) {
      this.openAccordionItem(item, accordionTitle, accordionContent);
    } else {
      this.closeAccordionItem(item, accordionTitle, accordionContent);
    }
  }

  openAccordionItem(item, title, content) {
    item.classList.add("active");
    title.classList.add("active");
    content.classList.add("active");
    content.style.height = "auto";

    let height = content.clientHeight + "px";
    content.style.height = "0px";

    setTimeout(() => {
      content.style.height = height;
    }, 0);
  }

  closeAccordionItem(item, title, content) {
    content.style.height = "0px";
    item.classList.remove("active");
    title.classList.remove("active");

    content.addEventListener(
      "transitionend",
      () => {
        content.classList.remove("active");
      },
      {
        once: true,
      }
    );
  }
}

const jwg = new JWG();

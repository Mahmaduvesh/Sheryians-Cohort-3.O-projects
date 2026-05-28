$(document).ready(function () {
  let carouselContainer = $("#owl-demo1");

  carouselContainer.owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    navText: [
      '<i class="ri-arrow-left-s-line"></i>',
      '<i class="ri-arrow-right-s-line"></i>',
    ],
  });

  // Handle slide changes smoothly by toggling state classes on the outer container
  carouselContainer.on("changed.owl.carousel", function (event) {
    let currentItem = event.item.index;
    let totalItems = event.item.count;

    if (currentItem === 0) {
      carouselContainer.addClass("hide-prev").removeClass("hide-next");
    } else if (currentItem === totalItems - 1) {
      carouselContainer.addClass("hide-next").removeClass("hide-prev");
    } else {
      carouselContainer.removeClass("hide-prev hide-next");
    }
  });

  // Run once on initialization to hide the left arrow on slide 1
  carouselContainer.addClass("hide-prev");
});

const nav = document.querySelector("nav");
const headline = document.querySelector(".headline");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");

    /* Hide headline when scrolling */
    headline.style.transform = "translateY(-100%)";
    headline.style.transition = "0.3s ease";
  } else {
    nav.classList.remove("scrolled");

    /* Show headline again at top */
    headline.style.transform = "translateY(0)";
  }
});

$(document).ready(function () {
  const $carousel = $("#tea-products-carousel");

  $carousel.owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 24,
    navText: [
      '<i class="ri-arrow-left-s-line"></i>',
      '<i class="ri-arrow-right-s-line"></i>',
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1280: { items: 4 },
    },
    onInitialized: handleCarouselState,
    onTranslated: handleCarouselState,
  });

  function handleCarouselState(event) {
    if (!event.namespace) return;

    const activeCarousel = $(event.target);
    const currentPosition = event.item.index;
    const totalItems = event.item.count;
    const itemsInView = event.page.size;

    const $prevButton = activeCarousel.find(".owl-prev");
    const $nextButton = activeCarousel.find(".owl-next");

    if (currentPosition === 0) {
      $prevButton.addClass("disabled").css("opacity", "0.3");
    } else {
      $prevButton.removeClass("disabled").css("opacity", "1");
    }

    if (currentPosition >= totalItems - itemsInView) {
      $nextButton.addClass("disabled").css("opacity", "0.3");
    } else {
      $nextButton.removeClass("disabled").css("opacity", "1");
    }

    const totalPages = Math.ceil(totalItems / itemsInView);
    const currentPage = Math.floor(currentPosition / itemsInView);

    const $dotsContainer = $(".custom-carousel-dots");
    $dotsContainer.empty();

    for (let i = 0; i < totalPages; i++) {
      const activeClass = i === currentPage ? "active" : "";
      $dotsContainer.append('<div class="dot ' + activeClass + '"></div>');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    revealOnScroll.observe(element);
  });
});

$(document).ready(function () {
  var $carousel = $("#teaCommunityCarousel");

  $carousel.owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    dots: false /* Turn off default dots since we are using custom lines */,
    navText: [
      `<div class="custom-nav-item" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`,
      `<div class="custom-nav-item" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></div>`,
    ],
    responsive: {
      0: { items: 1, stagePadding: 30 },
      480: { items: 2, stagePadding: 10 },
      768: { items: 3 },
      1024: { items: 4 },
      1300: { items: 5, loop: false },
    },
    // This event listens for changes and updates your lines
    onChanged: function (event) {
      if (!event.namespace || event.property.name !== "position") return;

      // Calculate active index relative to total visible groups
      var index = event.item.index;
      var count = event.item.count;
      var size = event.page.size;

      // Normalizing index because of Owl Carousel's infinite loop clones
      var activePage = Math.floor((index - Math.floor(count / size)) % 3);
      if (activePage < 0) activePage = 0;

      // Toggle active class on your lines
      $(".tea-linear-indicators .indicator-line")
        .removeClass("active")
        .eq(activePage % $(".tea-linear-indicators .indicator-line").length)
        .addClass("active");
    },
  });

  // Optional: Clicking a line jumps directly to that section of slides
  $(".tea-linear-indicators .indicator-line").click(function () {
    var lineIndex = $(this).index();
    // Move carousel to matching slot segment
    $carousel.trigger("to.owl.carousel", [lineIndex * 3, 300]);
  });
});

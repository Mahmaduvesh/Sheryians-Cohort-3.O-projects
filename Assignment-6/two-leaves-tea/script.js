$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    navText: [
      '<i class="ri-arrow-left-s-line"></i>',
      '<i class="ri-arrow-right-s-line"></i>',
    ],
  });

  // Hide left button initially
  $(".owl-prev").hide();

  $("#owl-demo").on("changed.owl.carousel", function (event) {
    let currentItem = event.item.index;
    let totalItems = event.item.count;

    // First slide
    if (currentItem === 0) {
      $(".owl-prev").hide();
      $(".owl-next").show();
    }

    // Last slide
    else if (currentItem === totalItems - 1) {
      $(".owl-next").hide();
      $(".owl-prev").show();
    }

    // Middle slides
    else {
      $(".owl-prev").show();
      $(".owl-next").show();
    }
  });
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

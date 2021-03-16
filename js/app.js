$(function () {
  const worksSlider = $('[data-slider="slick"]');

  // FILTER
  const filter = $("[data-filter");

  filter.on("click", function (event) {
    event.preventDefault();

    const cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat").removeClass("hide");
    } else {
      $("[data-cat").each(function () {
        const workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
  //   MODAL
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    const $this = $(this);
    const modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 200);

    worksSlider.slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    const $this = $(this);
    const modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    const $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  //   SLIDER https://kenwheeler.github.io/slick/

  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    const currentSlider = $(this).parents(".modal").find("[data-slider='slick']");

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    const currentSlider = $(this).parents(".modal").find("[data-slider='slick']");

    currentSlider.slick("slickNext");
  });

  // MENU NAV TOGGLE
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  // FIXED HEADER

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});


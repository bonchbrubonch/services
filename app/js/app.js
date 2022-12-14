$(function () {

  $(document).ready(function () {
    $('.js-example-basic-single').select2();
  });

  $(".js-example-placeholder-single").select2({
    placeholder: " ",
  });

  $(".js-example-placeholder-category").select2({
    placeholder: "Категория",
  });

  $(".js-example-placeholder-country").select2({
    placeholder: "Страна",
  });

  $(".js-example-placeholder-state").select2({
    placeholder: "Область",
  });
  $(".js-example-placeholder-currency").select2({
    placeholder: "Выберите валюту",
  });

  $(document).ready(function () {
    $('.subcategory__select').select2();
  });

  /*start mob menu======*/
  $(".header__menu-btn").on("click", function () {
    $("body").addClass("lock");
    $(".header__list").addClass("open");
    $(".subcategory__left").removeClass("open");
    $(".cabinet-menu").removeClass("open");
  });

  $(".header__close-menu").on("click", function () {
    $("body").removeClass("lock");
    $(".header__list").removeClass("open");
    $(".submenu").removeClass("open");
    $(".item-1").removeClass("open");
    $(".item-2").removeClass("open");
    $(".item-3").removeClass("open");
    $(".item-4").removeClass("open");
  });
  /*end mob menu======*/

  /*start filters==*/
  $(".subcategory__filter-mob").on("click", function () {
    $("body").addClass("lock");
    $(".subcategory__left").addClass("open");
  });

  $(".subcategory__close").on("click", function () {
    $("body").removeClass("lock");
    $(".subcategory__left").removeClass("open");
  });
  /*end filters==*/

  /*start cabinet-show=======*/
  $(".cabinet-show").on("click", function () {
    $("body").addClass("lock");
    $(".cabinet-menu").addClass("open");
  });
  $(".cabinet-menu__close").on("click", function () {
    $("body").removeClass("lock");
    $(".cabinet-menu").removeClass("open");
  });
  /*end cabinet-show=======*/

  /*start mob submenu==========*/
  $(".submenu__back-btn").on("click", function () {
    $(".submenu").removeClass("open");
  });
  $(".btn-1").on("click", function () {
    $(".item-1").addClass("open");
  });
  $(".btn-2").on("click", function () {
    $(".item-2").addClass("open");
  });
  $(".btn-3").on("click", function () {
    $(".item-3").addClass("open");
  });
  $(".btn-4").on("click", function () {
    $(".item-4").addClass("open");
  });

  $(".submenu__back-item").on("click", function () {
    $(".item-1").removeClass("open");
    $(".item-2").removeClass("open");
    $(".item-3").removeClass("open");
    $(".item-4").removeClass("open");
  });

  $(".header__item-child").on("click", function () {
    $(".submenu").toggleClass("open");
  });

  if ($('.submenu').length > 0) {
    //tabs
    $('.submenu__inner').each(function () {
      let ths = $(this);
      ths.find('.submenu__item').not(':first').hide();
      ths.find('.submenu__btn').click(function () {
        ths.find('.submenu__btn').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.submenu__item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');

    });
  }
  /*end mob submenu==========*/

  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: true,
    prevArrow: '<button class="next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.5" fill="white" fill-opacity="0.8" stroke="#FE8744"/><path d="M12.2424 20.8441C12.1524 20.752 12.1021 20.6284 12.1021 20.4997C12.1021 20.3709 12.1524 20.2473 12.2424 20.1552L17.2676 15L12.2424 9.84582C12.1524 9.75373 12.1021 9.63011 12.1021 9.50138C12.1021 9.37265 12.1524 9.24903 12.2424 9.15694C12.2861 9.11204 12.3384 9.07635 12.3961 9.05198C12.4538 9.02761 12.5159 9.01505 12.5785 9.01505C12.6412 9.01505 12.7033 9.02761 12.761 9.05198C12.8187 9.07635 12.871 9.11204 12.9147 9.15694L18.2587 14.6401C18.3525 14.7364 18.4051 14.8655 18.4051 15C18.4051 15.1345 18.3525 15.2636 18.2587 15.3599L12.9147 20.8431C12.871 20.888 12.8187 20.9237 12.761 20.948C12.7033 20.9724 12.6412 20.985 12.5785 20.985C12.5159 20.985 12.4538 20.9724 12.3961 20.948C12.3384 20.9237 12.2861 20.888 12.2424 20.8431V20.8441Z" fill="#FF561E"/></svg></button>',
    nextArrow: '<button class="prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.5" fill="white" fill-opacity="0.8" stroke="#FE8744"/><path d="M12.2424 20.8441C12.1524 20.752 12.1021 20.6284 12.1021 20.4997C12.1021 20.3709 12.1524 20.2473 12.2424 20.1552L17.2676 15L12.2424 9.84582C12.1524 9.75373 12.1021 9.63011 12.1021 9.50138C12.1021 9.37265 12.1524 9.24903 12.2424 9.15694C12.2861 9.11204 12.3384 9.07635 12.3961 9.05198C12.4538 9.02761 12.5159 9.01505 12.5785 9.01505C12.6412 9.01505 12.7033 9.02761 12.761 9.05198C12.8187 9.07635 12.871 9.11204 12.9147 9.15694L18.2587 14.6401C18.3525 14.7364 18.4051 14.8655 18.4051 15C18.4051 15.1345 18.3525 15.2636 18.2587 15.3599L12.9147 20.8431C12.871 20.888 12.8187 20.9237 12.761 20.948C12.7033 20.9724 12.6412 20.985 12.5785 20.985C12.5159 20.985 12.4538 20.9724 12.3961 20.948C12.3384 20.9237 12.2861 20.888 12.2424 20.8431V20.8441Z" fill="#FF561E"/></svg></button>',
  });

  $(".card__flag").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".form__input-show").on("click", function () {
    $(this).toggleClass("active");
  });

  /*start rating=====*/
  $(".rateYo").rateYo({
    starWidth: "15px",
    ratedFill: "#FFA800",
    spacing: "5px",
    rating: 4,
    readOnly: true
  });

  $(".seller__star").rateYo({
    starWidth: "25px",
    ratedFill: "#FFA800",
    spacing: "5px",
    rating: 4,
    fullStar: true
  });
  /*end rating=====*/

  $(".main__vip-mob").on("click", function () {
    $(this).addClass("active");
    $(".main__new-mob").removeClass("active");
    $(".main__left").addClass("active");
    $(".main__right").removeClass("active");
  });

  $(".main__new-mob").on("click", function () {
    $(this).addClass("active");
    $(".main__vip-mob").removeClass("active");
    $(".main__right").addClass("active");
    $(".main__left").removeClass("active");
  });

  $('.regular-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    swipe: false,
    asNavFor: '.regular-slider__bottom',
  });
  $('.regular-slider__bottom').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.regular-slider__top',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<button class="next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.5" fill="white" fill-opacity="0.8" stroke="#FE8744"/><path d="M12.2424 20.8441C12.1524 20.752 12.1021 20.6284 12.1021 20.4997C12.1021 20.3709 12.1524 20.2473 12.2424 20.1552L17.2676 15L12.2424 9.84582C12.1524 9.75373 12.1021 9.63011 12.1021 9.50138C12.1021 9.37265 12.1524 9.24903 12.2424 9.15694C12.2861 9.11204 12.3384 9.07635 12.3961 9.05198C12.4538 9.02761 12.5159 9.01505 12.5785 9.01505C12.6412 9.01505 12.7033 9.02761 12.761 9.05198C12.8187 9.07635 12.871 9.11204 12.9147 9.15694L18.2587 14.6401C18.3525 14.7364 18.4051 14.8655 18.4051 15C18.4051 15.1345 18.3525 15.2636 18.2587 15.3599L12.9147 20.8431C12.871 20.888 12.8187 20.9237 12.761 20.948C12.7033 20.9724 12.6412 20.985 12.5785 20.985C12.5159 20.985 12.4538 20.9724 12.3961 20.948C12.3384 20.9237 12.2861 20.888 12.2424 20.8431V20.8441Z" fill="#FF561E"/></svg></button>',
    nextArrow: '<button class="prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14.5" fill="white" fill-opacity="0.8" stroke="#FE8744"/><path d="M12.2424 20.8441C12.1524 20.752 12.1021 20.6284 12.1021 20.4997C12.1021 20.3709 12.1524 20.2473 12.2424 20.1552L17.2676 15L12.2424 9.84582C12.1524 9.75373 12.1021 9.63011 12.1021 9.50138C12.1021 9.37265 12.1524 9.24903 12.2424 9.15694C12.2861 9.11204 12.3384 9.07635 12.3961 9.05198C12.4538 9.02761 12.5159 9.01505 12.5785 9.01505C12.6412 9.01505 12.7033 9.02761 12.761 9.05198C12.8187 9.07635 12.871 9.11204 12.9147 9.15694L18.2587 14.6401C18.3525 14.7364 18.4051 14.8655 18.4051 15C18.4051 15.1345 18.3525 15.2636 18.2587 15.3599L12.9147 20.8431C12.871 20.888 12.8187 20.9237 12.761 20.948C12.7033 20.9724 12.6412 20.985 12.5785 20.985C12.5159 20.985 12.4538 20.9724 12.3961 20.948C12.3384 20.9237 12.2861 20.888 12.2424 20.8431V20.8441Z" fill="#FF561E"/></svg></button>',
  });

  $('.ad-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false,
    rows: 2,
    responsive: [{
      breakpoint: 700,
      settings: {
        rows: 4,
        slidesToShow: 1,
      }
    }]
  });

  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });


  $(".cabinet-menu__list li").on("click", function () {
    $(".cabinet-menu__list li").removeClass("active");
    $(this).addClass("active");
  });

  
  $(".btn-toggle").on("click", function () {
    $(".form__wrapper-requred").slideToggle();
    $(".form__buttons-regular").addClass("active");
  });


  $(".characteristics__btn").on("click", function () {
    $(".characteristics__list").addClass("active");
    $(".characteristics__btn").addClass("active");
  });


  
});
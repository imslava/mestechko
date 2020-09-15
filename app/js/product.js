$('.gallery-slider').slick({
  infinite: true,
  arrow: true,
  dots: false,
  centerMode: true,
  variableWidth: true
});

if($(window).width() < 768){
  $('.plus-row').slick({
    infinite: false,
    arrows: false,
    dots: true,
    variableWidth: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
  });
}
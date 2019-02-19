var slideDescriptionTitle = [
  'BeeChild',
  'RedBull Culture Clash',
  'Reebok: Perfect Never',
  'Coca-Cola Teens',
  'Despicable Me 3',
  'Alien: Covenant'
]

var slideDescriptionText = [
  'Website',
  'Rich Media, Mobile',
  'Walking Ad, Mobile',
  'Motion Ad',
  'Walking Ad',
  'Video'
]

$(document).ready(function(){
  $('#slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    arrows: false,
    dots: false,
    variableWidth: true,
  });

  $('#slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("#slideCurrentNumber").html("0" + [nextSlide + 1]);

    var numberLine = nextSlide+1;
    $("#slideLine").css({"width":[numberLine*16.67]+"%"});
    $("#slideTitle").html(slideDescriptionTitle[(nextSlide)]);
    $("#slideText").html(slideDescriptionText[(nextSlide)]);
  });
});

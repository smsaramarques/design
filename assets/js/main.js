$(document).on("scroll", function(){
  if($(window).scrollTop() > 10){
    $("header").css({"background": "rgba(255,255,255,0.95)"});
  } else if($(window).scrollTop() < 10){
    $("header").css({"background": "transparent"});
  }

  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
});

$(document).ready(function(){
  $("#menuToggle").click(function(){
    $("#dropdown").fadeToggle();
  });

  $("#dropdownItemProject").click(function(){
    $("#dropdown").fadeOut();
  });
});

function selectedProject(value) {
  var varSelected = [
    'beechild',
    'redbull',
    'reebok',
    'cocacola',
    'despicableme',
    'aliencovenant'
  ]

  var url = 'https://smsaramarques.github.io/design/project-m.html';
  window.location.href = url + '?variable=' + varSelected[value];
}

var url = window.location.search.split(',')[0];
var project = url ? url.split('=')[1] : window.location.search.slice(1);

switch(project) {
  case 'beechild':
    window.location.href = 'https://smsaramarques.github.io/design/project-d.html';
  break;

  case 'redbull':
    $("#imgProjectFeature").css({"background-image": "url('assets/images/projects/redbull/7.jpg')", "background-position": "center 85%"});
    $("#imgProjectResponsiveView").css({"background-image": "url('assets/images/projects/redbull/6.jpg')", "background-position": "top center"});

    $("#projectProjectFeature").html("RedBull Culture Clash");
    $("#formatProjectFeature").html("Rich Media, Mobile");
    $("#clientDateProjectFeature").html("RedBull, Portugal (YDigital Media)<br>January 2018");
    $("#specificitiesProjectFeature").html("Sketch App, HTML, CSS, JQuery, JavaScript, PHP");
    $("#descriptionProjectFeature").html("Project for the new Redbull event: ‘Redbull Culture Clash’.<br><br>The goal is to promote the event, mainly the four teams of the musical battle.<br><br>Four teams are presented: “Capicua + Guerrilha Cor-de-Rosa”, “Ultramar”, “Bridgetown” and “Paus + Pedras”.<br><br>The user can choose to: buy tickets (visit the official ticket office website by clicking on the ‘Buy here’ button), find out more about the teams (watch the presentation video of the selected team by click on the 'Watch Video' button) and support them (clicking on the slide). Here, the user has the opportunity to use an image by his choice with the emblem of the selected team and changing it (size and position). Once completed, he can share it on Facebook, WhatsApp or even save it on his smartphone.");

    $("#quoteProjectGallery").html("The biggest battle of the year is back! 37 artists, 4 crews will face each other on 4 stages. In the end, only one crew can win and the winner is you!");

    $("#imgProjectGallery1").attr("src","assets/images/projects/redbull/1.gif");
    $("#imgProjectGallery2").attr("src","assets/images/projects/redbull/2.jpg");
    $("#imgProjectGallery3").attr("src","assets/images/projects/redbull/3.jpg");
    $("#imgProjectGallery4").attr("src","assets/images/projects/redbull/4.gif");
    $("#imgProjectGallery5").attr("src","assets/images/projects/redbull/5.gif");

  break;

  case 'reebok':
    $("#imgProjectFeature").css({"background-image": "url('assets/images/projects/reebok/7.jpg')", "background-position":"center top"});
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        $("#imgProjectFeature").css("background-image", "url('assets/images/projects/reebok/7-2.jpg')");
      }

    $("#imgProjectResponsiveView").css({"background-image": "url('assets/images/projects/reebok/6.jpg')"});

    $("#projectProjectFeature").html("Reebok: Perfect Never");
    $("#formatProjectFeature").html("Walking Ad, Mobile");
    $("#clientDateProjectFeature").html("Reebok, Spain (YDigital Media)<br>December 2017");
    $("#specificitiesProjectFeature").html("Sketch App, HTML, CSS, JQuery, JavaScript, PHP");
    $("#descriptionProjectFeature").html("Project for the new Reebok campaign: ‘Never Perfect’ with Gigi Hadid.<br><br>‘Be honest. Be real. Be yourself without excuses and above all move and inspire yourself’ is the aim of this campaign.<br><br>The only thing the user has to do to see this campaign is to move along with his smartphone. Each step is a new bar, image and quote of the campaign. Once completed, the user can watch the official campaign video or visit the official Reebok website for more information.");

    $("#quoteProjectGallery").html("Be honest. Be real. Be yourself without excuses and above all move and inspire yourself!");

    $("#imgProjectGallery1").attr("src","assets/images/projects/reebok/1.jpg");
    $("#imgProjectGallery2").attr("src","assets/images/projects/reebok/2.gif");
    $("#imgProjectGallery3").attr("src","assets/images/projects/reebok/3.jpg");
    $("#imgProjectGallery4").attr("src","assets/images/projects/reebok/4.jpg");
    $("#imgProjectGallery5").attr("src","assets/images/projects/reebok/5.jpg");
  break;

  case 'cocacola':
    $("#imgProjectFeature").css({"background-image":"url('assets/images/projects/cocacola/7.jpg')"});
    $("#imgProjectResponsiveView").css({"background-image": "url('assets/images/projects/cocacola/6.jpg')"});

    $("#projectProjectFeature").html("Coca-Cola Teens");
    $("#formatProjectFeature").html("Motion Ad");
    $("#clientDateProjectFeature").html("Coca-Cola, Portugal (YDigital Media)<br>September 2017");
    $("#specificitiesProjectFeature").html("Sketch App, HTML, CSS, JQuery, JavaScript, PHP");
    $("#descriptionProjectFeature").html("Project for the new Portuguese Coca-Cola campaign: ‘Coca-Cola Teens’.<br><br>The goal of this campaign is to try new things, live new adventures and enjoy magical moments this summer.<br><br>The only thing the user has to do to see this campaign is to move with his smartphone as a compass. Each direction is a surprise that Coca-Cola is offering: Wi-Fi on the beach, surf lessons, shopping or tickets for the ‘Vodafone Paredes de Coura’ festival. By clicking on each one, the user gets more information about the selected option and can share it on Facebook or WhatsApp. To other options click the ‘Back’ button in the upper left corner.");

    $("#quoteProjectGallery").html("Try new things! Live new adventures and enjoy magical moments this summer!");

    $("#videoProjectGallery2").show();
    $("#imgProjectGallery2").hide();

    $("#imgProjectGallery1").attr("src","assets/images/projects/cocacola/1.gif");
    $("#videoProjectGallery2").attr("src","assets/images/projects/cocacola/2.mp4");
    $("#imgProjectGallery3").attr("src","assets/images/projects/cocacola/3.jpg");
    $("#imgProjectGallery4").attr("src","assets/images/projects/cocacola/4.jpg");
    $("#imgProjectGallery5").attr("src","assets/images/projects/cocacola/5.jpg");
  break;

  case 'despicableme':
    $("#imgProjectFeature").css("background-image", "url('assets/images/projects/despicableme/7.jpg')");
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        $("#imgProjectFeature").css("background-position", "35% center");
      }

    $("#imgProjectResponsiveView").css({"background-image": "url('assets/images/projects/despicableme/6.jpg')"});

    $("#projectProjectFeature").html("Despicable Me 3");
    $("#formatProjectFeature").html("Walking Ad");
    $("#clientDateProjectFeature").html("Universal Pictures, Columbia and Portugal (YDigital Media)<br>June 2017");
    $("#specificities ").html("Sketch App, HTML, CSS, JQuery, JavaScript, PHP");
    $("#descriptionProjectFeature").html("Project for the new animated film: ‘Despicable Me 3’.<br><br>The goal is to promote the film through an innovative and interactive idea.<br><br>Initially, the user reads the instructions that will remain present until the end of the game: by clicking on the 'Play' button the user needs to walk to move the character Baltazar. Each step of the user is one step of Baltazar, which means that if the user stops Baltazar will stop too. When Baltazar reaches the boat, the user goes to the homepage where he can add the film’s premiere to the calendar of his smartphone, watch the official trailer, see the gallery or read the synopsis.");

    $("#quoteProjectGallery").html("Baltazar: You've ruined everything! And now it's time to die! Any last words, Gru?<br>Gru: You know what? I got two words for you: Dance fight!");

    $("#videoProjectGallery2, #videoProjectGallery4, #videoProjectGallery5").show();
    $("#imgProjectGallery2, #imgProjectGallery4, #imgProjectGallery5").hide();

    $("#imgProjectGallery1").attr("src","assets/images/projects/despicableme/1.jpg");
    $("#videoProjectGallery2").attr("src","assets/images/projects/despicableme/2.mp4");
    $("#imgProjectGallery3").attr("src","assets/images/projects/despicableme/3.jpg");
    $("#videoProjectGallery4").attr("src","assets/images/projects/despicableme/4.mp4");
    $("#videoProjectGallery5").attr("src","assets/images/projects/despicableme/5.mp4");
  break;

  case 'aliencovenant':
    $("#imgProjectFeature").css("background-image", "url('assets/images/projects/aliencovenant/7.jpg')");
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        $("#imgProjectFeature").css("background-position", "60% center");
      }

    $("#imgProjectResponsiveView").css({"background-image": "url('assets/images/projects/aliencovenant/6.jpg')", "background-position":"20% center"});

    $("#projectProjectFeature").html("Alien: Covenant");
    $("#formatProjectFeature").html("Video");
    $("#clientDateProjectFeature").html("20th Century Fox, Portugal (YDigital Media)<br>April 2017");
    $("#specificitiesProjectFeature").html("Sketch App, Adobe Photoshop, Adobe After Effects, HTML, CSS, JQuery, JavaScript, PHP");
    $("#descriptionProjectFeature").html("Project for the new horror film: ‘Alien: Covenant’.<br><br>The goal is to promote the film through an innovative and interactive idea by showing the nature of the movie.<br><br>This Rich Media begins with a piece of the film showing horror and suspense. Once completed, the user goes automatically to the homepage where he can watch the official trailer, add the film’s premiere to the calendar of his smartphone, see the gallery or read the synopsis. In any of these options he can visit the official website of the film to find out more about it.");

    $("#quoteProjectGallery").html("Uncover what they think is an uncharted paradise but in reality is actually a dark, dangerous world! Will you survive?");

    $("#videoProjectGallery1").show();
    $("#imgProjectGallery1").hide();

    $("#videoProjectGallery1").attr("src","assets/images/projects/aliencovenant/1.mp4");
    $("#imgProjectGallery2").attr("src","assets/images/projects/aliencovenant/2.jpg");
    $("#imgProjectGallery3").attr("src","assets/images/projects/aliencovenant/3.jpg");
    $("#imgProjectGallery4").attr("src","assets/images/projects/aliencovenant/4.jpg");
    $("#imgProjectGallery5").attr("src","assets/images/projects/aliencovenant/5.jpg");
  break;
 // default:
}

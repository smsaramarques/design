var titleTimeline = [
  'DEGREE IN COMUNICATIONS DESIGN',
  'POSTGRADUATE DEGREE IN WEB DESIGN',
  'MASTER’S DEGREE IN DESIGN AND VISUAL CULTURE',
  'WEB DESIGNER & FRONT-END DEVELOPER',
  'FRONT-END DEVELOPER',
  'WEB DESIGNER & FRONT-END DEVELOPER'
]

var locationTimeline = [
  'Lusofona, Lisbon',
  'IADE/ IPAM, Lisbon',
  'IADE, Lisbon',
  'YDigital Media, Lisbon',
  'Codefive, Lisbon',
  'Bee Ineditus, Lisbon'
]

var textTimeline = [
  '- Graphic design: logos and graphics standards manuals, small and large prints as flyers and billboards.Briefing analysis, budget proposal, printing methods.<br>- Motion Design: After Effects - 2D and 3D<br>- Web Design: HTML and CSS through Dreamweaver, Flash Professional<br>- Analog and digital photography.',
  'Programming - HTML5, CSS, jQuery and JavaScript - and user knowledge - UX & UI Design - applied in the final project: personas, moodboards, stylescapes, wireframes, design, online and live tests to potential users, and finally, development.',
  'Innovation and creativity were the key to achieve different and original solutions for graphic projects of a social, cultural and economic nature. Visual and graphic design, typography and digital photography were some of the fields of work that allowed me to explore such abilities.',
  'Design and development of digital advertisings for large multinational companies as Coca-Cola and Reebok. Rich Medias, landing pages, banners, newsletters and redesign of the agency’s website were made, such as video and graphic design.',
  'Development of an application for Datalink. HTML, CSS, Bootstrap, JavaScript - ajax and json - were some of the languages used for these monthly project.',
  'Design and development of websites for national companies of the pharmaceutical industry, fashion and furniture. HTML, SCSS, Bootstrap, jQuery, Wordpress and Microsoft Visual Studio were some of the tools used for these projects.'
]

$(document).ready(function(){
  $("#date18, #date19, #line4").css({"opacity":"1","font-family":"FuturaStd-Bold"});
});

var prevNr = 4;

function clickTimeline(nr) {
  window.nrTimeline = nr;
  $("#titleTimeline").html(titleTimeline[nr]);
  $("#locationTimeline").html(locationTimeline[nr]);
  $("#textTimeline").html(textTimeline[nr]);

  if(nr == 0) {
    desactivateDate();
    $("#date10, #date14").css({"opacity":"1","font-family":"FuturaStd-Bold"});
  }
  if(nr == 1) {
    desactivateDate();
    $("#date14, #date15").css({"opacity":"1","font-family":"FuturaStd-Bold"});
  }
  if(nr == 2) {
    desactivateDate();
    $("#date14, #date16").css({"opacity":"1","font-family":"FuturaStd-Bold"});
  }
  if(nr == 3) {
    desactivateDate();
    $("#date16, #date18").css({"opacity":"1","font-family":"FuturaStd-Bold"});
  }
  if(nr == 4) {
    desactivateDate();
    $("#date18, #date19").css({"opacity":"1","font-family":"FuturaStd-Bold"});
    $("#col2DescriptionTimeline").show();
    $("#titleTimeline2").html(titleTimeline[5]);
    $("#locationTimeline2").html(locationTimeline[5]);
    $("#textTimeline2").html(textTimeline[5]);
  }

  prevNr = nr;
}

function desactivateDate() {
  $("#col2DescriptionTimeline").hide();
  $("#line"+prevNr).css({"opacity":"0.2","font-family":"FuturaStd-Light", "border-bottom":"1px solid #000"});
  $(".date").css({"opacity":"0.3","font-family":"FuturaStd-Light"});
  $("#line"+nrTimeline).css({"opacity": "1", "font-family":"FuturaStd-Bold", "border-bottom": "2px solid #000"});
}

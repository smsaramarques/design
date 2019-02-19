// btn next/ previous project
var varProject = [
  'beechild',
  'redbull',
  'reebok',
  'cocacola',
  'despicableme',
  'aliencovenant'
]

$("#btnPreviousProject").click(function(){
  detectUrl();
  window.location.href = window.urlProject + '?variable=' + varProject[window.nrVarProject-1];

  if(window.location.href == 'https://smsaramarques.github.io/design/project-d.html'){
    window.location.href = 'https://smsaramarques.github.io/design/project-m.html?variable=aliencovenant';
  }

  if(window.project == 'redbull'){
    window.location.href = 'https://smsaramarques.github.io/design/project-d.html';
  }
});

$("#btnNextProject").click(function(){
  detectUrl();
  window.location.href = window.urlProject + '?variable=' + varProject[window.nrVarProject+1];

  if(window.project == "aliencovenant"){
    window.location.href = 'https://smsaramarques.github.io/design/project-d.html';
  }
});

function detectUrl(){
  var url = window.location.search.split(',')[0];
  var project = url ? url.split('=')[1] : window.location.search.slice(1);
  var nrVarProject;

  if (project == "beechild" || window.location.href == 'https://smsaramarques.github.io/design/project-d.html') { window.nrVarProject = 0;}
  if (project == "redbull") { window.nrVarProject = 1;}
  if (project == "reebok") { window.nrVarProject = 2;}
  if (project == "cocacola") { window.nrVarProject = 3;}
  if (project == "despicableme") { window.nrVarProject = 4;}
  if (project == "aliencovenant") { window.nrVarProject = 5;}

  var urlProject = 'https://smsaramarques.github.io/design/project-m.html';
  window.urlProject = urlProject;
  window.project = project;
}


// btn change mobile/ desktop img
$("#btnMobileProject").click(function(){
  $("#imgProjectResponsiveViewDesktop").attr("src","assets/images/projects/beechild/mobile.jpg");
  $("#btnMobileProject").addClass("active-button-desk-mobile");
  $("#btnDesktopProject").removeClass("active-button-desk-mobile");
});

$("#btnDesktopProject").click(function(){
  $("#imgProjectResponsiveViewDesktop").attr("src","assets/images/projects/beechild/desktop.jpg");
  $("#btnDesktopProject").addClass("active-button-desk-mobile");
  $("#btnMobileProject").removeClass("active-button-desk-mobile");
});

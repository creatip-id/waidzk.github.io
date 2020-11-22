$(document).ready(function(){
  $('.listNav a').click(function(){
    $('a').removeClass("active");

    $(this).addClass("active");
  });
});

$(document).ready(function(){
  $('.listNav a').click(function(){
    $('a').removeClass("active");

    $(this).addClass("active");
  });
});


// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var nav = btnTarget.dataset.nav;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + nav).classList.add("active");

   btnTarget.classList.add("active");
}

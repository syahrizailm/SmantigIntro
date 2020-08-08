element = document.getElementById("foto");
element.addEventListener("mouseover", function(){
  element.style.opacity=0.5;
});
element.addEventListener("mouseout", function(){
  element.style.opacity=1;
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
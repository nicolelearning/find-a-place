var locationclicked = sessionStorage.getItem("city");
var render = true;

//USER INTERFACE
$(document).ready(function(){
  var check = sessionStorage.getItem("filter");
  console.log(locationclicked);
  document.getElementsByClassName('placeweare')[0].textContent = locationclicked;
  document.getElementById('filtertext').textContent = ":"+check;
  $("#"+check).css({
    "background" : "#dbdbdb",
  });
});

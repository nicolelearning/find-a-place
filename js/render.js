var locationclicked = sessionStorage.getItem("city");
var render = true

//USER INTERFACE
$(document).ready(function(){
  console.log(locationclicked);
  if(render === true)
  {
    $(".filtersidebar").show();
  }
  else
  {
    $(".filtersidebar").hide();
  }
  document.getElementsByClassName('placeweare')[0].textContent = locationclicked;
  $(".hidethemapside").click(function(){
    if(render === true)
    {
      $(".filtersidebar").hide();
      render = false
    }
    else
    {
      $(".filtersidebar").show();
      render = true;
    }
  });
});

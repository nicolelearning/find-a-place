//businna
var slideimages = [
  "https://media.nature.com/w1172/magazine-assets/d41586-017-08492-y/d41586-017-08492-y_15320844.jpg",
  "https://www.standardmedia.co.ke/images/friday/thumb_lqto7hyjun9hezsfkn5aa2e281a314f.jpg",
  "https://2.bp.blogspot.com/-T0bnMWIN-gw/WcOlyaHdjOI/AAAAAAAAAug/rx2ZA_xwpdAu5sxnhr9Uyl-3eStcjgA6wCLcBGAs/s1600/ihub-room.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",
];
var placenames = [
  "sun",
  "mtkenya",
  "ihub",
  "longonot",
];
var countrender = false;
var start = 0;
var count = slideimages.length;
var actuallnum = count - 1;
setInterval(function(){
  if(start === actuallnum || start > actuallnum)
  {
    start = 0;
  }
  else
  {
    start = start + 1;
  }
},3000);

//function for saving the click


//user interface
$(document).ready(function(){
  setInterval(function(){
    document.getElementsByClassName("actuallimg")[0].setAttribute("src" , slideimages[start]);
    document.getElementsByClassName("name")[0].textContent = placenames[start];
  },2000);
  $(".sidebarblock").hide();
  $("#navbarbtnlocal").on("click",function(){
    $(".sidebarblock").show();
    //render Locations
    var locations = ["Parklands","Town","Westlands","Mombasa Rd","Thika Rd"];
    if(countrender === false)
    {
      locations.forEach(function(location){
        var renderhere = document.getElementsByClassName("innersidebar")[0];
        renderhere.innerHTML += "<div class='sidebarbtns'>"+
                                    "<p>"+location+"</p>"+
                                "</div>";
      });
      countrender = true;
    }
    else
    {
      alert("already rendered elements");
    }
  });
});

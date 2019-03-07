//businna
//adventure
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
//Art
var artImages = [  "https://media.nature.com/w1172/magazine-assets/d41586-017-08492-y/d41586-017-08492-y_15320844.jpg",
  "https://www.standardmedia.co.ke/images/friday/thumb_lqto7hyjun9hezsfkn5aa2e281a314f.jpg",
  "https://2.bp.blogspot.com/-T0bnMWIN-gw/WcOlyaHdjOI/AAAAAAAAAug/rx2ZA_xwpdAu5sxnhr9Uyl-3eStcjgA6wCLcBGAs/s1600/ihub-room.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",];
var artplacenames= ["sun",
"mtkenya",
"ihub",
"longonot",];

//Eateries
var eateries = [  "https://media.nature.com/w1172/magazine-assets/d41586-017-08492-y/d41586-017-08492-y_15320844.jpg",
  "https://www.standardmedia.co.ke/images/friday/thumb_lqto7hyjun9hezsfkn5aa2e281a314f.jpg",
  "https://2.bp.blogspot.com/-T0bnMWIN-gw/WcOlyaHdjOI/AAAAAAAAAug/rx2ZA_xwpdAu5sxnhr9Uyl-3eStcjgA6wCLcBGAs/s1600/ihub-room.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",];
var eateriesplacenames= ["sun",
"mtkenya",
"ihub",
"longonot",];


//History
var historyy = [
  "https://media.nature.com/w1172/magazine-assets/d41586-017-08492-y/d41586-017-08492-y_15320844.jpg",
  "https://www.standardmedia.co.ke/images/friday/thumb_lqto7hyjun9hezsfkn5aa2e281a314f.jpg",
  "https://2.bp.blogspot.com/-T0bnMWIN-gw/WcOlyaHdjOI/AAAAAAAAAug/rx2ZA_xwpdAu5sxnhr9Uyl-3eStcjgA6wCLcBGAs/s1600/ihub-room.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",
];
var historyplacenames = ["sun",
"mtkenya",
"ihub",
"longonot",];

//Gaming
var gaming = [  "https://media.nature.com/w1172/magazine-assets/d41586-017-08492-y/d41586-017-08492-y_15320844.jpg",
  "https://www.standardmedia.co.ke/images/friday/thumb_lqto7hyjun9hezsfkn5aa2e281a314f.jpg",
  "https://2.bp.blogspot.com/-T0bnMWIN-gw/WcOlyaHdjOI/AAAAAAAAAug/rx2ZA_xwpdAu5sxnhr9Uyl-3eStcjgA6wCLcBGAs/s1600/ihub-room.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",];
var gamingplacenames = ["sun",
"mtkenya",
"ihub",
"longonot",];


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
var save = (iddata) => {
    sessionStorage.setItem("city",iddata);
};
//user interface
$(document).ready(function(){
  setInterval(function(){
    //ADVENTURE
    document.getElementsByClassName("actuallimg")[0].setAttribute("src" , slideimages[start]);
    document.getElementsByClassName("name")[0].textContent = "Adventure :"+placenames[start];
    //ART
    document.getElementById('artactuallimg').setAttribute("src" , artImages[start]);
    document.getElementById('artname').textContent = "Art :"+artplacenames[start];
    //EATERIES
    document.getElementById('eateriesactuallimg').setAttribute("src" , eateries[start]);
    document.getElementById('eateriesname').textContent = "Eateries :"+eateriesplacenames[start];
    //HISTORY
    document.getElementById('historyactuallimg').setAttribute("src" , historyy[start]);
    document.getElementById('historyname').textContent = "History :"+historyplacenames[start];
    //GAMING
    document.getElementById('gamingactuallimg').setAttribute("src" , gaming[start]);
    document.getElementById('gamingname').textContent = "Gaming :"+gamingplacenames[start];
  },2000);
  $(".sidebarblock").hide();
  $("#navbarbtnlocal").on("click",function(){
    $(".sidebarblock").show();
    //render Locations
    if(countrender === false)
    {
      /*
      locations.forEach(function(location){
        //location is an array
        var renderhere = document.getElementsByClassName("innersidebar")[0];
        renderhere.innerHTML += "<div class='sidebarbtns' onclick='session(locatione)'>"+
                                    "<p>"+location+"</p>"+
                                "</div>";
      });
      */
      countrender = true;
    }
    else
    {
      $(".sidebarblock").hide();
      countrender = false;
    }
  });
  $("#Parklands").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
  $("#Town").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
  $("#Westlands").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
  $("#Mombassa").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
  $("#Embakassi").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
  $("#Karen").on("click",function(){
    var id = $(this).attr("id");
    save(id);
  });
});

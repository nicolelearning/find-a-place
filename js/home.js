//businna
//adventure
var slideimages = [
  "https://eatout2.scdn5.secure.raxcdn.com/images/restaurant_gallery/6054-728-1524494338.jpg",
  "https://hangout.co.ke/wp-content/uploads/2014/05/48126_615645555115832_556441404_n.jpg",
  "https://naibuzz.com/wp-content/uploads/2016/07/Cmv79IvWIAA5Pyh.jpg",
  "https://cdn.shopify.com/s/files/1/0709/9055/files/blog_alpine_initiatives_090701_3_low.jpg?3844080310051031636",
];
var placenames = [
  " Restaurants",
  " Art",
  " Gaming",
  " Wildlife",
];
//Art
var artImages = [  "https://hangout.co.ke/wp-content/uploads/2014/05/48126_615645555115832_556441404_n.jpg",
  "https://3dwnh01icn0h133s00sokwo1-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-15-at-10.08.21-AM.jpg",
  "https://i2.wp.com/www.momoafrica.com/wp-content/uploads/2017/06/Galerie-El-Marsa.jpg?resize=1320%2C880&ssl=1",
  "http://www.malindikenya.net/images/uploads/articoli/1411_l.jpg",];
var artplacenames= [
" Art gallery in Nairobi",
" Sarit center art fair",
" Banana hill ",
" Osteria in malindi"];

//Eateries
var eateries = [  "https://eatout2.scdn5.secure.raxcdn.com/images/restaurant_gallery/6054-728-1524494338.jpg",
  "http://www.travelstart.co.ke/blog/wp-content/uploads/2014/05/Tamambo-Blixen.jpg",
  "http://www.travelstart.co.ke/blog/wp-content/uploads/2014/05/Seven-SeaFood-Restaurant.jpg",
  "http://www.travelstart.co.ke/blog/wp-content/uploads/2014/05/Asmara-Restaurant.jpg",];
var eateriesplacenames= ["Baluba restaurant westlands",
" Tamambo blixen, Karen",
" Seven seafood",
"Asmara, westlands",];


//History
var historyy = [
  "http://s.embark.org/0.9.0/media/820x400/Kenya/images/Mombasa/fort-jesus-mombasa-kenya.jpg",
  "http://www.magicalkenya.com/wp-content/uploads/2014/08/gederuinsimg1.jpg",
  "https://africanahgirl.files.wordpress.com/2015/09/image8.jpg",
  "https://i.ytimg.com/vi/eoEVq9M30R0/maxresdefault.jpg",
];
var historyplacenames = [" Fort Jesus, Mombasa",
" Gedi ruins",
" KICC building, Nairobi",
" The longonot",];

//Gaming
var gaming = [  "https://naibuzz.com/wp-content/uploads/2016/07/Cmv79IvWIAA5Pyh.jpg",
  "https://www.sde.co.ke/sdemedia/sdeimages/friday/gdohkankhc8e2sh5599ff3a081d8f.jpg",
  "https://www.hapakenya.com/wp-content/uploads/2013/05/Call-of-Duty.jpg",
  "https://www.sde.co.ke/sdemedia/sdeimages/friday/xylmxin5fm29j599ff422e9e09.jpg",];
var gamingplacenames = [
" Trics gaming lounge, Nairobi",
" Gaming masters lounge",
" Call of duty",
" Game masters lounge, Nairobi",];


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

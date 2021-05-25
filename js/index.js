// Creating CSS selector from Id and Class
let hamSection = document.getElementById('hamSection');
let banner = document.getElementById('banner');
let verMenu = document.getElementById('verMenu');
let verMenuCross = document.getElementById('verMenuCross');
let semiBanner = document.getElementById('semiBanner');
let smallBanner = document.getElementById('smallBanner');
let imgContainer = document.getElementById('imgContainer');
let searchMenu = document.getElementById('searchMenu');
let bannerBtn = document.getElementById('bannerBtn');
let imgSize = document.getElementById('imgSize');


// When you click on the hamburger section of the vertical menubar
    hamSection.addEventListener('click',function(){
        hamSection.style.display = "none";
        banner.style.width = "80vw";
        verMenu.style.cssText = 'display:block;width:20vw;';
        semiBanner.style.margin = "0px auto";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        bannerBtn.style.display = "none";
        imgSize.style.left = "436px";

});

// When you click on the cancel(cross) section  of the vertical menu 
    verMenuCross.addEventListener('click',function(){
    hamSection.style.display="block";
    banner.style.width = "100vw";
    verMenu.style.display = "none";
    semiBanner.style.marginLeft = "170px";
    document.body.style.backgroundColor = "white";
    bannerBtn.style.display = "block";
    imgSize.style.left = "278px";

});

// javascript for auto image change

function secondImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban2.png";
}
function thirdImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban3.png";
}
function fourImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban4.png";
}
function fiveImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban5.png";
}
function sixImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban6.png";
}
function firstImg(){
    let imgSize = document.getElementById('imgSize').src = "./img/ban1.png";
}

setInterval(secondImg,7000);
setInterval(thirdImg,14000);
setInterval(fourImg,21000);
setInterval(fiveImg,28000);
setInterval(sixImg,35000);
setInterval(firstImg,42000);

// let arrowRight = document.getElementById('arrowRight');
// arrowRight.addEventListener('click',()=>{
//     arrowRight.src = "./img/ban4.png";
//     console.log("done");
// });













  
  
  





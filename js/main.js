// AOS
  AOS.init();

// HEADER
let mainUbication = window.pageYOffset;
window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset);
    let actualMovement = window.pageYOffset;
    if(mainUbication >= actualMovement){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    mainUbication = actualMovement;
});

// MENU
let headerLinks = document.querySelectorAll(".header-links")[0];
let switcher = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(switcher){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        switcher = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        switcher = true;
    }
    headerLinks.classList.toggle("menu-two");
});
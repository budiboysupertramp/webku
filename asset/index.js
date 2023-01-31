// toggle menu
let hide = true

//function es7 diutamakan
const showForm = ()=>{

    //mengambil elemen yang ada di html
    const togleMenu = document.getElementById('sectionMenu')

    // jika kondisi benar tersembunyi maka akan tampil
    if(hide === true){
        togleMenu.style.transform = 'translateX(0)'
        hide = false //peubah status show
    }else if(hide === false){
        // bila mana status muncul maka akan tersembunyi 
        togleMenu.style.transform = 'translateX(-330px)' 
        hide = true
    }

}
// end toggle menu



let welcome = document.getElementById('img-1');
let teksTo = document.getElementById('img-2');
let myWebsite = document.getElementById('img-3');
let imgCircle = document.getElementById('imgCircle');
let getSectionNames = document.querySelector('.myProfile');
let redCircleright = document.getElementById('redCircleright');
let wndwLeft = document.getElementById('window-left');

// let redCircleoutline = document.getElementById('redCircleoutline')


window.addEventListener('scroll', () => {

    let value = window.scrollY;

    welcome.style.marginLeft = value * -0.9 + 'px';
    teksTo.style.marginLeft = value * 4 + 'px';
    myWebsite.style.marginTop = value * -1 + 'px';
    imgCircle.style.bottom = value * -0.7 + 'px';
    redCircleright.style.marginRight = value * 1.5  + "px";
    wndwLeft.style.marginRight = value * 0.2 + "px";
    // wndwLeft.style.zIndex = "-10";
 

    if (window.scrollY >= (getSectionNames.offsetTop/2 + getSectionNames.offsetHeight/2)) {
        imgCircle.style.display = "none" ;

    } else {
        imgCircle.style.display = "flex" ;
     
    }
})



// Header
window.addEventListener("scroll", function() {
    const getSectionName = document.getElementById("myProfiles");
    const navbar = document.getElementById("header-top");
    console.log("jkjk");

    if (window.scrollY >= (getSectionName.offsetTop/2 + getSectionName.offsetHeight)) {
        navbar.classList.add('navbar-fixed');

        // logoSite.src = "./assets/img/logo-2.png"
    } else {
        navbar.classList.remove('navbar-fixed');
        // logoSite.src = "./assets/img/logo-one.png"
    }
});


// Header
window.addEventListener("scroll", function() {
    const getSectionNameSecond = this.document.getElementById('experience')
    const navbars = document.getElementById("header-top");


    if (window.scrollY >= (getSectionNameSecond.offsetTop + getSectionNameSecond.offsetHeight)) {
        navbars.classList.add('navbar-yellow');

        // logoSite.src = "./assets/img/logo-2.png"
    } else {
        navbars.classList.remove('navbar-yellow');
        // logoSite.src = "./assets/img/logo-one.png"
    }
});



// find us

window.addEventListener("scroll", function() {
    const getSectionNameSecond = this.document.getElementById('findUs')
    const find = document.getElementById("header-top");


    if (window.scrollY >= (getSectionNameSecond.offsetTop+ getSectionNameSecond.offsetHeight)) {
        find.classList.add('navbar-find');

        // logoSite.src = "./assets/img/logo-2.png"
    } else {
        find.classList.remove('navbar-find');
        // logoSite.src = "./assets/img/logo-one.png"
    }
});

// end find us




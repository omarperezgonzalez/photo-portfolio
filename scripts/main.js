const navIcon = document.querySelector('.nav--icon');
const navHome = document.querySelector('#home');
const navAbout = document.querySelector('#about');
const navWork = document.querySelector('#work');

let lenis;

//NEW CODE
const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    runLenis();

    runSetup();

    runNavigation();

    runAnimation();
};

const runLenis = () => {
    lenis = new Lenis({
        infinite: false,
    });
    function onRaf(time) {
        lenis.raf(time);
        requestAnimationFrame(onRaf);
    }
    requestAnimationFrame(onRaf);
};

const runSetup = () => {
    gsap.set(".navbar--page", {x:window.innerWidth});

    navIcon.addEventListener('mouseenter', () =>{
        if(navIcon.classList.contains('open')){  
            gsap.to(".nav--icon", {rotation : 135, duration: .2});
        } else{
            gsap.to(".nav--icon", {rotation : 90, duration: .2});
        }
    });

    navIcon.addEventListener('mouseleave', () =>{
        if(navIcon.classList.contains('open')){
            gsap.to(".nav--icon", {rotation : 45, duration: .2});
        } else{
            gsap.to(".nav--icon", {rotation : 0, duration: .2});
        }
    });

    navIcon.addEventListener('click', () =>{
        toggleMenu();
    });
}

const toggleMenu = () => {
    if(navIcon.classList.contains('open')){
        navIcon.classList.remove('open');
        //About image animation on scrolling
        gsap.to(".navbar--page", {x:window.innerWidth});
        gsap.to(".nav--icon", {rotation : 0, duration: .2});
        gsap.to(".navbar", {backgroundColor : "#0F0F0F", duration: .2});
        gsap.to(".name--tag--a", {color : "#DE5912", duration: .2});
        gsap.to(".nav--icon", {color : "#DE5912", duration: .2});
    } else{
        navIcon.classList.add('open');
        gsap.to(".navbar--page", {x:0});
        gsap.to(".nav--icon", {rotation : 45, duration: .2});
        gsap.to(".navbar", {backgroundColor : "#DE5912", duration: .2});
        gsap.to(".name--tag--a", {color : "#0F0F0F", duration: .2});
        gsap.to(".nav--icon", {color : "#0F0F0F", duration: .2});
    }
};

const runNavigation = () => {
    const urlString = window.location.href;
    const urlSplit = urlString.split('/').pop().split('.')[0];
    console.log(urlSplit);

    navHome.addEventListener('click', () =>{
        if(urlSplit === 'index'){
            toggleMenu();
            lenis.scrollTo('top', {duration: 5});
        } else{
            window.location.href = 'index.html';
        }
    });

    navAbout.addEventListener('click', () =>{
        if(urlSplit === 'about'){
            toggleMenu();
        } else{
            window.location.href = 'about.html';
        }
    });

    navWork.addEventListener('click', () =>{
        if(urlSplit === 'work'){
            toggleMenu();
        } else{
            window.location.href = 'work.html';
        }
    });
};

const runAnimation = () => {
    gsap.from('#begin', {y:window.innerHeight/5, opacity: 0})
};

document.addEventListener("DOMContentLoaded", init);
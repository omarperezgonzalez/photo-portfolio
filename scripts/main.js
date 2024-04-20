const navIcon = document.querySelector('.nav--icon');

//NEW CODE
const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    runLenis();

    runBarba();

    runSetup();
};

const runLenis = () => {
    const lenis = new Lenis({
        infinite: false,
    });
    function onRaf(time) {
        lenis.raf(time);
        requestAnimationFrame(onRaf);
    }
    requestAnimationFrame(onRaf);
};

const runBarba = () => {
    barba.init({
    transitions: [{
      name: 'opacity-transition',
      beforeLeave() {
        return toggleMenu();
      },
      leave: (data) => {
        return new Promise(resolve => {
            gsap.to(data.current.container, {
                y: window.innerHeight/5,
                duration: 1,
                opacity: 0,
                onComplete: () => { resolve(); },
            });
        });
      },
      enter: (data) => {
        gsap.from(data.next.container, {
            y: window.innerHeight/5,
            duration: 1,
            opacity: 0
        });
      },
    }],
  });
}

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
        gsap.to(".name--tag", {color : "#DE5912", duration: .2});
        gsap.to(".nav--icon", {color : "#DE5912", duration: .2});
    } else{
        navIcon.classList.add('open');
        gsap.to(".navbar--page", {x:0});
        gsap.to(".nav--icon", {rotation : 45, duration: .2});
        gsap.to(".navbar", {backgroundColor : "#DE5912", duration: .2});
        gsap.to(".name--tag", {color : "#0F0F0F", duration: .2});
        gsap.to(".nav--icon", {color : "#0F0F0F", duration: .2});
    }
};


document.addEventListener("DOMContentLoaded", init);
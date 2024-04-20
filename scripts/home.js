let tlIntroImages;

const runAnimationHome = () => {
     //Home image animation on scrolling
    tlIntroImages = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top", // Animation starts when the top of the container hits the top of the viewport
            end: "bottom top", // Animation ends when the bottom of the container hits the top of the viewport
            scrub: true, // Smoothly animates the changes
            //markers: true // For debugging, can be removed
            

        }
    });
    
    // Define individual tweens for each image
    tlIntroImages.to(".img--home--1", {
        y: '-15vw',
    });
    tlIntroImages.to(".img--home--2", {
        y: '-15vw',
    }, 0); // Start at the beginning of the timeline (index 0)
    tlIntroImages.to(".img--home--3", {
        y: '-30vw',
    }, 0);
    tlIntroImages.to(".img--home--4", {
        y: '-5vw',
    }, 0);
    tlIntroImages.to(".header--container", {
        y: '15vw',
    }, 0);


     //Slider image animation on scrolling
     tlSlider = gsap.timeline({
        scrollTrigger: {
            trigger: ".slider",
            start: "top top", // Animation starts when the top of the container hits the top of the viewport
            end: "+=7000", // Animation ends when the bottom of the container hits the top of the viewport
            scrub: true, // Smoothly animates the changes
            //markers: true, // For debugging, can be removed
            pin: true,
            snap: {snapTo: 1, duration: 15, delay: 0.5, ease: 'none'},
        }
    });
    
    // Define individual tweens for each image
    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "2I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "2I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/2.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/2.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Morelia",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2021]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "2I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "2I-E");


    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "3I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "3I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/3.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/3.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Saltillo",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2021]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "3I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "3I-E");


    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "4I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "4I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/4.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/4.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Monterrey",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2024]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "4I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "4I-E");


    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "5I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "5I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/5.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/5.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Monterrey",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2022]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "5I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "5I-E");


    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "6I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "6I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/6.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/6.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Saltillo",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2021]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "6I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "6I-E");


    //Image---------------------------------------------------------------------------
    tlSlider.to(".slider--image--holder", {
        scale: 0,
        opacity: 0,
    }, "7I-S");
    tlSlider.to(".slider", {
        y:-window.innerHeight,
        opacity: 0,
    }, "7I-S");
    tlSlider.set(".slider--image--holder", { attr: { src: "/src/img/slider/7.JPG" } });
    tlSlider.set(".slider--bg", {
        css:{backgroundImage:'url(/src/img/slider/7.jpg)'},  
    });
    tlSlider.set("#pictureText", {
        text:"Saltillo",  
    });
    tlSlider.set("#pictureDate", {
        text:"[2021]",  
    });
    tlSlider.to(".slider", {
        y:0,
        opacity: 1,
    }, "7I-E");
    tlSlider.to(".slider--image--holder", {
        scale: 1,
        opacity: 1,
          
    }, "7I-E");
};

runAnimationHome();

barba.hooks.after(({next}) => {
    if(next.namespace === "home") runAnimationHome();
});

barba.hooks.before(() => {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach( trigger => {			
      trigger.kill();
    });
    document.window.scrollTo(0,0);
});
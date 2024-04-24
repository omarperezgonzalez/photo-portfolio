const datesPlaces = [
    {date: '[2021]',place: 'Lago de Cuitzeo'},
    {date: '[2021]',place: 'Morelia'},
    {date: '[2021]',place: 'Saltillo'},
    {date: '[2024]',place: 'Monterrey'},
    {date: '[2022]',place: 'Monterrey'},
    {date: '[2021]',place: 'Saltillo'},
    {date: '[2021]',place: 'Saltillo'},
]

const runLandingAnimation = () => {
     //Home image animation on scrolling
     const tlIntroImages = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: 0, // Animation starts when the top of the container hits the top of the viewport
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
};

const runAnimationHomeDesktop = () => {
     //Slider image animation on scrolling
    const tlSlider = gsap.timeline({
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
        text:datesPlaces[1].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[1].date,  
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
        text:datesPlaces[2].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[2].date,  
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
        text:datesPlaces[3].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[3].date,  
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
        text:datesPlaces[4].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[4].date,  
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
        text:datesPlaces[5].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[5].date,  
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
        text:datesPlaces[6].place,  
    });
    tlSlider.set("#pictureDate", {
        text:datesPlaces[6].date,  
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

const runAnimationHomeMobile = () => {
    let imgSourceHome = 1;

    const tlHomeMobile = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
    });  
    

    tlHomeMobile.to(".slider", {opacity: 0, duration: .75, 
        onComplete: function(){
        if(imgSourceHome === 7){
            imgSourceHome = 1;
        }

        tlHomeMobile.set("#pictureText", {
            text:datesPlaces[imgSourceHome-1].place,  
        });
        tlHomeMobile.set("#pictureDate", {
            text:datesPlaces[imgSourceHome-1].date,  
        });
        gsap.set(".slider--image--holder", { attr: { src: `/src/img/slider/${imgSourceHome}.JPG`}});
        imgSourceHome++;
    },}, "s-init");


    tlHomeMobile.to(".slider", {opacity: 1, duration: .75, delay:.5}, "s-end");

};

runLandingAnimation();
console.log(window.innerWidth, window.innerHeight);
if(window.innerWidth > 770){
    runAnimationHomeDesktop();
} else{
    runAnimationHomeMobile();
}

ScrollTrigger.refresh();
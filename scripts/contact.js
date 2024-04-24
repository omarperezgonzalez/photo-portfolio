const initContact = () => {
    let imgSource = 2;

    const tlContact = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
    });  
    
    tlContact.to(".contact--image", {});

    tlContact.to(".contact--image", {height: 0,opacity: 0, duration: .75, 
        onComplete: function(){
        if(imgSource === 14){
            imgSource = 1;
        }

        gsap.set(".contact--image", { attr: { src: `/src/img/work/${imgSource}.JPG`}});
        imgSource++;
    },}, "c-init");

    tlContact.to(".contact--image", {height: 'auto',opacity: 1, duration: .75, delay:.5}, "c-end");

    tlContact.to(".contact--title", {color: "#DE725C", duration: .75}, "c-init");
    tlContact.to(".contact--title", {color: "#82370e", duration: .75, delay: 1}, "c-end");
};

document.addEventListener("DOMContentLoaded", initContact);
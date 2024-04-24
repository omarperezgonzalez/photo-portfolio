/*
Thanks to Oli from https://blog.olivierlarose.com/tutorials/floating-image-gallery
A total genius!
*/

const container = document.querySelector('.plane');
const xCenter = container.offsetWidth / 2;
const yCenter = container.offsetHeight / 2;

const targets = document.querySelectorAll('.plane--img');

//Code for the animation when the mouse moves
let requestAnimationFrameId = null;
let xForce = 0;
let yForce = 0;
const easing = 0.08;
const speed = 0.01;

document.addEventListener("mousemove", (e) => {
    const {movementX, movementY} = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId === null) requestAnimationFrameId = requestAnimationFrame(animate);

});

const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set('#plane1', {x: `+=${xForce}`, y: `+=${yForce}`});
    gsap.set('#plane2', {x: `+=${xForce * 0.75}`, y: `+=${yForce * 0.75}`});
    gsap.set('#plane3', {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`});

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;

    if(xForce !== 0 || yForce !== 0){
        requestAnimationFrame(animate);
    } else{
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
    }
};

//Code when clicking over an image
targets.forEach(function(target){
    const x = target.offsetLeft;
    const y = target.offsetTop;
    const cx = x + target.offsetWidth / 2;
    const cy = y + target.offsetHeight / 2;

    const tlWork = gsap.timeline({
        paused: true, reversed: true
    });

    tlWork.to(target, 0.6,{
        scaleX: 2.5,
        scaleY: 2.5,
        zIndex: 10,
        x: xCenter - cx,
        y: yCenter - cy*1.1
    }, 0);

    tlWork.to(target.parentElement, 0.6,{
        zIndex: 5,
    }, 0);

    tlWork.to(".dark--panel", 0.6,{
        zIndex: 4,
        opacity: 0.7
    }, 0);

    target.anim = tlWork;
    target.addEventListener("click", function(){
        this.anim.reversed() ? this.anim.play() : this.anim.reverse();
    });
});
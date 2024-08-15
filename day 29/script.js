//Function Animation:)
function animateContent(selector){
    selector.forEach((selector) => {
      gsap.to(selector, {
        y:30,
        duration:0.1,
        opacity:1,
        stagger:0.2,
        delay:0.2,
        ease:"power2.out",
    })  
    })
}
animateContent([
    ".home-content .text-content h5, .home-content .text-content h1,.home-content .text-content p,.home-content .text-content .search"
]);

//function ScrollTriggerEvent
function scrollTriggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

scrollTriggerAnimation(".travel .container", [".travel .container .box1", ".travel .box2", ".travel .box3"]);

scrollTriggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"])

scrollTriggerAnimation(".article", [".article .label", ".article .heading"])

/*Swipe Animation*/
function swipeAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger : triggerSelector,
            x:0,
            start:"top 50%",
            end:"top 100%",
            scrub: 1,
        },
    })
    boxSelectors.forEach((boxSelector) =>{
        timeline.to(boxSelector, {
            x:0,
            duration:1,
            opacity:1,
        })
    })
}
swipeAnimation(".destination",[".destination .heading",".destination .container-box .content"])

swipeAnimation(".article",[".article .last-article" ,".article .more-article .box"])

/* Gallery Animation*/
function galleryAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger : {
            trigger : triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });
    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y:0,
            opacity:1,
            duration: 1,
        });
    })
}
galleryAnimation(".destination .gallery",[".destination .gallery .box1",".destination .gallery .box2",".destination .gallery .box3",".destination .gallery .box4",".destination .gallery .box5"])


galleryAnimation(".featured .gallery",[".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback",[".feeback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4"])
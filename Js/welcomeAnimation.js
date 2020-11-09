let controller = new ScrollMagic.Controller();
    var scrollTimeline = new TimelineMax();
    scrollTimeline
        .set(".welcome_tent", {
            scale: 15,
            opacity: 1,
        })

        .set(".welcome_animation-scroll", {
            opacity: 1,
        })

        .set(".welcome_tent", {
            scale: 8,
            opacity: 1,
        })

        .set(".welcome_tent", {
            scale: 4,
            opacity: 1,
        })

        .to(".welcome_tent", 5, {
            scale: 0.7,
            opacity: 0.99,
        })

        .to(".welcome_animation-scroll", 3.5, {
            opacity: 0,
        });

let scrollImage = new ScrollMagic.Scene({
        triggerElement: ".welcome_animation",
        duration: "100%",
        triggerHook: 0
    })
    .addTo(controller)
    .setTween(scrollTimeline)
    .setPin(".welcome_animation")


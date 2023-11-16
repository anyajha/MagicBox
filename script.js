var rect = document.querySelector("#centre");

rect.addEventListener("mousemove", function (details) {
    var RL = rect.getBoundingClientRect();
    var val = details.clientX - RL.left;
    if (val < RL.width / 2) {
        var redcolor = gsap.utils.mapRange(0, RL.width / 2, 255, 0, val);

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4.easInOut,
        });

        
    } 
    else
     {
        var bluecolor = gsap.utils.mapRange(RL.width / 2, RL.width, 0, 255, val);

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4.easInOut,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "White",
    });
});
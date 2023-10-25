burgerr = document.querySelector('.burgerr')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burgerr.addEventListener('click', () => {
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

// ---------cursor js start-----
var main = document.querySelector(".body")
var crsr = document.querySelector(".cursor")
// var crsr2 = document.querySelector(".cursor2")
document.addEventListener("mousemove",
    function (dets) {
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";
        // crsr2.style.left = dets.x + "px";
        // crsr2.style.top = dets.y + "px";
    })

// ---------cursor js end-----


// locomotive js 



// -------------------------------

gsap.from("nav img, nav li, nav input, nav button",
    {
        y: -80,
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
        stagger: 0.1,
        scrub: 3
    })



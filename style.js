

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var time = gsap.timeline()

time.from("#nav",
{
  y:-50,
  duration:0.5,
  opacity:0,
})
time.from("#page1", {
  duration: 1.2,
  stagger: 0.1,
  opacity: 0,
  y: 350,
  // rotate:360,
  delay: 0.2,
  borderRadius: 70,
  scale: 0.05,
})
time.from("#page1 img,#side1 ,#side2 ,#side3,#side4", {
  opacity: 0,
  y: 340,
  duration: 1.3,
  // rotate:360,/

})
time.to("#side1 ,#side2", {
  x: -120,
  opacity: 0,
  duration: 0.3,
  scale: 1.3,
})
time.to("#side3 ,#side4", {
  x: 120,
  opacity: 0,
  duration: 0.3,
  scale: 1.3,

})
time.to("#page1 img", {
  width: "100%",
  height: "100%",
  duration: 0.7,

})
time.from("#page1 h1", {
  x: -120,
  opacity: 0,
  duration: 0.5,


})
time.from("#page1 h1 span", {
  x: 220,
  opacity: 0,
  duration: 0.5,


})

time.to("#page1>img", {
  scrollTrigger: {
    trigger: `#page1>img`,
    start: `top 85%`,
    end: `top 30%`,
    scroller: `#main`,
    // markers:true,
    scrub: .1,
  },
  scale: 1.2,
  color: `#fff`
})


time.from("#page2 h6,#page2 h2 ,#page2 h3, #page2 h4 ,#page2 h5", {
  y: 120,
  opacity: 0,
  stagger: 0.5,

  // rotate:40,
  duration: 1.5,
  scrollTrigger: {
    trigger: `#page2`,
    start: `top 50%`,
    end: `top 0%`,
    scroller: `#main`,
    // markers:true,
    scrub: 1,
  }

})
time.from("#center", {
  y: 100,
  height: "2%",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 70%",
    end: "top 0%",
    //  markers:true,
    scrub: 1,

  }

})

time.from("#black, #leftimg ,#leftimg2 , #rightimg ,#rightimg2", {
  y: 920,
  duration: 3,
  rotate: 40,
  scale: 1.3,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 0%",
    end: "top -50%",
    // markers:true,
    scrub: 3,
    pin: true,
  }
})
time.from("#one img, #two img,#three img", {
  opacity: 0.5,
  duration: 1.5,

  scale: 1.3,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top bottom",
    end: "bottom top",
    // markers:true,
    scrub: 1,

  }
})



time.from("#page5 img", {
  y: -12,
  x: 480,
  duration: 4,
  height: "55%",
  width: "30%",
  // delay:2,
  // scale:0.35,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 40%",
    end: "top 15%",
    // markers:true,
    scrub: 4,
    // pin:true,

  }
})

time.from("#page5 h1", {
  y: 230,
  delay: 1,
  opacity: 0,
  // rotate:40,
  scale: 0.5,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 0%",
    end: "top -30%",
    //  markers:true,
    scrub: 0.5,
    pin: true,

  }

})



var h2Data = document.querySelectorAll("#page6 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});
time.to("#page6 h2 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page6 ",
    scroller: "#main",
    // markers: true,
    start: "top 10%",
    end: "top -30%",
    scrub: 2,
    pin: true,
  },
});

time.from("#page7 img", {
  scale: 0.4,
  y: 40,
  x: 80,
  scrollTrigger: {
    trigger: "#page7 ",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 0%",
    scrub: 1,

  }
})


time.from("#page8 #boxx2", {
  y: 900,
  duration: 4,
  scrollTrigger: {
    trigger: "#page8 ",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -20%",
    scrub: 5,
    pin: true,

  }
})
time.from("#page8 video", {
  y: 900,
  duration: 1,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 1.5,


  }
})
time.from("#page9 h1,#page9 h2", {

  opacity: 0,
  duration: 1,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    // markers: true,
    start: "top 20%",
    end: " top -30%",
    scrub: 2,


  }

})
time.from("#page9 img", {
  x: 60,
  duration: 0.9,
  y: -20,
  opacity: 0,
  rotate: 30,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    // markers: true,
    start: "top 20%",
    end: " top -50%",
    scrub: 2,


  }
})

time.from("#footer h1", {
  x: -180,

  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 0.5,
  }



})
var menu = document.querySelector("#nav h3")
var full = document.querySelector("#full-scr")
var flag = 0
menu.addEventListener("click", function () {
  if (flag == 0) {

    menu.innerHTML = '<i class="ri-close-line"></i>'
    full.style.right = 0;
    flag = 1

  } else {
    menu.innerHTML = '<i class="ri-menu-4-line"></i> '
    full.style.right = "-100%"
    flag = 0
  }
})
const cursor = document.querySelector(".cursor");


var main = document.querySelector("#main")
document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top:" + e.pageY + "px; left:" + e.pageX + "px;")
})


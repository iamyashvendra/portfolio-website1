function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  
  // loco();
  
  var t1 = gsap.timeline();
  
  t1.to(".page2", {
    right: "0%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1  ",
      start: "top top",
      end: "top -100%",
      scrub: 1,
      // markers: true,
      pin: true,
      pinSpacing: false,
    },
  });
  
  t1.to(".page2-text> h1", {
    fontSize: "11vw",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top top",
      end: "top -30%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page2", {
    backgroundColor: "#000",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top -50%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page2,.page2-text > .first", {
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top -60%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page2-text > .second", {
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top -70%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page2-img", {
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top -90%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page3", {
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page3",
      start: "top 100%",
      scrub: 1,
      // markers: true,
      pin: true,
      pinSpacing: false,
    },
  });
  
  t1.from(".page4-box", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page4-box",
      start: "top 80%",
      end: "top 70%",
      scrub: 1,
      // markers: true,
    },
  });
  
  t1.to(".page5>img", {
    // opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5",
      start: "top 0%",
      scrub: 1,
      // markers: true,
      // pin: true,
      // pinSpacing: false,
    },
  });
  
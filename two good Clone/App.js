function locomotiveScroll (){

  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotiveScroll();

function videoConAnimation () {
    let videocon = document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");
    
    videocon.addEventListener("mouseenter",()=>{
      gsap.to(playbtn,{
        opacity : 1,
        scale : 1,
      });
    });
    
    videocon.addEventListener("mouseleave",()=>{
        gsap.to(playbtn,{
          opacity : 0,
          scale : 0,
        });
      });
    
      // videocon.addEventListener("mousemove",(dets)=>{
      //   gsap.to(playbtn,{
      //     left:dets.x-80,
      //     top:dets.y-90,
      //   });
      // });
    
};

videoConAnimation();

function loaderAnimation () {
    
gsap.from("#page1 h1",{
    y:100,
    delay:0.3,
    opacity:0,
    duration : 0.8,
    stagger:0.2,
});

// gsap.from("#page1 #video-container",{
//     scale:0.8,
//     delay:1.3,
//     opacity:0,
//     duration:0.5,
// });
}
loaderAnimation();

function loaderanimation2(){
  document.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
      left:dets.x,
      top: dets.y,
    })
  });

  // document.querySelector(".child").addEventListener("mouseenter",()=>{
//   gsap.to("#cursor",{
//     transform : 'translate(-50%,-50%) scale(1)'
//   })
// });

// document.querySelector(".child").addEventListener("mouseleave",()=>{
//   gsap.to("#cursor",{
//     transform : 'translate(-50%,-50%) scale(0)'
//   })
// })


document.querySelectorAll(".child").forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    gsap.to("#cursor",{
          transform : 'translate(-50%,-50%) scale(1)'
        })
  });
  elem.addEventListener("mouseleave",()=>{
    gsap.to("#cursor",{
          transform : 'translate(-50%,-50%) scale(0)'
        })
  });
  
  })



}

loaderanimation2();




//



// gsap.from(".footerlinks2 , .footerlogo , .footerlinks",{
//   y:-100,
//   opacity:0,
//   duration:0.9,
//   stagger:0.2,
//   scrollTrigger:{
//     trigger:".footerlinks2",
//     scroller:".main",
//     // markers:true,
//     start:"bottom 50%",
//     end:"top -5%",
    
//     // scrub:true
//   }
// });


gsap.from(".elm",{
  // y:-100,
  opacity:0,
  duration:0.9,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page2",
    scroller:".main",
    // markers:true,
    start:"top 50%",
    end:"top -5%",
    
    // scrub:true
  }
});

gsap.from(".child",{
  y: 100,
  opacity:0,
  duration:0.9,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page3",
    scroller:".main",
    // markers:true,
    start:"top 50%",
    end:"top -5%",
    
    // scrub:1
  }
  
});






gsap.to(".nav-logo svg",{
  transform:"translateY(-100%)",
  duration:5,
  delay:2,
})



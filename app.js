function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("subscribe").style.height = "100%";
   document.getElementById("myNav").style.opacity = "2";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("subscribe").style.height = "0%";
}




const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');


      navLinks.forEach((link, index) => {
              if(link.style.animation){
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
          }
      });

      burger.classList.toggle('toggle');

  });

 
}

navSlide();


  function videoconAnimation() {
    let videocon = document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x-85,
            top: dets.y-80,
            
        })
    })
}
videoconAnimation();

function loadingAnimation() {
  gsap.from("#page1 .header", {
      y: 100,
      delay:0.5,
      duration: 1.5,
      stagger: 0.3,
      opacity:0,

  })
// gsap.from("#video-container", {
//     scrollTrigger: {
//       trigger: "#video-container",
//       start: "top 80%", 
//       end: "bottom 20%", 
//       scrub: true, 
//     },
//     y: -100,
//     duration: 1
//   });
  gsap.from("#page1 #video-container", {
      y:100, 
      opacity: 0,
      delay:0.8,
      duration: 2.5,
      scale:0.9,
  });
  gsap.from("#page1 p", {
    y:100, 
    opacity: 0,
    delay:1.0,
    duration: 3.0,
    scale:0.9,
});


}
loadingAnimation();

function locomotiveAnimations() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimations();
function cursorAnimation() {
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        })
    })
    
    document.querySelectorAll("#page1").forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            const cursor = document.querySelector("#cursor");
            const bgColor = elem.getAttribute("data-color");
    
            gsap.to(cursor, {
                backgroundColor: bgColor,
                transform: 'translate(-50%,-50%) scale(1)'
            });
            
        });
        elem.addEventListener("mouseleave", function() {
            const cursor = document.querySelector("#cursor");
    
            gsap.to(cursor, {
                backgroundColor: 'transparent',
                transform: 'translate(-50%,-50%) scale(0)'
            });
        });
    })
}
cursorAnimation();
const blankCurtain = document.getElementById('blank-curtain');
const contentWrapper = document.getElementById('content-wrapper');
const revealButton = document.getElementById('reveal-button');

revealButton.addEventListener('click', () => {
  gsap.to(blankCurtain, {
    duration: 1,
    ease: 'power3.inOut',
    y: '100vh', // Slide curtain down
  });

  gsap.to(contentWrapper, {
    duration: 1,
    ease: 'power3.inOut',
    opacity: 1, // Fade in content
    delay: 0.5, // Delay to avoid overlap
  });
});



// gsap.registerPlugin(ScrollTrigger);
// let sections = gsap.utils.toArray(".slide");
    
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizontal-sliders",
//     pin: "#showcase",
//     pinSpacing: true,
//     scrub: 1,
//     end: "+=3000",
//   }
// });

// gsap.to('.next-block',{
//   backgroundColor:'tomato',
//   scrollTrigger:{
//     trigger:'.next-block',
//     pinnedContainer: "#showcase",
//     start:'top 50%',
//     toggleActions: 'play none reset none',
//   }
// })
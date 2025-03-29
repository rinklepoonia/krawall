  const menuBtn = document.getElementById('menuBtn');
        const menuSlide = document.getElementById('menulist');
        const closeIcon = document.getElementById('close-icon');
const menuText = document.getElementById('menu-text');
        const nav = document.querySelector('nav');
        menuBtn.addEventListener('click', () => {
            // Toggle the visibility of the menu slide
            if (menuSlide.classList.contains('hidden')) {
                menuSlide.classList.remove('hidden');
                setTimeout(() => {
                    menuSlide.classList.add('show');
                }, 10); // Small timeout to allow opacity transition to take effect
                menuText.textContent = 'Menu';
                closeIcon.classList.remove('hidden');
            } else {
                menuSlide.classList.remove('show');
                setTimeout(() => {
                    menuSlide.classList.add('hidden');
                    menuText.textContent = 'Menu';
                    closeIcon.classList.add('hidden');
                }, 500); // Delay hiding until after the fade-out transition
            }
        });
        // 

        function initHoverFillEffect() {
            const hoverTextElements = document.querySelectorAll('.hover-fill');
            hoverTextElements.forEach((element) => {
                element.addEventListener('mouseenter', () => {
                    gsap.to(element, {
                        backgroundPosition: '0% 0',
                        duration: 1,
                        ease: 'power1.inOut'
                    });
                });
                element.addEventListener('mouseleave', () => {
                    gsap.to(element, {
                        backgroundPosition: '100% 0',
                        duration: 1,
                        ease: 'power1.inOut'
                    });
                });
            });
        }
        document.addEventListener('DOMContentLoaded', initHoverFillEffect);


        //add-nav-bg-black
function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight) {
        nav.classList.add('bg-black', 'top-0');
    } else {
        nav.classList.remove('bg-black', 'top-0');
    }
}
window.addEventListener('scroll', handleScroll);



gsap.registerPlugin(ScrollTrigger);
  // Pin the video section
 gsap.to("#video-section", {
        scrollTrigger: {
            trigger: "#video-section",
            start: "top top",
            end: () => "+=" + document.querySelector("#brand-neu").offsetHeight,
            pin: true, 
            scrub: true,
            pinSpacing: false
        }
    });

    // Pin the brand-neu section and allow kernkompetenz to scroll over it
  gsap.to("#brand-neu", {
            scrollTrigger: {
                trigger: "#brand-neu",
                start: "500", 
                end: () => "+=" + document.querySelector("#kernkompetenz").offsetHeight, 
                pin: true,    
                scrub: true,
                pinSpacing: false 
            }
 });
        
    // Pin the left-right-images
    gsap.to("#left-right-images", {
        scrollTrigger: {
            trigger: "#left-right-images",
            start: "-250",
            endTrigger: "#sitting-with-balloon",
             end: "top top",
            pin: true, 
            scrub: true, 
            pinSpacing: false 
        }
    });

// sitting-with-balloon 
      gsap.to("#sitting-with-balloon", {
        scrollTrigger: {
            trigger: "#sitting-with-balloon",
            start: "-100",
             endTrigger: "#Wir-machen",
             end: "top top",
            pin: true, 
            scrub: true, 
            pinSpacing: false 
        }
      });
    
//  pin-text
      gsap.to("#pin-text", {
        scrollTrigger: {
            trigger: "#pin-text",
            start: "top top",
            endTrigger: "#background-bright-aqua",
            end: "bottom top",
            pin: true, 
            scrub: true, 
            pinSpacing: false 
        }
      });
      //  berlin-train
      gsap.to("#background-bright-aqua", {
        scrollTrigger: {
            trigger: "#background-bright-aqua",
            start: "top top",
            endTrigger: "#berlin-train",
              end: "bottom top",
            pin: true, 
            scrub: true, 
            pinSpacing: false 
        }
      });
    //   cycle
        gsap.to("#berlin-train", {
        scrollTrigger: {
            trigger: "#berlin-train",
            start: "top top",
            endTrigger: "#cycle",
              end: "top top",
            pin: true, 
            scrub: true, 
            pinSpacing: false 
        }
        });
//   boxes
    //   gsap.to("#cycle", {
    //     scrollTrigger: {
    //         trigger: "#cycle",
    //         start: "top top",
    //         endTrigger: "#boxes",
    //           end: "top top",
    //         pin: true, 
    //         scrub: true, 
    //         pinSpacing: false 
    //     }
    //   });
    //     gsap.to("#boxes", {
    //     scrollTrigger: {
    //         trigger: "#boxes",
    //         start: "top top",
    //         endTrigger: "#first-strip",
    //           end: "bottom top",
    //         pin: true, 
    //         scrub: true, 
    //         pinSpacing: false 
    //     }
    //   });
        
// gsap.registerPlugin(ScrollTrigger)
//         const third = gsap.timeline()
//         console.log(third)
//         third.to("#first-strip", {
//             top: "150px",
//         }, "1");
//         third.to("#second-strip", {
//             top: "320px",
//         }, "2");
//         third.to("#third-strip", {
//             top: "380px",
//         }, "3");
//         third.to("#fourth-strip", {
//             top: "470px",
//         }, "4");
//         third.to("#fifth-strip", {
//             top: "510px",
//         }, "5");
//         third.to("#sixth-strip", {
//             bottom: "350px",
//         }, "6");
//         third.to("#diamond", {
//             top: 0,
//         }, "7");
//         third.to("#layer", {
//             top: 0,
//         }, "7");
//         ScrollTrigger.create({
//             trigger: "#logos",
//             start: "top  top",
//             end: "+=500%",
//             pin: true,
//             scrub: 1,
//             pinSpacing: false,
//             markers: true,
//             animation: third,
//         });
      
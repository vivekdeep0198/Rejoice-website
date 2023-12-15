
function cursoreffect(){
var Page1 = document.querySelector("#Page1");
var Cusor = document.querySelector("#cursor");

Page1.addEventListener("mousemove", function(vivek){
    // Cusor.style.left = vivek.x+"px"
    // Cusor.style.top = vivek.y+"px"
    // for smoothness
    gsap.to("#cursor",{
        x:vivek.x,
        y:vivek.y
    })
})
Page1.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        scale:1,
        opacity:1
    })
})
Page1.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        scale:0,
        opacity:0
    })
})
}
cursoreffect();

function page1Animation(){

}
page1Animation();

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function BoxswiperAnimation(){
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
}
BoxswiperAnimation();

const timeline = gsap.timeline()

function loaderAnimation(){
timeline.from("#loader h3",{
  x:40,
  opacity:0,
  duration:3,
  stagger: 0.1
})
timeline.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.1
})
timeline.to("#loader",{
  opacity:0,
  display:"none"
})
}
loaderAnimation();

timeline.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2,
  duration:0.5
})

timeline.from("#page3-top",{
  y:100,
  opacity:0,
  stagger:0.2,
  duration:0.5
})


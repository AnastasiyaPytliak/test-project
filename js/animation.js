import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export function animateHeader() {
  gsap.to(".header", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });
}

export function animateHero() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__title",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });
  
  tl.to(".hero__title h1", { y: 0, opacity: 1, duration: .7, ease: "power3.out" })
    .to(".hero__text", { y: 0, opacity: 1, duration: .7, ease: "power3.out" }, "-=0.3")
    .to(".hero__btns", { y: 0, opacity: 1, duration: .7, ease: "power3.out" }, "-=0.2");
}

export function animateOrder() {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const orderTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".order",
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
      orderTl
        .from(".order__title", { y: 50, opacity: 0, duration: 0.4, ease: "power3.out" })
        .from(".order__sub", { y: 50, opacity: 0, duration: 0.4, ease: "power3.out" }, ">0.2")
        .from(".order__steps", { y: 50, opacity: 0, duration: 0.4, ease: "power3.out" }, ">0.2")
        .from(".order__form", { y: 50, opacity: 0, duration: 0.4, ease: "power3.out" }, ">0.2");
    },
  });
}
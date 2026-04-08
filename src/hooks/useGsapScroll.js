import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll("[data-gsap]");

    elements.forEach((el) => {
      const animation = el.dataset.gsap || "fadeUp";

      const config = {
        fadeUp: { y: 60, opacity: 0 },
        fadeLeft: { x: -60, opacity: 0 },
        fadeRight: { x: 60, opacity: 0 },
        scaleIn: { scale: 0.8, opacity: 0 },
      };

      gsap.from(el, {
        ...config[animation],
        duration: options.duration || 1,
        ease: options.ease || "power3.out",
        scrollTrigger: {
          trigger: el,
          start: options.start || "top 85%",
          end: options.end || "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [ref, options]);
}

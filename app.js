const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
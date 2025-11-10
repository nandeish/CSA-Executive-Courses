// Netflix-style intro sequence
window.addEventListener("load", () => {
  const logos = document.querySelectorAll(".intro-logo");
  const hero = document.querySelector(".hero");
  const heroLogo = document.querySelector(".hero-logo");
  const buttons = document.querySelector(".button-group");

  // Sequentially reveal the 3 logos with longer, smoother animations
  logos.forEach((logo, i) => {
    gsap.to(logo, {
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: i * 1.2,
      ease: "power3.out"
    });
  });

  // Add a pause after logos appear before starting the transition
  setTimeout(() => {
    // Fade out logos, fade in hero section
    gsap.to(".intro", { 
      opacity: 0, 
      duration: 1.5,
      delay: 2, // Add 2 second pause after logos are shown
      onComplete: () => {
        document.querySelector(".intro").style.display = "none";
        hero.style.opacity = "1";
        
        // Stagger animate the text and buttons
        gsap.from("h1", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
        });
        
        gsap.from("h3", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "power3.out"
        });

        // Animate each button separately for better control
        gsap.from(".hero-btn", {
          y: 20,
          opacity: 0,
          duration: 1,
          delay: 1.3,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
    });
  }, logos.length * 1200 + 2000); // Adjusted for new logo timing (1.2s * 3) + 2s initial delay
});

// Parallax background effect
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".parallax-bg");
  const scrolled = window.scrollY;
  bg.style.transform = `translateY(${scrolled * 0.4}px)`;
});

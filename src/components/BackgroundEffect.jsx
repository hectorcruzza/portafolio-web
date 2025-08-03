import { useEffect } from "react";
import styles from "../styles/BackgroundEffect.module.css";

export default function BackgroundEffect() {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    const particleCount = 80;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = styles.particle;

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";
    };

    const animateParticle = (particle) => {
      resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        const moveX =
          parseFloat(particle.style.left) + (Math.random() * 20 - 10);
        const moveY = parseFloat(particle.style.top) - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY + window.scrollY;

      const particle = document.createElement("div");
      particle.className = styles.particle;

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}px`;
      particle.style.top = `${mouseY}px`;
      particle.style.opacity = "0.6";

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 100 - 50)}px`;
        particle.style.top = `${mouseY + (Math.random() * 100 - 50)}px`;
        particle.style.opacity = "0";

        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
    });
  }, []);

  return (
    <div className={styles.gradientBackground}>
      <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>
      <div className={styles.glow}></div>
      <div className={styles.gridOverlay}></div>
      <div className={styles.noiseOverlay}></div>
      <div id="particles-container" className={styles.particlesContainer}></div>
    </div>
  );
}

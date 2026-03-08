import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioAnimations(appRef, floatingCardRef) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav, .hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-copy > *', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.hero-panel', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.25,
      });

      gsap.to('.orb.orb-a', {
        yPercent: -12,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: 'sine.inOut',
      });

      gsap.to('.orb.orb-b', {
        yPercent: 10,
        xPercent: 8,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: 'sine.inOut',
      });

      const sections = gsap.utils.toArray('[data-reveal]');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from('.capability-card, .project-card, .metric-card, .process-card, .contact-card', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.content-shell',
          start: 'top 72%',
        },
      });

      gsap.from('.tilt-icon', {
        rotate: -18,
        scale: 0.84,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.6)',
        scrollTrigger: {
          trigger: '.capabilities-grid',
          start: 'top 80%',
        },
      });

      gsap.from('.section-title span', {
        opacity: 0,
        y: 28,
        stagger: 0.06,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 84%',
        },
      });

      const travelTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.app-shell',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      if (floatingCardRef?.current) {
        travelTimeline
          .to(floatingCardRef.current, {
            x: -340,
            y: 580,
            rotate: -12,
            scale: 0.82,
            ease: 'none',
          })
          .to(floatingCardRef.current, {
            x: 260,
            y: 1180,
            rotate: 8,
            scale: 1,
            ease: 'none',
          })
          .to(floatingCardRef.current, {
            x: -180,
            y: 1860,
            rotate: -6,
            scale: 0.88,
            ease: 'none',
          });
      }

      gsap.to('.panel-gradient', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }, appRef);

    return () => ctx.revert();
  }, [appRef, floatingCardRef]);
}
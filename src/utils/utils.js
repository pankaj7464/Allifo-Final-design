export const smoothScroll = (container, amount) => {
     const startTime = performance.now();
     const initialScroll = container.scrollLeft;
     const scrollDuration = 300; // Duration of the smooth scroll in milliseconds

     const animateScroll = (timestamp) => {
          const elapsedTime = timestamp - startTime;

          if (elapsedTime < scrollDuration) {
               const progress = elapsedTime / scrollDuration;
               container.scrollLeft = initialScroll + amount * progress;
               requestAnimationFrame(animateScroll);
          } else {
               container.scrollLeft += amount;
          }
     };

     requestAnimationFrame(animateScroll);
};
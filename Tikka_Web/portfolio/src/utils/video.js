// video.js
export default function video() {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach((card) => {
    const videoOverlay = card.querySelector('.video-overlay');
    const video = card.querySelector('video');
    const prevImg = card.querySelector('img');

    card.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
      videoOverlay.style.opacity = 1;
      prevImg.style.opacity = 0;
      video.style.opacity = 1; // Show the video element
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Rewind the video to the beginning
      videoOverlay.style.opacity = 0;
      prevImg.style.opacity = 1;
      video.style.opacity = 0; // Hide the video element
    });
  });
}

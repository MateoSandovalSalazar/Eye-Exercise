document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
      const pupil = eye.querySelector('.pupil');
      const eyeRect = eye.getBoundingClientRect();
      const eyeX = eyeRect.left + eyeRect.width / 2;
      const eyeY = eyeRect.top + eyeRect.height / 2;
      const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
      const pupilX = Math.cos(angle) * 25;
      const pupilY = Math.sin(angle) * 25;
      pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

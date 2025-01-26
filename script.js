document.querySelectorAll('.rose').forEach(rose => {
  rose.addEventListener('click', () => {
    // Remove previous rain of roses if any
    const existingRoses = document.querySelectorAll('.rose.rain');
    existingRoses.forEach(rainRose => rainRose.remove());

    // Get the message and display it
    const message = rose.getAttribute('data-message');
    const messageBox = document.getElementById('messageBox');
    messageBox.style.visibility = 'visible';  // Show the message box
    messageBox.innerHTML = message;

    // Enlarge the clicked rose and center it
    rose.classList.add('active');

    // Create the rain effect with randomized positions and speeds
    for (let i = 0; i < 50; i++) { // Number of roses falling
      const rainRose = document.createElement('div');
      rainRose.classList.add('rose', 'rain');
      rainRose.innerHTML = '🌹';

      // Randomize the horizontal position
      rainRose.style.left = `${Math.random() * 100}vw`; // Random horizontal position (full viewport width)

      // Randomize the speed of falling roses
      const duration = Math.random() * 2 + 2; // Random duration between 2s and 4s
      rainRose.style.animationDuration = `${duration}s`; // Set random speed

      // Append the rose to the body
      document.body.appendChild(rainRose);
    }

    // Hide the message box after 3 seconds
    setTimeout(() => {
      messageBox.style.visibility = 'hidden';
    }, 5000);
  });
});

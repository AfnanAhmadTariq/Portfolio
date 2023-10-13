const backgroundElement = document.querySelector('.background');
const typingTextElement = document.getElementById('typing-text');

const images = ['images/Top-Software-Developer-Skills-to-Learn-This-Year-for-Tech-Jobs-scaled.jpg', 'images/1696229244943.gif','images/1695842119816.gif'];
let currentImageIndex = 0;

const texts = ['I am a Developer.', 'I am a Gamer.', 'I am an Artist.' ,'I am a Game dev.', 'I am an Ethical Hacker.'];
let currentTextIndex = 0;

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imageUrl = images[currentImageIndex];
  backgroundElement.style.backgroundImage = `url(${imageUrl})`;
}

function typeEffect() {
  const currentText = texts[currentTextIndex];
  typingTextElement.textContent = '';

  let index = 0;
  const typingInterval = setInterval(() => {
    typingTextElement.textContent += currentText[index];
    index++;

    if (index >= currentText.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typeEffect();
      }, 2000); // Delay before typing the next text
    }
  }, 100); // Typing speed (milliseconds per character)
}

// Initial setup
changeBackgroundImage();
typeEffect();

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

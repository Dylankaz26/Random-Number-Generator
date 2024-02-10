const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.textContent = randomNumber;
    number.classList.remove('animated-number'); // Remove animation class
    void number.offsetWidth; // Trigger reflow
    number.classList.add('animated-number'); // Add animation class
};

console.log('The server is running and the page is working correctly');

generateBtn.addEventListener('click', randomNumberGenerator);

randomNumberGenerator();

let currentPlayer = 'circle';

const button1 = document.querySelector('.playing-field button:nth-child(1)');
const button2 = document.querySelector('.playing-field button:nth-child(2)');
const button3 = document.querySelector('.playing-field button:nth-child(3)');
const button4 = document.querySelector('.playing-field button:nth-child(4)');
const button5 = document.querySelector('.playing-field button:nth-child(5)');
const button6 = document.querySelector('.playing-field button:nth-child(6)');
const button7 = document.querySelector('.playing-field button:nth-child(7)');
const button8 = document.querySelector('.playing-field button:nth-child(8)');
const button9 = document.querySelector('.playing-field button:nth-child(9)');
const button10 = document.querySelector('.playing-field button:nth-child(10)');
const playingField = document.querySelector('.playing-field');
const player = document.querySelector('.player');

const handleButtonClick = (event) => {
  const button = event.target;

  if (currentPlayer === 'circle') {
    button.classList.add('board__field--circle');
    currentPlayer = 'cross';
  } else {
    button.classList.add('board__field--cross');
    currentPlayer = 'circle';
  }

  event.target.disabled = true;
};

button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);
button3.addEventListener('click', handleButtonClick);
button4.addEventListener('click', handleButtonClick);
button5.addEventListener('click', handleButtonClick);
button6.addEventListener('click', handleButtonClick);
button7.addEventListener('click', handleButtonClick);
button8.addEventListener('click', handleButtonClick);
button9.addEventListener('click', handleButtonClick);
button10.addEventListener('click', handleButtonClick);

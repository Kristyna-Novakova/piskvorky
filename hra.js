// import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

// let currentPlayer = 'circle';

// const buttonAll = document.querySelectorAll('.playing-field button');

// const playerIcon = document.querySelector('.player-icon');
// playerIcon.classList.add('circle');

// const handleButtonClick = (event) => {
//   const button = event.target;

//   if (currentPlayer === 'circle') {
//     button.classList.add('board__field--circle');
//     currentPlayer = 'cross';
//     playerIcon.classList.add('cross');
//     playerIcon.classList.remove('circle');
//   } else {
//     button.classList.add('board__field--cross');
//     currentPlayer = 'circle';
//     playerIcon.classList.add('circle');
//     playerIcon.classList.remove('cross');
//   }

//   event.target.disabled = true;

//   const board = Array.from(buttonAll).map((button) => {
//     if (button.classList.contains('board__field--circle')) {
//       return 'o';
//     } else if (button.classList.contains('board__field--cross')) {
//       return 'x';
//     } else {
//       return '_';
//     }
//   });
//   console.log(board);

//   const winner = findWinner(board);

//   if (winner === 'o') {
//     setTimeout(() => {
//       alert('Vyhrálo kolečko!');
//       location.reload();
//     }, 200);
//   } else if (winner === 'x') {
//     setTimeout(() => {
//       alert('Vyhrál křížek!');
//       location.reload();
//     }, 200);
//   } else if (winner === 'tie') {
//     setTimeout(() => {
//       alert('Hra skončila nerozhodně.');
//       location.reload();
//     }, 200);
//   }
// };

// buttonAll.forEach((btn) => {
//   btn.addEventListener('click', handleButtonClick);
// });

// // for (let i = 0; i < 10; i++) {
// //   buttonAll[i].addEventListener('click', handleButtonClick);
// // }

// // Funkce confirm
// const buttonRestart = document.querySelector('.button-restart');
// buttonRestart.addEventListener('click', (event) => {
//   const confirmed = confirm('Opravdu chcete začít znovu?');

//   if (confirmed === false) {
//     event.preventDefault();
//   }
// });

import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const buttonAll = document.querySelectorAll('.playing-field button');

const playerIcon = document.querySelector('.player-icon');
playerIcon.classList.add('circle');

const handleButtonClick = (event) => {
  const button = event.target;

  if (currentPlayer === 'circle') {
    button.classList.add('board__field--circle');
    currentPlayer = 'cross';
    playerIcon.classList.add('cross');
    playerIcon.classList.remove('circle');
  } else {
    button.classList.add('board__field--cross');
    currentPlayer = 'circle';
    playerIcon.classList.add('circle');
    playerIcon.classList.remove('cross');
  }

  event.target.disabled = true;

  const board = Array.from(buttonAll).map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });
  console.log(board);

  const winner = findWinner(board);

  if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 200);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek!');
      location.reload();
    }, 200);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }, 200);
  } else if (currentPlayer === 'cross') {
    fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board,
        player: 'x',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { x, y } = data.position;
        const index = x + y * 10; // Convert x and y to an index for a 10x10 board
        buttonAll[index].click(); // Simulate a click on the button corresponding to the suggested move
      });
  }
};

buttonAll.forEach((btn) => {
  btn.addEventListener('click', handleButtonClick);
});

// for (let i = 0; i < 10; i++) {
//   buttonAll[i].addEventListener('click', handleButtonClick);
// }

// Funkce confirm
const buttonRestart = document.querySelector('.button-restart');
buttonRestart.addEventListener('click', (event) => {
  const confirmed = confirm('Opravdu chcete začít znovu?');

  if (confirmed === false) {
    event.preventDefault();
  }
});

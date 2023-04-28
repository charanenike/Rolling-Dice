'use strict';

// Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

let scores = [0, 0];
let activePlayer = 0;
let playing = true;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
player0El.classList.add('.player--active');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    scores[activePlayer] += dice;
    document.querySelector(`.player--${activePlayer}`);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      document.getElementById(`score--${activePlayer}`).textContent = 30;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      player0El.classList.remove('player--active');
      player1El.classList.remove('player--active');
    } else if (dice !== 6) {
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle(`player--active`);
      player1El.classList.toggle(`player--active`);
    }
  }
});

btnNew.addEventListener('click', function () {
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
});

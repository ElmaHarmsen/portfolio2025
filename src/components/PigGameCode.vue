<script setup></script>

<template>
  <section class="section">
    <div class="container">
      <div class="code-item" id="reset-function">
        <h1>Initializing the Game Functionality</h1>
        <div class="container">
          <pre><code>const init = function () {
  // Points for both players
  scores = [0, 0]; // [player 0, player 1]
  currentScore = 0;
  activePlayer = 0; // First player = player 0

  // State variable for game is playing
  isPlaying = true;

  // Reset the total scores
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  // Reset the current scores
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  // Remove the dice
  diceElement.classList.add("hidden");

  // Remove player winner class
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");

  // Make player 0 the active player
  player0Element.classList.add("player--active");

  // Remove active player class on non-active player
  player1Element.classList.remove("player--active");
};
init();</code></pre>
        </div>
      </div>
      <div class="code-item" id="diceroll-function">
        <h1>Diceroll Functionality</h1>
        <div class="container">
          <pre><code>btnRoll.addEventListener("click", function () {
  // Only execute code if game playing = true
  if (isPlaying) {
    // 1. Generating random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;
    // Adjust the src imgage file name with the dice number

    // 3. Check for rolled 1: if true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice; // currentScore = currentScore + dice

      // Select current score dynamically based on ative player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switching to the next player
      switchPlayer();
    }
  }
});</code></pre>
        </div>
      </div>
      <div class="code-item" id="scoring-function">
        <h1>Scoring Functionality</h1>
        <div class="container">
          <pre><code>btnHold.addEventListener("click", function () {
  // Only execute code if game playing = true
  if (isPlaying) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    // scores[0] = scores[0] + currentScore

    // Display the accumulated score of the active player after hold
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // score--0

    // 2. Check if player score is >= 100
    if (scores[activePlayer] >= 100) {
      // a. Finish the game
      isPlaying = false;
      diceElement.classList.add("hidden");

      // Assign a player winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // Remove the player active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // b. Switch to the next player
      switchPlayer();
    }
  }
});</code></pre>
        </div>
      </div>
      <div class="code-item" id="switchplayer-function">
        <h1>Switch Player Functionality</h1>
        <div class="container">
          <pre><code>const switchPlayer = function () {
  // Switching to the next player
  // Reset the score back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Reassigning active player based on 0 and 1
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Adding/Removing active player class based on current state
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  grid-column-start: 4;
  grid-column-end: 14;
  width: 100%;
  padding-top: 0 !important;
  padding-bottom: 10rem;

  .container {
    display: flex;
    flex-flow: column nowrap;

    .code-item {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 1rem;
      padding-top: 10rem;

      .container {
        background-color: var(--clr-white);
        padding: 1rem;
        width: calc(100% + 2rem);
        margin: 0 -1rem;
        border-radius: 3px;

        code {
          background-color: var(--clr-white);
          font-family: 'Courier';
          font-size: 1rem;
        }

        .img {
          width: calc(100% + 2rem);
          margin: 0 -1rem;
          box-shadow:
            rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
      }
    }
  }
}
</style>

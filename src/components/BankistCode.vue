<script setup></script>

<template>
  <section class="section">
    <div class="container">
      <div class="code-item" id="data-transformations">
        <h1>Data & Data Transformations</h1>
        <div class="container">
          <pre><code>const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2025-06-02T17:01:17.194Z",
    "2025-06-05T23:36:17.929Z",
    "2025-06-08T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "en-GB",
};</code></pre>
        </div>
        <div class="container">
          <pre><code>const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};</code></pre>
        </div>
        <div class="container">
          <pre><code>const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? "deposit" : "withdrawal";

    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(movement, acc.locale, acc.currency);
  });
};</code></pre>
        </div>
        <div class="container">
          <pre><code>const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
</code></pre>
        </div>
        <div class="container">
          <pre><code>const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};</code></pre>
        </div>
      </div>
      <div class="code-item" id="login-logout">
        <h1>Login & Logout Functionality</h1>
        <div class="container">
          <pre><code>btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});</code></pre>
        </div>
        <div class="container">
          <pre><code>const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 sec, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }

    // Decrease 1 sec
    time--;
  };

  // Set time to 2 mins
  let time = 120;

  // Call the timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};</code></pre>
        </div>
      </div>
      <div class="code-item" id="transfers-loans">
        <h1>Transfer & Loan Functionality</h1>
        <div class="container">
          <pre><code>btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});</code></pre>
        </div>
        <div class="container">
          <pre><code>btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});</code></pre>
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

        pre {
          overflow-x: scroll;
        }

        code {
          background-color: var(--clr-white);
          font-family: 'DM Mono Regular';
          font-size: 1rem;
          overflow: auto;
        }
      }
    }
  }
}
</style>

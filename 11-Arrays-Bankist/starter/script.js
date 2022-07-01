'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `  
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i + 1} ${type}
            </div>
            <div class="movements__value">${mov}€</div>
          </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = (acc) => {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (account) {
  const balance = (account.balance = account.movements.reduce(
    (acc, mov) => acc + mov,
    0
  ));
  labelBalance.textContent = balance + ' €';
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov);
  labelSumIn.textContent = incomes + '€';

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov);
  labelSumOut.textContent = Math.abs(out) + '€';

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest + '€';
};

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => inputLoginUsername.value === acc.username
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //UI change
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value);


    if (
      amount > 0 && reciverAcc && currentAccount.balance >= amount &&
         reciverAcc?.owner !== currentAccount.owner) {
      currentAccount.movements.push(-1 * amount);
      reciverAcc.movements.push(amount);
      updateUI(currentAccount);
    }
    inputTransferAmount.value = inputTransferTo.value = '';
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*)
const x = movements.find(value => {
  if (value > 5000 && value < 4000) return true;
});

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

const euroToUsd = 1.1;

const totalDepositInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => euroToUsd * mov)
  .reduce((sum, mov) => sum + mov);

// console.log(totalDepositInUsd);
*/
/*
//Max value of movements

const maxMov = movements.reduce(
  (acc, mov) => (acc <= mov ? mov : acc),
  Number.MIN_VALUE
);

const accum = movements.reduce((acc, curr, i, arr) => {
  console.log(`it num: ${i}, acc=${acc}`);

  return acc + curr;
}, 0);
console.log(accum);

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
const eurToUsd = 1.1;
const movUsd = movements.map(mov => mov * eurToUsd);

// const movementsUsd = [];
// for (const mov of movements) {
//   movementsUsd.push(mov * eurToUsd);
// }
// console.log(movementsUsd);

const movmnt = movements.map(
  (mov, i) => `el ${i} ${mov > 0 ? 'deposit' : 'withdrawal'}: ${Math.abs(mov)}`
);

console.log(movmnt);
console.log(movements);
console.log(movUsd);
*/
/////////////////////////////////////////////////

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr.at(-1));
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`${i}: You deposited ${movement}`);
  else if (movement < 0) console.log(`${i}: You took ${Math.abs(movement)}`);
}

console.log('--------ForEach--------');
movements.forEach((mov, i, array) => {
  if (mov > 0) console.log(`${i}: You deposited ${mov}`);
  else if (mov < 0) console.log(`${i}: You took ${Math.abs(mov)}`);
});
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(key + ': ' + value);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, set) => {
  console.log(value);
});

*/

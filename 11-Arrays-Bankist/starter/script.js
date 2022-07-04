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
let isSort = false;

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
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

const updateUI = acc => {
  displayMovements(acc.movements, isSort);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

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
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.owner !== currentAccount.owner
  ) {
    currentAccount.movements.push(-1 * amount);
    reciverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => currentAccount.username === acc.username
    );
    console.log(index);

    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnSort.addEventListener('click', e => {
  e.preventDefault();
  isSort = !isSort;
  updateUI(currentAccount);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(value => value > 0)
  .reduce((acc, mov) => (acc += mov), 0);
console.log(bankDepositSum);
//2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

console.log(numDeposits1000);
const numDeposits1000_2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accum, mov) => (mov > 1000 ? ++accum : accum), 0);
console.log(numDeposits1000_2);

//3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, mov) => {
      // mov > 0 ? (sums.deposits += mov) : (sums.withdrawals += mov);
      sums[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4.
let str = 'this is a nice title and sth';
let str2 = 'And this is an aligator with a huge nose and bruses';

const capitalizeString = str => str[0].toUpperCase() + str.slice(1);
const titleCase = str => {
  const exeptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  let newStr = str
    .slice()
    .toLowerCase()
    .split(' ')
    .map(word => (exeptions.includes(word) ? word : capitalizeString(word)))
    .join(' ');

  console.log(capitalizeString(newStr));
};
titleCase(str);
titleCase(str2);
/*
const x = new Array(7);
x.fill(0, 0, 3);
x.fill(6, 3);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, key) => key + 1);
console.log(z);

const diceRolls = Array.from({ length: 100 }, () =>
  Math.round(1 + Math.random() * 5)
);
console.log(diceRolls);
const amount = diceRolls.reduce((acc, value) => {
  acc[value - 1] += 1;
  return acc;
}, new Array(6).fill(0));
console.log(amount);

const maxValue = amount.reduce(
  (iMax, curr, i, arr) => (curr > arr[iMax] ? i : iMax),
  0
);
console.log(
  `The most throws had number: ${maxValue + 1} with ${Math.max(
    ...amount
  )} throws`
);

const arr = [3, 28, 25, 14, 99];
const wynik = arr.reduce((acc, curr) => {
  if (curr > 2 && curr < 25) acc.push(curr);
  return acc;
}, []);
console.log(wynik);

const owners = ['Kacper', 'Ala', 'Ewa', 'Tomek'];
console.log(owners.sort());
console.log(owners);

console.log(movements);
console.log(movements.sort((a, b) => b - a));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[1, 2, [3.3, 3.4, 3.5]], [4, [5, [6.6, 6.7, 6.8]]], 7, 8];
console.log(arr.flat(2));
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));
console.log(arrDeep.flat(3));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const sum = allMovements.reduce((acc, mov) => (acc += mov), 0);
console.log(sum);

const sumShort = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (acc += mov), 0);

console.log(sumShort);
console.log(movements.every(mov => typeof mov === 'number'));
console.log(movements.every(mov => mov > 100));

console.log(movements.includes(-130));
console.log(movements.some(mov => mov > 5000));
console.log(movements);


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

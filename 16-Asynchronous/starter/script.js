'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data) {
  const flag = data.flags.png;
  const countryName = data.name.common;
  const countryRegion = data.region;
  const countryPopulation = data.population;
  const countryLang = data.languages[Object.keys(data.languages)[0]];
  const countryCurr = data.currencies[Object.keys(data.currencies)[0]];
  const html = `  
  <article class="country">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
  <h3 class="country__name">${countryName}</h3>
  <h4 class="country__region">${countryRegion}</h4>
  <p class="country__row"><span>👫</span>Population: ${(
    countryPopulation /
    10 ** 6
  ).toFixed(2)} MLN</p>
    <p class="country__row"><span>🗣️</span>${countryLang}</p>
    <p class="country__row"><span>💰</span>${countryCurr.name} 
    (${countryCurr.symbol})</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

/*
  //AJAX
const getCountry = country => {
  //AJAX CALL 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    if (!data.borders[2]) return;

    //AJAX CALL 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${data.borders[2]}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2);
    });
  });
};

getCountry('pl');
*/
// const getCountry = data => {
//   fetch(`https://restcountries.com/v3.1/name/${data}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getCountry = data => {
  fetch(`https://restcountries.com/v3.1/name/${data}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      if (!data[0].borders[2]) return;

      return data[0].borders[2];
    })
    .then(neighbor => {
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(e => alert(e));
};

// getCountry('greenland');

btn.addEventListener('click', () => getCountry('poland'));

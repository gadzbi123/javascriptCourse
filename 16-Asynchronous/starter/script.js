'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountry = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
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
        <p class="country__row"><span>💰</span>${countryCurr.name} (${
      countryCurr.symbol
    })</p>
    </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
  });
};

getCountry('GB');
getCountry('usa');

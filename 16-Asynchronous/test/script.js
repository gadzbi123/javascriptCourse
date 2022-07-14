'use strict';
/*
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
*/
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
/*
const getCountry = data => {
  fetch(`https://restcountries.com/v3.1/name/${data}`)
  .then(response => {
    if (!response.ok) throw new Error(`Contry not found ${response.status}`);
    return response.json();
  })
  .then(data => {
      renderCountry(data[0]);
      if (!data[0].borders[2]) return;
      
      return data[0].borders[2];
    })
    .then(neighbor => {
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Contry not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(e => alert(e.message));
  };
  */

/*  const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountry = data => {
  getJson(`https://restcountries.com/v3.1/name/${data}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      if (!data[0].borders[0]) throw new Error('Neighbor not found');

      return data[0].borders[0];
    })
    .then(neighbor =>
      getJson(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Neighbor not found'
      )
    )
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(e => console.log(e));
};

// getCountry('greenland');
// btn.addEventListener('click', () => getCountry('greenland'));
btn.addEventListener('click', () => getCountry('portugal'));
*/
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const data = {
  first: [52.508, 13.381],
  second: [19.037, 72.873],
  third: [-33.933, 18.474],
  jason: [37.0475008, 18.474],
  kacper: [50.3742464, 18.3205888],
};

const whereAmI = function (array) {
  fetch(`https://geocode.xyz/${array[0]},${array[1]}?geoit=json`)
    .then(response => {
      if (response.status === 403) throw new Error('Dont request so often');

      if (!response.ok) throw new Error("Address doesn't exist");
      return response.json();
    })
    .then(location => {
      if (!location) throw new Error('Location not found');
      console.log(`you are in ${location.city}, ${location.country}`);
    })
    .catch(e => console.log(e.message));
};
whereAmI(data.kacper);
// whereAmI(data.first);
// whereAmI(data.second);
// whereAmI(data.third);

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
  const getJson = function (url, errorMsg = 'Something went wrong') {
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
      
      
      console.log('test start');
      setTimeout(() => console.log('0 sec timer'), 0);
      
      Promise.resolve(`Resolved promise ${1}`).then(res => {
  for (let i = 1; i < 1000000000; i++) {}
  return console.log(res);
});
console.log('test end');
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening');
  
  setTimeout(() => {
    let num;
    if ((num = Math.random()) >= 0.5) {
      resolve(`You win 😊 with ${num}`);
    } else {
      reject(new Error(`you lost 💩 with ${num}`));
    }
  }, 2000);
});

lotteryPromise.then(result => console.log(result)).catch(e => console.error(e));

//promisifying setTimeout
const wait = secs => new Promise(resolve => setTimeout(resolve, secs * 1000));
wait(1)
.then(() => {
  console.log('I waited 1 secs');
  return wait(1);
})
.then(() => {
  console.log('I waited 2 secs');
  return wait(1);
})
.then(() => {
  console.log('I waited 3 secs');
  return wait(1);
})
.then(() => {
  console.log('I waited 4 secs');
  return wait(1);
});

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));


const getPosition = function () {
  return new Promise((resolve, reject) =>
  //   navigator.geolocation.getCurrentPosition(
    //     position => resolve(position),
    //     err => reject(err)
    //   )
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  };
  
  getPosition().then(pos => console.log(pos));
  */

// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const wait = function (secs) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * secs);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.classList.add('image');
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error('img not found')));
  });
};

let currentImg;

createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Img 1 loaded');
    return wait(2);
  })
  .then(() => {
    // currentImg.style.display = 'none';
    currentImg.parentNode.removeChild(currentImg);
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Img 2 loaded');
    return wait(2);
  })
  .then(() => {
    // currentImg.style.display = 'none';
    currentImg.parentNode.removeChild(currentImg);
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Img 3 loaded');
    return wait(2);
  })
  .catch(e => console.error(e));

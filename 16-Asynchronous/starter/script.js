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
/*
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
  
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
  
  const whereAmI = async function () {
    try {
      // Geolocation
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
      
      // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/poland`);
    
    if (!res.ok) throw new Error(`didn't found a correct country`);
    
    const data = await res.json();
    renderCountry(data[0]);
    return `you are in ${data[0].capital[0]}, ${data[0].name.common}`;
  } catch (e) {
    console.error(e);
    throw e.message;
  }
};

// btn.addEventListener('click', whereAmI.call(undefined, 'Poland'));

// console.log('first');
// whereAmI()
//   .then(x => console.log(x))
//   .catch(e => console.error(e))
//   .finally(() => console.log('end'));

(async function () {
  let str;
  try {
    str = await whereAmI();
  } catch (e) {
    str = e.message;
  } finally {
    console.log('start');
    
    console.log(str);
    console.log('end');
  }
})();
*/

const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const countries = ['poland', 'germany', 'italy'];
const capitals = async countries => {
  try {
    const data = await Promise.any([
      getJson(`https://restcountries.com/v3.1/name/${countries[0]}`),
      getJson(`https://restcountries.com/v3.1/name/${countries[1]}`),
      getJson(`https://restcountries.com/v3.1/name/${countries[2]}`),
    ]);

    // console.log(data[0].capital[0].flatMap(d => d[0].capital)); dla Promise.all
    // console.log(data[0].capital[0]); dla Promise.race
    // console.log(data.flatMap(d => d.value)[0]); //dla Promise.allSettled
    // console.log(data[0]); //dla Promise.any only returns fulfilled promise
  } catch (e) {
    console.log(e.message);
  }
};
capitals(countries);

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.25),
])
  .then(res => console.log(res[0]))
  .catch(e => console.log(e.message));

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
let currentImg;
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

const wait = function (secs) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * secs);
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    currentImg = img;
    console.log('Img 1 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    // currentImg.parentNode.removeChild(currentImg);
    img = await createImage('./img/img-2.jpg');

    currentImg = img;
    console.log('Img 2 loaded');
    await wait(2);

    currentImg.style.display = 'none';
    // currentImg.parentNode.removeChild(currentImg);
    img = await createImage('./img/img-3.jpg');

    currentImg = img;
    console.log('Img 3 loaded');
    return wait(2);
  } catch (e) {
    console.error(e);
  }
};

// loadNPause();

const imgPaths = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'];
const loadAll = async function (imgPaths) {
  const imgs = imgPaths.map(i => createImage(i));
  imgContainer
    .querySelectorAll('.image')
    .forEach(i => i.classList.add('parallel'));
  console.log(imgs);
  const loaded = await Promise.allSettled(imgs);
  console.log(loaded);
};
loadAll(imgPaths);

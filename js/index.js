const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
const API_MARGARITA = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
const API_W = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w";
const API_EGG = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e";
const API_ICE = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i";
const SEARCH = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const API_V = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
const API_G = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
const API_N = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vh-100');
    const landing = document.getElementById('landing');
    const logs = document.getElementById('logs');
    const regist = document.querySelector('.regist')
    const login = document.getElementById('login');
    const formlogin = document.getElementById('formlogin');
    const register = document.getElementById('register');
    const registerTag = document.getElementById('registe')
    const searchForm = document.getElementById('search_form');
    const searchInput = document.getElementById('search');
    // login button
    const loginbutton = document.getElementById('loginbtn');
    //registration
    const registerbtn = document.getElementById('registerbtn')
    const logout = document.getElementById('logout')
    // main page
    const page = document.getElementById('page');
    const mainpage = document.getElementById('mainpage');
    //whisky punchs
    const whisky = document.getElementById('whisky');
    // egg nogs
    const eggnog = document.getElementById('egg');
    // ice picks
    const ice = document.getElementById('ice');
    // cart
    const cart = document.getElementById('cart')
    //search 
    const search = document.getElementById('searchpage');
    const searchm = document.getElementById('searchp');
    // tags
    const home = document.getElementById('home');
    // vodka
    const vodka = document.getElementById('vodka');
    const vodkas = document.getElementById('vods');
    const vodk = document.getElementById('vodk');
    // gin
    const gin = document.getElementById('gin');
    const gins = document.getElementById('gino')
    const gino = document.getElementById('gins')
    // non alcoholic
    const nonAlco = document.getElementById('non');
    const nons = document.getElementById('nono');
    const nono = document.getElementById('nons');

    logout.style.display = 'none'
    searchm.style.display = 'none'
    vodkas.style.display = "none";
    nons.style.display = "none";
    gins.style.display = "none";
    //home tags clicks
    home.addEventListener('click', () => {

        window.location.reload();
     
    })
    // vodka eventlistener
    vodka.addEventListener('click', () => {
        gins.style.display = "none";
        vodkas.style.display = "flex";
        nons.style.display = "none";
        register.style.display = "none";
        formlogin.style.display = "box";
        landing.style.display = "none"
        logout.style.display = 'none'
    })
    // gin eventlistener
    gin.addEventListener('click', () => {
        vodkas.style.display = "none";
        nons.style.display = "none";
        gins.style.display = ""
        register.style.display = "none";
        formlogin.style.display = "box";
        landing.style.display = "none"
        logout.style.display = 'none'
        page.style.display = 'none'
    })
    // non-alcolic eventlistener
    nonAlco.addEventListener('click', () => {
        gins.style.display = "none";
        nons.style.display = "";
        vodkas.style.display = "none";
        register.style.display = "none";
        formlogin.style.display = "box";
        landing.style.display = "none"
        logout.style.display = 'none'
    })

    login.addEventListener("click", () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "box";
        landing.style.display = "none"
        logout.style.display = 'none'
        nons.style.display = "none";

    })
    regist.addEventListener('click', () => {
        formlogin.style.display = "none";
        register.style.display = "flex";
        container.style.display = "box";
        container.removeAttribute('hidden');
        logout.style.display = 'none'
    })
    loginbutton.addEventListener('click', (e) => {
        e.preventDefault();
        container.style.display = "none"
        page.removeAttribute('hidden')
        cart.removeAttribute('hidden')
        logout.style.display = "flex"
        landing.style.display = "none"


    })
    registerbtn.addEventListener('click', () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "flex";
        logout.style.display = 'none'
    })
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.reload();

    })
    registerTag.addEventListener('click', () => {
        container.removeAttribute('hidden');
        landing.style.display = "none"
        logout.style.display = 'none'
        register.style.display = "none";
    })
    // search form eventlistener
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value;
        searchDrink(query)
        container.style.display = "none"
        landing.style.display = "none"
        logout.style.display = 'none'
        search.style.display = 'flex'
        searchp.style.display = ''
    })

    // landng page display
    const displayRandomDrinks = (image, name) => {

        const mainDiv = document.createElement('div')
        mainDiv.classList.add('col-12', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const drinkimage = document.createElement('img')
        drinkimage.classList.add('card-img-top')
        drinkimage.src = image

        const drinkName = document.createElement('h6')
        drinkName.classList.add('card-title')
        drinkName.innerHTML = `${name} <span class="like-glyph">&#x2661;</span>`
        

        // append title and image to card loading page
        cardDiv.appendChild(drinkimage)
        cardDiv.appendChild(drinkName)
        mainDiv.appendChild(cardDiv)

        return mainDiv
    }

    // landing page display function
    const landingPage = () => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                const drinks = data.drinks;
                const drinksElement = drinks.map(
                    cat => displayRandomDrinks(
                        cat.strDrinkThumb,
                        cat.strDrink,
                    )
                )
                lpagelist.append(...drinksElement)
            })
    }

    // page after login display margarita's
    const displayMargarita = (image, name, id) => {

        const mainDiv = document.createElement('div')
        mainDiv.classList.add('col-12', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const drinkimage = document.createElement('img')
        drinkimage.classList.add('card-img-top')
        drinkimage.src = image

        const drinkName = document.createElement('h6')
        drinkName.classList.add('card-title')
        drinkName.innerText = name
        const drinkId = document.createElement('h6')
        drinkId.classList.add('card-title')
        const price = (id / 20) / 1.5;
        const finalprice = price.toFixed(2)
        drinkId.innerHTML = `<span>Ksh: <k>${finalprice}</k><span class="like-glyph">&#x2661;</span></span>`

        // append title and image to card loading page
        cardDiv.appendChild(drinkimage);
        cardDiv.appendChild(drinkName);
        cardDiv.appendChild(drinkId);
        mainDiv.appendChild(cardDiv);

        return mainDiv
    }
    // search display 
    const createSearchResults = (image, name, id) => {

        const mainDiv = document.createElement('div')
        mainDiv.classList.add('col-12', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const drinkimage = document.createElement('img')
        drinkimage.classList.add('card-img-top')
        drinkimage.src = image

        const drinkName = document.createElement('h6')
        drinkName.classList.add('card-title')
        drinkName.innerText = name
        const drinkId = document.createElement('h6')
        drinkId.classList.add('card-title')
        const price = (id / 20) / 1.5;
        const finalprice = price.toFixed(2)
        drinkId.innerHTML = `<span>Ksh: <k>${finalprice}</k><span class="like-glyph">&#x2661;</span></span>`

        // append title and image to card loading page
        cardDiv.appendChild(drinkimage);
        cardDiv.appendChild(drinkName);
        cardDiv.appendChild(drinkId);
        mainDiv.appendChild(cardDiv);

        return mainDiv
    }

    // page after login display margarita's fetch function
    const afterLoginPage = () => {
        fetch(API_MARGARITA)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                mainpage.append(...margaritaElement)
            })
    }
    // whisky punch api fetch
    const whiskyPunch = () => {
        fetch(API_W)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                whisky.append(...margaritaElement)
            })
    }
    // Egg nog,s api fetch
    const eggNogs = () => {
        fetch(API_EGG)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                eggnog.append(...margaritaElement)
            })
    }
    // ice picks fetch
    const icePicks = () => {
        fetch(API_ICE)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                ice.append(...margaritaElement)
            })
    }
    // vodkas fetch
    const vodkaFetch = () => {
        fetch(API_V)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                vodk.append(...margaritaElement)
            })
    }
    // gin fetch
    const ginFetch = () => {
        fetch(API_G)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                gino.append(...margaritaElement)
            })
    }
    // non alcoholic
    const nonFetch = () => {
        fetch(API_N)
            .then((response) => response.json())
            .then((data) => {
                const margarita = data.drinks;
                const margaritaElement = margarita.map(
                    cat => displayMargarita(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                nono.append(...margaritaElement)
            })
    }
    // search form

    const searchDrink = (drink) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
            .then((response) => response.json())
            .then((data) => {
                const drinks = data.drinks;
                const drinksElement = drinks.map(
                    cat => createSearchResults(
                        cat.strDrinkThumb,
                        cat.strDrink,
                        cat.idDrink
                    )
                )
                search.replaceChildren(...drinksElement)
            })
    }

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.querySelectorAll("span.like-glyph")
for(const heart of emptyHearts){
  heart.addEventListener("click", () => {
  fetch(mimicServerCall)
  .then(
    toggleHeart(heart)
  )
  .catch(err => {
      const modal = document.querySelector("#modal")
      modal.className = ""
      modal.innerText = err;
      setTimeout(() => {
        modal.className = "hidden"
      }, 3000)
    })
  })
}

function toggleHeart(heart) {
  if(heart.className === "like-glyph"){
    heart.textContent = FULL_HEART,
    heart.className = "activated-heart"
  } else {
    heart.textContent = EMPTY_HEART,
    heart.className = "like-glyph"
  }
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

    landingPage();
    afterLoginPage();
    whiskyPunch();
    eggNogs();
    icePicks();
    vodkaFetch();
    ginFetch();
    nonFetch();

})
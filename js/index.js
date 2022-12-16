const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
const API_MARGARITA = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
const API_W = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w";
const API_EGG = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e";
const API_ICE = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i";

const lpagelist = document.getElementById('lpagelist')
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vh-100');
    const landing = document.getElementById('landing');
    const logs = document.getElementById('logs');
    const regist = document.querySelector('.regist')
    const login = document.getElementById('login');
    const formlogin = document.getElementById('formlogin');
    const register = document.getElementById('register');
    const nav = document.getElementById('nav')
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


    login.addEventListener("click", () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "box";
        landing.style.display = "none"

    })
    regist.addEventListener('click', () => {
        formlogin.style.display = "none";
        register.style.display = "flex";
        container.style.display = "box";
        container.removeAttribute('hidden');
    })
    loginbutton.addEventListener('click', () => {
        container.style.display = "none"
        page.removeAttribute('hidden')
        logout.removeAttribute('hidden')
        cart.removeAttribute('hidden')
        formlogin.style.display = "box";
      

    })
    registerbtn.addEventListener('click', () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "flex";
    })
logout.addEventListener('click', () => {
    logs.style.display = "flex";
    logout.style.display = "none";
    page.style.display = "none";
    cart.style.display = 'none';
    nav.style.display = "flex";
    landing.style.display = "block";
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
    drinkName.innerText = name

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
    drinkId.innerHTML = `<span>Ksh: <k>${finalprice}</k><span>`
    
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
landingPage();
afterLoginPage();
whiskyPunch();
eggNogs();
icePicks();
})
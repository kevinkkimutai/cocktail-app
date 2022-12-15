const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
const API_SHORTS = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"

const lpagelist = document.getElementById('lpagelist')
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vh-100');
    const landing = document.getElementById('landing');
    const logs = document.getElementById('logs');
    const regist = document.getElementById('regist');
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
    // cart
    const cart = document.getElementById('cart')

    login.addEventListener("click", () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "";
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
    landing.style.display = "";
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

    // append title and image to card
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
                cat.strDrink
                )
        )
        lpagelist.append(...drinksElement)
    })
}

// Other Drink
const shotsPage = () => {
    fetch(API_SHORTS)
    .then((response) => response.json())
    .then((data) => {
        const drinks = data.drinks;
        const drinksElement = drinks.map(
            cat => displayRandomDrinks(
                cat.strDrinkThumb, 
                cat.strDrink
                )
        )
        lpagelist.append(...drinksElement)
    })
}
landingPage()
})
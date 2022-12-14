
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vh-100');
    // const link = document.getElementById('logs');
    const logs = document.getElementById('logs');
    const regist = document.getElementById('regist');
    const formlogin = document.getElementById('formlogin');
    const register = document.getElementById('register');
    // login button
    const loginbutton = document.getElementById('loginbtn');
    //registration
    const registerbtn = document.getElementById('registerbtn')
    // main page
    const page = document.getElementById('page');
    // cart
    const cart = document.getElementById('cart')

    login.addEventListener("click", () => {
        logs.style.display = "none";
        cart.style.display = "none"
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "box";

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
      

    })
    registerbtn.addEventListener('click', () => {
        logs.style.display = "none";
        register.style.display = "none";
        container.removeAttribute('hidden');
        formlogin.style.display = "flex";
    })


})
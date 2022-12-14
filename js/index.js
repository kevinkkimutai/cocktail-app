
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('vh-100');
    // const link = document.getElementById('logs');
    const logs = document.getElementById('logs');
    const regist = document.getElementById('regist');
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
    nav.style.display = "flex"
})

})
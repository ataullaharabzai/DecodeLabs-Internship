let themeBtn = document.querySelector('#toggle-theme')
let logOutBtn = document.querySelector('#logout-btn')
let loginFormBtn = document.querySelector('#login-btn')

let username = document.querySelector('#username')
let userEmail = document.querySelector('#userEmail')
let userPassword = document.querySelector('#userPassword')

let loginForm = document.querySelector('.login-card')
let dashboardView = document.querySelector('#dashboard')
let navbarItems = document.querySelector('.nav-items')
let messageCard = document.querySelector('#message-card')

const updateUI = () => {
    const user = localStorage.getItem('user')

    if(user) {
        loginForm.style.display = 'none'
        dashboardView.style.display = 'block'
        logOutBtn.style.display = 'block'

    } else {
        loginForm.style.display = 'flex'
        dashboardView.style.display = 'none'
        logOutBtn.style.display = 'none'
        navbarItems.style.display = 'none'
    }
}

loginFormBtn.addEventListener('click', () => {
    if (username.value === "") {
        messageCard.style.display = 'block'
        messageCard.textContent = 'Plaese enter username'
        messageCard.style.backgroundColor = '#bb2124'
        messageCard.classList.add('show')
        return;
    }
    if (userEmail.value === "") {
        messageCard.style.display = 'block'
        messageCard.textContent = 'Plaese enter Email'
        messageCard.style.backgroundColor = '#bb2124'
        messageCard.classList.add('show')
        return;
    }
    if (userPassword.value === "") {
        messageCard.style.display = 'block'
        messageCard.textContent = 'Plaese enter Password'
        messageCard.style.backgroundColor = '#bb2124'
        messageCard.classList.add('show')
        return;
    }
    
    localStorage.setItem('user', JSON.stringify({
        username: username.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value
    }))
    
    username.value = ''
    userEmail.value = ''
    userPassword.value = ''

    messageCard.style.backgroundColor = '#22bb33'
    messageCard.textContent = 'Login successful !'
    messageCard.classList.add('show')

    setTimeout(() => {
        messageCard.style.display = 'none'
        navbarItems.style.display = 'flex'
    }, 1500);
    
    updateUI()
})

logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('user')

    username.value = "";
    userEmail.value = "";
    userPassword.value = "";

    updateUI()
})

updateUI()

const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark') {
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
        themeBtn.style.backgroundColor = 'white'
        themeBtn.textContent = 'Light'
        themeBtn.style.color = 'black'
    } else {
        localStorage.setItem('theme', 'light')
        themeBtn.style.backgroundColor = '#232429'
        themeBtn.textContent = 'Dark'
        themeBtn.style.color = 'white'
    }
})
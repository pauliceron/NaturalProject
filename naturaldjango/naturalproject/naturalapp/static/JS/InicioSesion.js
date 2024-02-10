const email = document.getElementById('email')
const contrasenia = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        email: email.value,
        password: contrasenia.value
    }

    console.log(data)
})



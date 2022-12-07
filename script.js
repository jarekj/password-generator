const btnGenerate = document.querySelector('#generate');
const inputPassword = document.querySelector('#password');
const passLength = document.querySelector('#length');

btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    inputPassword.value = generatePassword(passLength.value)
})


function generatePassword(length){
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-";
    console.log(chars)

    let password = "";

    for(let i = 0; i < length; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1);
    }
    console.log(password)
    return password;
}
const btnGenerate = document.querySelector('#generate');
const inputPassword = document.querySelector('#password');
const passLength = document.querySelector('#length');
const lowercaseCheckbox = document.querySelector('#lowercase');
const uppercaseCheckbox = document.querySelector('#uppercase');
const numbersCheckbox = document.querySelector('#numbers');
const symbolsCheckbox = document.querySelector('#symbols');


btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    inputPassword.value = generatePassword(passLength.value)
})


function generatePassword(length){
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_-";
    let chars = "";
    console.log("małe litery ", lowercaseCheckbox.checked)
    console.log("wielkie litery ", uppercaseCheckbox.checked)
    console.log("liczby ", numbersCheckbox.checked)
    console.log("symbole ", symbolsCheckbox.checked)

    if(lowercaseCheckbox.checked) chars += lowercase;
    if(uppercaseCheckbox.checked) chars += uppercase;
    if(numbersCheckbox.checked) chars += numbers;
    if(symbolsCheckbox.checked) chars += symbols;

    let password = "";

    for(let i = 0; i < length; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1);
    }
    console.log(password)
    return password;
}
const btnGenerate = document.querySelector('#generate');
const inputPassword = document.querySelector('#password');
const passLength = document.querySelector('#length');
const lowercaseCheckbox = document.querySelector('#lowercase');
const uppercaseCheckbox = document.querySelector('#uppercase');
const numbersCheckbox = document.querySelector('#numbers');
const symbolsCheckbox = document.querySelector('#symbols');
const lightbulb = document.querySelector('.lightbulb');
const darklightbulb = document.querySelector('.darklightbulb');
const container = document.querySelector('.container');

const switchLight = function (){
    lightbulb.classList.toggle('d-none');
    darklightbulb.classList.toggle('d-none');
    document.body.classList.toggle('bg-dark')
    container.classList.toggle('bg-white')
    container.classList.toggle('bg-secondary')
    container.classList.toggle('text-white')
}


btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    inputPassword.value = generatePassword(passLength.value)
})

inputPassword.addEventListener('click', (e)=>{
    e.target.select();
    navigator.clipboard.writeText(e.target.value)
    console.log(e.target.value);
})

lightbulb.addEventListener('click', switchLight)
darklightbulb.addEventListener('click', switchLight)


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
    if(!password) return "use checkboxes";
    return password;
}


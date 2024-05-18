const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//Show inout error message 
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//Check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLocaleLowerCase())

    
}

//Check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} Is required!`)
        }else{
            showSuccess(input)
        }
    })
}

//Get Filed Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Add event listener
form.addEventListener("submit", function(e){
    e.preventDefault()


    checkRequired([userName, email, password, password2])



})
// if(userName.value === ''){
//     showError(userName, 'Username is required!')
// }else{
//     showSuccess(userName)
// }

// if(email.value === ''){
//     showError(email, 'Email is required!')
    
// }else if(!isValidEmail(email.value)){
//     showError(email, 'Email is not valid!')
// }else{
//     showSuccess(email)
// }

// if(password.value === ''){
//     showError(password, 'Password is required!')
// }else{
//     showSuccess(password)
// }

// if(password2.value === ''){
//     showError(password2, 'Password 2 is required!')
// }else{
//     showSuccess(password2)
// }
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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, `Email is not valid`)
    }
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

//Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less then ${max} characters`)
    }else{
        showSuccess(input)
    }
}

//Check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }

}
//Get Filed Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Add event listener
form.addEventListener("submit", function(e){
    e.preventDefault()

    checkRequired([userName, email, password, password2])
    checkLength(userName, 3, 15)
    checkLength(password, 6, 20)
    checkEmail(email)
    checkPasswordMatch(password, password2)

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
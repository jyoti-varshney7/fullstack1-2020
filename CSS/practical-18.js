const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');
form.addEventListener('submit', function(e){
    
    e.preventDefault(); // DATA NOT SUBMITTED TO SERVER
    checkInput();
});

function checkInput(){
    const name = username.value.trim();
    const emailVal = email.value;
    const password1Val = password1.value;
    const password2Val = password2.value;
    if(name === ''){
        showError(username,"Username cannot be blank");
    }
    else if(!isNameValid(name)){
        showError(username,"Username is not valid");
    }
    else{
        showSuccess(username);
    }
    if(emailVal === ''){
        showError(email,"Email cannot be blank");
    }
    else if(!isEmailValid(emailVal)){
        showError(email,"Email is not valid");
    }
    else{
        showSuccess(email);
    }
    if(password1Val === ''){
        showError(password1,"Password cannot be blank");
    }else{
        showSuccess(password1);
    }
    if(password2Val === ''){
        showError(password2,"Password cannot be blank");
    }
    else if(password2Val != password1Val){
        showError(password2,"Password does not match");
    }
    else{
        showSuccess(password2);
    }
}

function showError(input,message){
    const parentControl = input.parentNode;
    parentControl.className = 'form-control error';
    // small.innerHTML = message;
}
function showSuccess(input){
    const parentControl = input.parentNode;
    parentControl.className = 'form-control success';
}
function isEmailValid(email){
    return /^([a-zA-Z0-9\-\.])+@([a-zA-Z0-9])+\.([a-z]{2,3})+$/.test(email);
}
function isNameValid(username){
    return /^([a-z0-9]+)$/.test(username);
}
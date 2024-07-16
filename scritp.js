var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var Name = document.getElementById('contact-name').value;

    if(Name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return ;
    }
    nameError.innerHTML = '✅';
    return true;
}
function validateEmail(){
    var Email = document.getElementById('contact-email').value;
    if(Email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!Email.match(/^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '✅'
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail()){
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}
var nameError = document.getElementById('name-error');
var firstnameError = document.getElementById('firstname-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var sendError = document.getElementById('send-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required' 
        return false;
    } 
    if(!name.trim().match(/^[A-Za-z]/)){
        nameError.innerHTML ='Form name is invalid'
        return false;
    }
    if(name.trim().length > 20) {
        nameError.innerHTML = 'name form is invalid'
        return false;
    }   
    nameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true; 
}
function validateFirstName(){
    var Firstname = document.getElementById('contact-first-name').value;
    if(Firstname.length == 0){
        firstnameError.innerHTML = 'Name is required' 
        return false;
    } 
    if(!Firstname.trim().match(/^[A-Za-z]/)){
        firstnameError.innerHTML ='Form name is invalid'
        return false;
    }
    if(Firstname.trim().length > 20) {
        firstnameError.innerHTML = 'name form is invalid'
        return false;
    }   
    firstnameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true; 
}
function validatePhone(){
    var Phone = document.getElementById('contact-phone').value; 
    if(Phone.length == 0){
        phoneError.innerHTML ='Phone number is required'
        return false;
    }
    if(Phone.trim().length !== 10){
        phoneError.innerHTML ='Phone number should be 10 digits'
        return false;
    }
    if(!Phone.trim().match(/^[0-9]{10}$/)){
        phoneError.innerHTML ='Phone number form is invalid'
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;
}
function validateEmail(){
    var Email = document.getElementById('contact-email').value;
    if(Email.length == 0){
        emailError.innerHTML ='Email is required'
        return false;
    }
    if(!Email.trim().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML ='Email form is invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;
}
function validateMessage(){
    var Message = document.getElementById('contact-message').value;
    if(Message.length == 0){
        messageError.innerHTML ='Message is required'
        return false;
    }
    if(Message.trim().length  > 50) {
        messageError.innerHTML ='Message should not pass 50 digits'
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;
}
function validateForm(){
    if(!validateName() || !validateFirstName() || !validateMessage() || !validatePhone() || validateEmail()){
        sendError.innerHTML = 'Please fix error to send the form' 
        return false;
    }
    sendError.innerHTML= '';
    return true ;
}
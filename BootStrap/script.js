
const registerBtn = document.getElementById("register-btn");
const resetBtn = document.getElementById("reset-btn");

function resetPage(){
    username = "";
    email = "";
    contact = "";
    password = "";
}

function isValidEmail(email) {

    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex !== email.lastIndexOf('@')) {
        return false;
    }

    const localPart = email.substring(0, atIndex);
    if (localPart.length === 0) {
        return false;
    }

    const domainPart = email.substring(atIndex + 1);
    if (domainPart.length === 0) {
        return false;
    }

    if (domainPart.indexOf('.') === -1) {
        return false;
    }

    if (domainPart.startsWith('.') || domainPart.endsWith('.')) {
        return false;
    }

    const invalidChars = /[^\w.!#$%&'*+-/=?^_`{|}~]/;
    if (invalidChars.test(localPart) || invalidChars.test(domainPart)) {
        return false;
    }

    return true;
}

registerBtn.addEventListener("click", ()=>{

    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let password = document.getElementById("password").value;

    // Checking for empty field
    if (username.length==0 || email.length==0 || contact.length==0 || password.length==0){
        alert("Some empty field left!");
        return;
    }

    let isNameValid = true;
    let isEmailValid = true;
    let isContactValid = true;
    let ispassWordvalid = true;

    // checking valididty for name
    let numbers = /[0-9]/g;
    isNameValid = !numbers.test(username);

    // checking validity for email
    isEmailValid = isValidEmail(email);

    // checking mobile no validity
    let contact_pattern = /^[7-9]\d{9}$/g;
    isContactValid = contact_pattern.test(contact);

    // checking password validity
    if (password.length<=8 || password.length>=100){
        ispassWordvalid = false;
    } else if (!(/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || !/[~`!@#$%^&*()\-_+={[}\]|\\:;"'<,>.?/]/.test(password))){
        ispassWordvalid = false;
    }

    if (!isNameValid){
        alert("Invalid Name!");
    } else if (!isEmailValid){
        alert("Invalid Email!");
    } else if (!isContactValid){
        alert("Invalid Contact");
    } else if (!ispassWordvalid){
        alert("Password lenght should be between 8 to 100 and should contain atleast one letter, alphabet and a special character")
    } else{
        console.log("Shazam");
        alert("Succesfully registerd!");
        resetPage();
    }

})

resetBtn.addEventListener("click", resetPage());
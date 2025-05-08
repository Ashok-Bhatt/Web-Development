
function validateForm(){

    const form = document.forms["myForm"];
    let firstName = form["firstname"].value;
    let lastName = form["lastname"].value;

    if (!firstName || !lastName || /\d/.test(firstName) || /\d/.test(lastName)){
        alert("Invalid Entry");
        return false;
    } return true;
}
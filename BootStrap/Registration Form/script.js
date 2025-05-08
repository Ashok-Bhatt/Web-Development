
const registerBtn = document.getElementById("register-btn")
let serialNo = 1;

registerBtn.addEventListener("click", ()=>{

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let comment = document.getElementById("comment").value;

    if (!name || !contact || !email || !password || !comment){
        alert("Some empty Field/s left!");
        return;
    }
    
    let table = document.getElementById("userDataTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.rows.length);

    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);

    cell0.innerHTML = serialNo++;
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = contact;
    cell4.innerHTML = comment;

    document.getElementById('registrationForm').addEventListener('submit', (event)=>{
        event.preventDefault();
    })
    
})
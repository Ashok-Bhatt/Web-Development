
let productContainer = [];
let itemNo = -1;
let isUpdating = false;
let cellColors = ["#dddddd","#eeeeee", "#666666"];

let tableRows;

const proName = document.getElementById("product-name");
const proPrice = document.getElementById("product-price");
const proBrand = document.getElementById("product-brand");
const proQuantity = document.getElementById("product-quantity");

const addBtn = document.querySelector(".add-btn");
const table = document.querySelector(".table-container table");
const dataTable = document.querySelector(".table-container table tbody");
const tableContainer = document.querySelector(".message");
const form = document.getElementById("my-form");
const productCountBox = document.querySelector(".product-count span");

const fetchProducts = (func)=>{

    let http = new XMLHttpRequest();
    http.open("POST", "fetch.php", true);

    http.onload = ()=>{
        if (http.readyState == 4 && http.status == 200){

            // fetching the response and performing opertaions on it
            let response = http.response;
            if (response != ""){
                let data = response.split("\n");
                for (let i=0; i<data.length; i++){
                    data[i] = data[i].split(",");
                }

                // now insertig the data into productContainer
                for (let i=0; i<data.length; i++){
                    let newItem = {
                        productName : data[i][1],
                        productPrice : data[i][2],
                        productBrand : data[i][3],
                        productQuantity : data[i][4]
                    }
                    productContainer.push(newItem);
                }
            }

            func();
        }
    }

    http.send();

}

const showProducts = ()=>{
    
    let productCount = 0;
    dataTable.innerHTML = "";

    if (productContainer.length == 0){
        tableContainer.classList.remove('hidden-message');
        table.classList.add("hide");    // elements with hide class have display:none;
        document.querySelector(".table-container").style.overflowY = "hidden";  // the scrollbar should not be visible when the table is empty and we are just showing the data
    } else {
        tableContainer.classList.add('hidden-message');
        table.classList.remove('hide');
        let rows = "";

        for (let i=0; i<productContainer.length; i++){
            rows = rows + "<tr>";
            rows = rows + `<td><span style = "height:80px; overflow:hidden">${productContainer[i].productName}</td>`;
            rows = rows + `<td>${productContainer[i].productPrice}</td>`;
            rows = rows + `<td>${productContainer[i].productBrand}</td>`;
            rows = rows + `<td>${productContainer[i].productQuantity}</td>`;
            rows = rows + `<td class="btn-cell"><button style="color:red;" id="delete-btn" onclick = deleteProduct(${i})><i class="fa-solid fa-trash"></i></button><button style="color:blue;" id="update-btn" onclick = updateProduct(${i})><i class="fa-solid fa-pen-to-square"></i></button></td>`;
            rows = rows + "</tr>";
            productCount = productCount + Number(productContainer[i].productQuantity);
        }

        dataTable.innerHTML = rows;
    }

    productCountBox.innerHTML = productCount;
}

const updateSelectedRow = ()=>{

    console.log(tableRows.length);
    for (let i=0; i<tableRows.length; i++){
        if (i==itemNo){   
            console.log("badiya");
            dataTable.children[i].style.backgroundColor = cellColors[2];
        } else {
            console.log("sahi hai");
            dataTable.children[i].style.backgroundColor = cellColors[i%2];
        }
    }
}

const deleteProduct = (i) => {

    if (!isUpdating){
        
        let http = new XMLHttpRequest();
        let formData = new FormData(form);
        formData.append("index",i);
        http.open("POST", "delete.php", true);
        http.send(formData);
        location.reload();
    } else {
        alert("While Updating an item record, you can't perform deletion");
    }
}

const updateProduct = (i)=>{

    addBtn.textContent = "Update";
    isUpdating = true;
    showProducts();
    itemNo = i;
    updateSelectedRow();

    // Setting the form fields as the selected element's value
    proName.setAttribute("value",productContainer[i].productName);
    proPrice.setAttribute("value",productContainer[i].productPrice);
    proBrand.setAttribute("value",productContainer[i].productBrand);
    proQuantity.setAttribute("value",productContainer[i].productQuantity);

}

const updateProductInfo = (i, func)=>{

    let http = new XMLHttpRequest();
    let formData = new FormData(form);
    formData.append("index",i);
    http.open("POST", "update.php", true);

    http.onreadystatechange = ()=>{
        if (http.readyState == 4 && http.status == 200){
            func();
        }
    }

    http.send(formData);

    addBtn.textContent = "Add";
    isUpdating = false;
    itemNo = -1;
}

const addProducts = ()=>{

    let http = new XMLHttpRequest();
    let formData = new FormData(form);
    http.open("POST", "add.php", true);
    http.send(formData);

}

addBtn.addEventListener("click", ()=>{
    
    let proNameValue = proName.value;
    let proPriceValue = proPrice.value;
    let proBrandValue = proBrand.value;
    let proQuantityValue = proQuantity.value;

    if (proNameValue == "" || proPriceValue == "" || proBrandValue == "" || proQuantityValue == "" || Number.isNaN(Number(proPriceValue)) || !Number.isInteger(Number(proQuantityValue))){
        alert("Enter Details Again.");
    } else if (addBtn.textContent == "Add"){
        addProducts();
    } else {
        updateProductInfo(itemNo, ()=>{
            updateSelectedRow();
        });
    }
    showProducts();
});

window.addEventListener("DOMContentLoaded", ()=>{
    tableRows = document.querySelectorAll("tbody tr");
    fetchProducts(function(){
        showProducts();
    });
});
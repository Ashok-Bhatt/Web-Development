
const fileUploader = document.querySelector('#file-uploader');
const imageContainer = document.querySelector('.image-container');
const errorContainer = document.querySelector('.error-container');

fileUploader.addEventListener('change', ()=>{

    imageContainer.innerHTML = "";
    errorContainer.innerHTML = "";

    file = fileUploader.files[0];
    if (file){
        if (file.type === 'image/png'){
            const reader = new FileReader();
            reader.onload = (e)=>{
                const image = document.createElement('img');
                image.src = e.target.result;
                imageContainer.appendChild(image);
            }
        } else {
            errorContainer.textContent = "Selected file is not a gif file."
        }
    } else {
        errorContainer.textContent = "No File Selected";
    }
});
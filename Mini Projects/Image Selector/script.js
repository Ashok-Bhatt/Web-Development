
function displayImage() {
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');

    // Check if a file is selected
    if (fileInput.files.length > 0) {

        const file = fileInput.files[0];

        // console.log(fileInput.files);
        // console.log(file);
        // console.log(file.type);
        
        // Check if the selected file is an image
        if (file.type.match(/^image\//)) {
            const reader = new FileReader();

            reader.onload = function(e) {

                // console.log(e);
                // console.log(e.target);
                // console.log(e.target.result);

                const img = document.createElement('img');
                img.src = e.target.result;
                imageContainer.innerHTML = ''; // Clear previous image
                imageContainer.appendChild(img);
            }

            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file.');
        }
    } else {
        alert('Please select a file.');
    }
}

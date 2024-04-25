const preview = document.getElementById('preview');
const image  = document.getElementById('image');

let imageh = document.getElementById('imagehidden');

const reader  = new FileReader();

function previewFile() {

    const file    = document.getElementById('image').files[0];

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } 
    else {
      preview.src = imageh.value;
    }
}

previewFile();
image.addEventListener("change", previewFile);
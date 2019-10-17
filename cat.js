
// Update image on the screen
function update_image() {
    var img = document.querySelector('img');
    // Returns the first image
    var file = document.querySelector('input[type=file]').files[0];
    // Returns the first file element found
    img.src = window.URL.createObjectURL(file);
}


// Write the text onto the meme
function update_text() {
    var user_text = document.getElementById("user_text");
    var meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
}



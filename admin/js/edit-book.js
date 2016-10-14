function showAlert() {
    swal({
        title: "Sukces!",
        text: "Edytowano książkę!",
        type: "success"
    },
    function() {
        localStorage.clear();
        window.close();
    });
}


const author = document.getElementById('author');
const title = document.getElementById('title');
const bookDetails = JSON.parse(localStorage.getItem('book'));

author.value = bookDetails.author;
title.value = bookDetails.title

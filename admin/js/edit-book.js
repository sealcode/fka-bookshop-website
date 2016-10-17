function showAlert() {
    swal({
        title: "Sukces!",
        text: "Edytowano książkę!",
        type: "success"
    },
    function() {
        const bookDetails = JSON.parse(localStorage.getItem('book'));

        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        localStorage.clear();
        localStorage.setItem("modifiedBook", JSON.stringify({id: bookDetails.id, author: author, title: title}));
        window.close();
    });
}


const author = document.getElementById('author');
const title = document.getElementById('title');
const bookDetails = JSON.parse(localStorage.getItem('book'));

author.value = bookDetails.author;
title.value = bookDetails.title

function showAlert() {
    const patt = new RegExp('^[1-9][0-9]*$');
    const codes = document.getElementById('codes').value;

    if(patt.test(codes)) {
        swal({
            title: "Sukces!",
            text: "Wygenerowano kody!",
            type: "success"
        },
        function() {
            const bookDetails = JSON.parse(localStorage.getItem('book'));

            localStorage.clear();
            localStorage.setItem("generatedCodes", JSON.stringify({id: bookDetails.id, codes}));
            window.close();
        });
    }
    else {
        localStorage.clear();
        localStorage.setItem("generatedCodes", "-1");
    }
}

const author = document.getElementById('author');
const title = document.getElementById('title');
const bookDetails = JSON.parse(localStorage.getItem('book'));

author.textContent = bookDetails.author;
title.textContent = bookDetails.title

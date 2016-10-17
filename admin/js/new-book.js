let error = true;

function validNameHandler(element) {
    const pattern = new RegExp('[0-9]+');
    console.log(element.value);
    if (pattern.test(element.value) || element.value === '') {
        element.style.border = "1px solid red";
        error = true;
    }
    else {
        element.style.border = "1px solid green";
        error = false;
    }
}


function showAlert() {

    // for (let i = 0; i < fields.length; i++) {
    //     if (fields[i].value === "") {
    //         fields[i].style.border = "1px solid red";
    //         error = true;
    //     }
    // }
    if (error) {
        swal("Ups...", "Wystąpil bląd w wymaganych polach!", "error");
        localStorage.setItem("newBook", null);
    }
    else {
        swal({
            title: "Sukces!",
            text: "Dodano nową książkę do bazy danych!",
            type: "success"
        },
        function() {
            const author = document.getElementById('author').value;
            const title = document.getElementById('title').value;
            const codes = document.getElementById('codes').value;

            localStorage.setItem("newBook", JSON.stringify({author, title, codes}));
            window.close();
        });
    }
}

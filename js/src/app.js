import qwest from 'qwest';


qwest.get("http://google.pl")
    .then(function(result, lol) {
        console.log(result, lol);
    })

document.querySelector("#btn-search").addEventListener("click", function(){
    const trip = document.querySelector('#recherche').value;

	fetch('http://localhost:3000/trips', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ trip }),
	})
    .then(response => response.json())
    .then(data => {
        if(data.result){
            document.querySelector("#resultat").innerHTML += trip
        }
        })
    })


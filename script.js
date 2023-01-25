document.querySelector("#btn-search").addEventListener("click", function(){
    const trip = {
        departure : document.querySelector('#departure').value,
        arrival : document.querySelector('#arrival').value,
    }
	fetch('http://localhost:3000/trips', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ trip }),
	})
    .then(response => response.json())
    .then(data => {
        if(data.result){
            window.location.assign ("#resultat")
        }else {
            return ("./image/notfound.png")
        }
    })
})


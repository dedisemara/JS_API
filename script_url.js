fetch('https://datasekolahapi.herokuapp.com/api/data/sd/jakarta/jagakarsa')
    .then(response => response.json())
    .then(data => console.log(data)); 
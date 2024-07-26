document.getElementById('mainButt').addEventListener('click', getChuckNorrisJoke);

function getChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            displayJoke(data.value);
        })
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
        });
        
}

function displayJoke(joke) {
    document.getElementById('jokeBox').style.display = 'block';
    const jokeBox = document.getElementById('jokeBox');
    jokeBox.innerHTML = `<p>${joke}</p>`;
}
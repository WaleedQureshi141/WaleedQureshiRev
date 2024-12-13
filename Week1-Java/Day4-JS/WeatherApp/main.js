console.log("test");

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const location = document.getElementById('city') // this should not be null
    const myAPI = ""; // always hide API key, this is bad practice
    const url = "";
    fetch(url)
        .then(response => response.json())  // as soon as you get reponse from server to json
        .then(data => console.log(data))
        .catch(error => 
        {
            console.log(error);
        }
        );
});
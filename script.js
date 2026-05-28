//Get input elements
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const cityName = document.getElementById('cityName')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('windSpeed')

//Event listener for search button that reads the input value and prints it to the console
searchButton.addEventListener('click', (event) => {
    city = searchInput.value
    console.log(city)
})

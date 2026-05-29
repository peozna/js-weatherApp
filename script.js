//Get input elements
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const cityName = document.getElementById('cityName')
const temperature = document.getElementById('temperature')
const description = document.getElementById('description')
const windSpeed = document.getElementById('windSpeed')

//Event listener for search button that reads the input value and prints it to the console
searchButton.addEventListener('click', (event) => {
    const city = searchInput.value
    
    //Fetch the coordinates of the city using the Nominatim API
    fetch('https://nominatim.openstreetmap.org/search?q=' + city + '&format=json')
          .then(res => res.json())
          .then(data => {
            if(data.length === 0) {
                alert('City not found')
                return
            }
            const lat = data[0].lat
            const lon = data[0].lon
            
            //Fetch the weather data using the Open-Meteo API
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true')
            .then(res => res.json())
            .then(data => {
               temperature.textContent = "Temperature: " + data.current_weather.temperature + "°C"

               //The weather code is a number that represents the current weather condition. The following codes are used:
                description.textContent = data.current_weather.weathercode
                    if(data.current_weather.weathercode === 0) {
                        description.textContent = "Clear sky"
                    }
                    else if(data.current_weather.weathercode > 0 && data.current_weather.weathercode <= 3) { 
                        description.textContent = "Partly cloudy"
                    }
                    else if(data.current_weather.weathercode > 3 && data.current_weather.weathercode <= 48) { 
                        description.textContent = "Cloudy"
                    }
                    else if(data.current_weather.weathercode > 48 && data.current_weather.weathercode <= 57) {
                        description.textContent = "Fog"
                    }
                    else if(data.current_weather.weathercode > 57 && data.current_weather.weathercode <= 67) {
                        description.textContent = "Drizzle"
                    }
                    else if(data.current_weather.weathercode > 67 && data.current_weather.weathercode <= 77) {
                        description.textContent = "Rain"
                    }
                    else if(data.current_weather.weathercode > 77 && data.current_weather.weathercode <= 86) {
                        description.textContent = "Snow"
                    }
                    else if(data.current_weather.weathercode > 86 && data.current_weather.weathercode <= 95) {
                        description.textContent = "Thunderstorm"
                    }

               windSpeed.textContent = "Wind Speed: " + data.current_weather.windspeed + " km/h"
               cityName.textContent = city
          })

        })})



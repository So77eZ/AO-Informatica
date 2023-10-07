const changeInputValue = () => {
    document.getElementById('city-name').value = document.getElementById('select').value;
}

const fetchWeather = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ad3df4030a233c298c8cf93b05395a7&lang=ru`;

    fetch(url).then((res) => {
        res.json().then((result) => {
            document.getElementById('weather').innerHTML = JSON.stringify(result);
            const { weather: [{ description }], main: { temp, feels_like, pressure }, wind: { speed }, sys: { sunrise, sunset, country }, name } = result
            document.getElementById('temperature').innerHTML = Math.ceil(temp - 273.15);
            document.getElementById('feels_like').innerHTML = Math.ceil(feels_like - 273.15);
            document.getElementById('pressure').innerHTML = pressure;
            document.getElementById('windSpeed').innerHTML = speed;
            document.getElementById('sunrise').innerHTML = new Date(sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').innerHTML = new Date(sunset * 1000).toLocaleTimeString();
            document.getElementById('description').innerHTML = description;
            document.getElementById('location').innerHTML = `${country} ${name}`;
            console.log(temp, feels_like)
        });
    });
}
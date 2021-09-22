const updatetemp = document.getElementById('update-temp');
const updateName = document.getElementById('name-change');
const cloud = document.getElementById('cloud');


const searchButton = document.getElementById("button-addon2");
const inputField = document.getElementById('input-field');

inputField.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key == "Enter") {
        searchButton.click();
    }

});


const searchWeather = () => {
    const myKey = '201eb54ac45ac6cf1f16d21e4db1606b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${myKey}&units=metric`)
        .then(res => res.json())
        .then(data => displayWeather(data));
    inputField.value = "";
}

const displayWeather = data => {
    const temparature = data.main;
    const modifyTemp = temparature.temp;
    updatetemp.innerText = modifyTemp;
    updateName.innerText = data.name;

    const weather = data.weather[0];
    cloud.innerText = weather.main;

    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

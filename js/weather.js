const inputField = document.getElementById('input-field');
const updatetemp = document.getElementById('update-temp');
const updateName = document.getElementById('name-change');
const cloud = document.getElementById('cloud');
const weatherImg = document.getElementById('weather-img');


const searchWeather = () => {
    const myKey = '201eb54ac45ac6cf1f16d21e4db1606b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${myKey}&units=metric`)
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

    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

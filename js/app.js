const APIKye = `a9adb56ba96da18059828a5ed9594a49`;
document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('input-city').value;
    if (city === '') {
        alert('Please input a city');
        return;
    }
    loadData(city);
});

const loadData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKye}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    // console.log(data.cod);
    if(data.cod === '404'){
        alert('City not found!!!');
        return;
    }
    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = data.main.temp;
    // console.log(data.weather[0].main)
    document.getElementById('weather-status').innerText = data.weather[0].main;
}

loadData('dhaka');
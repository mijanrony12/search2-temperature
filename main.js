
const searchBtnHandler = () => {
         const input = document.getElementById('input-field');
         const inputValue = input.value;
    if (input.value <= 0 || input.value === '404')
    {
        alert('give me a city name')
    } else
    {
        
         input.value = '';
         getAddress(inputValue);
    }
   
}

const getAddress = async (cityName) => {
    const apiKey = `6d279baf3a57d350ca3162fc15a46f69`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try
    {
        const res = await fetch(url)
        const data = await res.json();
        displayDetails(data);
    }
    catch (err){
        console.log(err)
    }
}

const displayDetails = (weather) => {
    console.log(weather);
    let minus = 273;
    let real = weather.main.temp
    let total = (real - minus).toFixed(2);
    const displayHere = document.getElementById('display-data');
    displayHere.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="">
            <h1>${weather.name}</h1>
            <h3><span>${total}</span>&deg;C</h3>
            <h1 class="lead">${weather.weather[0].main}</h1>
    `;
}
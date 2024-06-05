const apiKey = "b5dbabcebd3ea263068e687a9be12154";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wwicon = document.querySelector(".wicon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();
    //check await and .json()
    
    //check .innerHTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
   // if(data.weather[0].main == "Clouds"){
     //   wwicon.src = ""
    //}
    document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress",(event)=>{
    if(event.keyCode === 13){
    checkWeather(searchBox.value);}
})




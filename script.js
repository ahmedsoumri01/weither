let weather={
    "api_key": "c33c80d29c32b117c91ee98814593039",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.api_key
        )
        .then((response) =>response.json())
        .then((data) => this.displayweather(data));
        
    },
    displayweather: function (data) {
        const { name }=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const{speed}=data.wind;
        const {country}=data.sys
        document.querySelector(".city").innerText ="weither in " +name+" "+country;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".description").innerText =description;
        document.querySelector(".temp").innerText =temp+"°C";
        document.querySelector(".humidity").innerText ="humidity: "+humidity+"%";
        document.querySelector(".wind").innerText ="wind speed: "+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click",function(){
weather.search()
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
if (event.key == "Enter"){ 
    weather.search();
}
});
weather.fetchweather("denver")
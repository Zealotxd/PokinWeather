const appKey ="47d374eb552814a2efe4c1f92ffd33de"

const searchbtn = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search-txt")

const cityName = document.querySelector("city-name")
const icon = document.querySelector("#icon")
const temperature = document.querySelector("#temp")
const humidity = document.querySelector("#humid")

searchbtn.addEventListener("click",findWeatherDetails);
searchInput.addEventListener("keyup",enterPressed);

function enterPressed (event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}

function findWeatherDetails(){
    if(searchInput.value ===""){

    } else {
        const searchlink ="https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value +"&appid" + appKey;
        httpRequestAsync(searchlink,theResponse)
    }
}

function theResponse(response) {
    const jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon +".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp-273)+"°";
    humidity.innnerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url,callback){
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
        }
    }
    httpRequest.open("GET",url,true);
    httpRequest.send();
}
   
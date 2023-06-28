const input = document.querySelector("input");
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");

const weatherApi = new WeatherApi();

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit",callCity);
}

function callCity(e){
    cityName=input.value.trim();
    input.value="";
    cardBody.innerHTML ="";
    weatherApi.getWeather(cityName)
    .then(result => {
        console.log(result);
        display(result);
    })
    .catch(err => console.log(err));



    e.preventDefault();
}

function display(result){
    const cityHeader = document.createElement("h2");
    cityHeader.style="font-size 40px; margin:15px;";
    cityHeader.textContent=result.name;

    const degree = document.createElement("h1");
    degree.className = "degree";
    degree.style = "font-size: 50px; margin: 15px;";
    degree.textContent=Math.round(result.main.temp) + "°";

    const desc = document.createElement("h2");
    desc.className = "desc";
    desc.style = "font-size:20px; margin: 15px;";
    desc.textContent = result.weather[0].description;

    cardBody.appendChild(cityHeader);
    cardBody.appendChild(degree);
    cardBody.appendChild(desc);
}



/*<h2 class="cityName" style="font-size: 35px;">Ankara</h2>
                <h1 class="degree" style="font-size: 50px;">9°</h1>
                <h2 class="desc" style="font-size: 20px;">Parçalı Bulutlu</h2> */
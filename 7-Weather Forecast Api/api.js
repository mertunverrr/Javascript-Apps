class WeatherApi {
    constructor() {
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "40665c4560daabdd1c0936d75865ae86";
    }

    async getWeather(cityName) {
        const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
        const data = await response.json();
        return data;
    
    }
    
}

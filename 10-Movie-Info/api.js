class Api {
    constructor() {
        this.url = "http://www.omdbapi.com/"
        this.apiKey = "1e59eb55"
    }
    async getInfo(name){
    const response =await fetch(`${this.url}?t=${name}&apikey=${this.apiKey}`)
    const data = await response.json();
    return data;
}
}
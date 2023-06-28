class Currency {
    constructor() {
        this.url = `https://api.freecurrencyapi.com/v1/latest?apikey=zaoKZ9qSuewwpcDPeXkMhGEJEp7YPxtAQYjy1eUm&base_currency=`;

    }
    async exchange(amount, firstOption, secondOption) {
        const response = await fetch(`${this.url}${firstOption}`);
        const result = await response.json();
        const exchangeResult = amount * result.data[secondOption];
        
        return exchangeResult;
    }
}
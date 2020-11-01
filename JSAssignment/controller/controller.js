class Controller {

    constructor() {}

    // starts functions for loading country and currency data
    init() {
        this.countriesLoad();
        this.currenciesLoad();
    }

    // loads countries from countries.json and stores in array countries
    // calls function weatherLoad() to get weather data for loaded countries
    countriesLoad() {
        model.countriesLoad()
        .then(response => response.json())
        .then(function(data) {   
            countries = data;
            console.log(countries);
            view.selectCity();
        })
        .catch(error => alert(error))
    }

    // loads latest echangerates from exhangerate-api.com and stores it in array exchangeRates
    currenciesLoad() {
        model.currenciesLoad()
        .then(response => response.json())
        .then(function(data) {   
            exchangeRates = data;
            currencyKeys = Object.keys(exchangeRates.conversion_rates);
            console.log(exchangeRates);    
            view.selectCurrency();
        })
        .catch(error => alert(error))
    }

    // loads 5 days weather forecast data from openweathermap.org and stores in array weather
    weatherLoad(cityIndex) {
        model.weatherLoad(countries[cityIndex].id)
        .then(response => response.json())
        .then(function(data) {
            console.log(data); 
            view.showWeather(data);
        })
        .catch(error => alert(error))
    }

    // loads the selected city in the view
    cityShow(cityIndex) {
        view.showCity(cityIndex);
    }
    
    // process currency exchange to the currency of the selected city
    currencyExchange(fromAmount, fromCurrency, cityIndex) {

        let toAmount = (fromAmount * 
                        exchangeRates.conversion_rates[countries[cityIndex].currency]) / 
                        exchangeRates.conversion_rates[fromCurrency].valueOf();

        view.showExchange(toAmount.toFixed(2));
    }   
}
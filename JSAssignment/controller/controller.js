class Controller {

    constructor() {}

    // starts functions for loading country, currenxy and weather data
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
            controller.weatherLoad();
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
            console.log(exchangeRates);
            alert(exchangeRates.conversion_rates)
            view.selectCurrency();
        })
        .catch(error => alert(error))
    }

    // loads 5 days weather forecast data from openweathermap.org and stores in array weather
    weatherLoad() {
        //let url = this. weatherURL();
        model.weatherLoad()
        .then(response => response.json())
        .then(function(data) {   
            weather = data;
            console.log(weather);
        })
        .catch(error => alert(error))
    }

    // loads the selected city in the view
    cityShow(cityIndex) {
        view.showCity(cityIndex);
    }
    
    // process currency exchange to the currency of the selected city
    currencyExchange(currency) {
        //view.selectCurrency(currency);
    }
    
}
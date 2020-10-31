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
            //controller.weatherLoad();
            //controller.currenciesLoad();
            view.selectCity();
        })
        .catch(error => alert(error))
    }

    // loads latest echangerates from exhangerate-api.com and stores it in array exchangeRates
    currenciesLoad() {
        model.currenciesLoad()
        .then(response => response.json())
        .then(function(data) {   
            exchangeRates = data.conversion_rates;
            //currencyKeys = Object.keys(exchangeRates.conversion_rates);
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
            weather.current = data;
            console.log(weather.current);
        })
        .catch(error => alert(error))

        return weather;
    }

    // loads the selected city in the view
    cityShow(cityIndex) {
        view.showCity(cityIndex);
    }
    
    // process currency exchange to the currency of the selected city
    currencyExchange(fromAmount, toCurrency) {

        let toAmount = 0;

        alert(toCurrency);
        alert(exchangeRates.length)

        //alert(fromAmount, toCurrency)
        for(let i = 0; i < exchangeRates.length; i++) {
            if(i == exchangeRates.conversion_rates[toCurrency]) {
                toAmount = fromAmount / exchangeRates[i]; 
            }
        }

        view.showExchange(toAmount);
    }   
}

class Controller {

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
    
    // formatting the date to openweathermap's dt_txt format
    formatDate(dt) {
        // "2020-11-01 03:00:00"
        let htmlDate = '';

        htmlDate += dt.getFullYear(dt) + '-';

        if(dt.getMonth(dt) < 10){
            htmlDate += '0';
        }
        htmlDate += (dt.getMonth(dt) + 1) + '-';

        if(dt.getDate(dt) < 10){
            htmlDate += '0';
        };
        htmlDate += dt.getDate(dt) + ' ';

        if(dt.getHours(dt) < 10) {
            htmlDate += '0';
        };
        htmlDate += dt.getHours(dt) + ':';
            
        if(dt.getMinutes(dt) < 10) {
            htmlDate += '0';
        };
        htmlDate += dt.getMinutes(dt) + ':';

        if(dt.getSeconds(dt) < 10) {
            htmlDate += '0';
        };
        htmlDate += dt.getSeconds(dt);

        return htmlDate;
    }

    // convert day to name of weekday
    formatDay(dtDay) {
        let day = '';
        switch (dtDay){
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
        }
        return day;
    }

    // convert month to name of month
    formatMonth(dtMonth) {
        let month = '';
        switch (dtMonth){
            case 0:
                month = 'January';
                break;
            case 1:
                month = 'February';
                break;
            case 2:
                month = 'March';
                break;
            case 3:
                month = 'April';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'June';
                break;
            case 6:
                month = 'July';
                break;
            case 7:
                month = 'August';
                break;
            case 8:
                month = 'September'
                break;    
            case 9:
                month = 'October';
                break;
            case 10:
                month = 'November';
                break;
            case 11:
                month = 'December';
                break;
        }
        return month;
    }
}
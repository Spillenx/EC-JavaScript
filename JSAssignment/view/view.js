class View {

    selectCity() {
        let cityList = '<option value="0">Select city</option>';
        for (let i = 0; i < countries.length; i++) {
            cityList += '<option value="' + i + '">' + countries[i].city + '</option>';
        }   
        Helper.setHtml('city-list', cityList);
    }

    selectCurrency() {
        let currencyList = '';
        for (let i = 0; i < currencyKeys.length; i++) {
            //if(currencyKeys[i] != countries[cityIndex].currency) {
                currencyList += '<option value="' + i + '">' + currencyKeys[i] + '</option>';
            //} 
        }
        
        Helper.setHtml('exchange-from', currencyList);
    }

    showCity(cityIndex) {
        let htmlCity = '';
        htmlCity += 'Country: ' + countries[cityIndex].country + '<br>';
        htmlCity += 'City: ' + countries[cityIndex].city + '<br>';
        htmlCity += 'Currency: ' + countries[cityIndex].currency + '<br>';

        Helper.setHtml('city-container', htmlCity);

        this.showWeather(cityIndex);
        this.showExchange(cityIndex);

        Helper.show('city-container');
        Helper.show('exchange-container');
        Helper.show('weather-container');
    }

    showWeather(cityIndex) {
        let htmlWeather = '';
        //"http://openweathermap.org/img/wn/" + icon + "@2x.png"
        htmlWeather += '<img src="http://openweathermap.org/img/wn/' + weather.list[cityIndex].weather[0].icon + '@2x.png"><br>';
        htmlWeather += weather.list[cityIndex].main.temp;

        Helper.setHtml('weather-container', htmlWeather);
    }

    showExchange(cityIndex) {
        Helper.setHtml('current-currency', countries[cityIndex].currency);
    }
}
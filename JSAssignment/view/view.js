class View {

    // loading cities from countries.json into dropdown
    selectCity() {
        let cityList = '<option value="0">Select city</option>';
        for (let i = 0; i < countries.length; i++) {
            cityList += '<option value="' + i + '">' + countries[i].city + '</option>';
        }   
        Helper.setHtml('city-list', cityList);
    }

    // loading currencies from exchangerate-api to dropdown 
    selectCurrency() {
        let currencyList = '';
        for (let i = 0; i < currencyKeys.length; i++) {
            currencyList += '<option value="' + currencyKeys[i] + '">' + currencyKeys[i] + '</option>';
        }
        Helper.setHtml('exchange-from', currencyList);
    }

    // show selected city
    showCity(cityIndex) {
        Helper.clearInput('exchange-amount');
        Helper.setHtml('recieved-amount', '');

        let htmlCity = '';
        htmlCity += 'Country: ' + countries[cityIndex].country + '<br>';
        htmlCity += 'City: ' + countries[cityIndex].city + '<br>';
        htmlCity += 'Currency: ' + countries[cityIndex].currency + '<br>';

        Helper.setHtml('city-container', htmlCity);
        Helper.setHtml('current-currency', countries[cityIndex].currency);

        controller.weatherLoad(cityIndex);

        Helper.show('city-container');
        Helper.show('weather-container');
        Helper.show('exchange-container');
    }

    // show weather from the selected city
    showWeather(data) {

        // find the index with the time 12:00:00
        let startIndex = 0;
        for(let i = 0; i < data.list.length; i++) {
            
            if(data.list[i].dt_txt.indexOf('12:00') != -1 && startIndex == 0) {
                startIndex = i;
            }
        }
        
        // show 5 day forecast at 12.00 local time
        //let htmlWeather = 'Weather forecast:';
        let htmlWeather = '';
        for(let i = startIndex; i < data.list.length; i += 8) {
   
            var dt = new Date(data.list[i].dt_txt);

            htmlWeather += '<div class="weather-item">';
                htmlWeather += '<div class="weather-header">';
                    htmlWeather += controller.showDay(dt.getDay(dt)) + ' ';
                    htmlWeather += dt.getDate(dt) + ' ';
                    htmlWeather += controller.showMonth(dt.getMonth(dt)) + ' ';
                    htmlWeather += dt.getHours(dt) + ':' + dt.getMinutes(dt);
                        if(dt.getMinutes(dt) < 10){
                            htmlWeather += '0';
                        }
                htmlWeather += '</div>';
                htmlWeather += '<div class="weather-body">';
                    htmlWeather += '<div class="weather-info">';
                    htmlWeather += 'Weather: ' + data.list[i].weather[0].description + '<br>';
                    htmlWeather += 'Temperature : ' + data.list[i].main.temp.toFixed(1) + '&#8451;<br>';
                    //htmlWeather += 'Date and time: ' + data.list[i].dt_txt;
                htmlWeather += '</div>';
                htmlWeather += '<img src="http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png">';
                htmlWeather += '</div>';
            htmlWeather += '</div>';
            
            dt.setDate(dt.getDate() + 1)
        }
        Helper.setHtml('weather-container', htmlWeather);
    }

    // show the exhanged amount
    showExchange(toAmount) {
        Helper.setHtml('recieved-amount', toAmount);
    }
}
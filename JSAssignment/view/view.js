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
            currencyList += '<option value="' + currencyKeys[i] + '">' + currencyKeys[i] + '</option>';
        }
        
        Helper.setHtml('exchange-from', currencyList);
    }

    showCity(cityIndex) {
        let htmlCity = '';
        htmlCity += 'Country: ' + countries[cityIndex].country + '<br>';
        htmlCity += 'City: ' + countries[cityIndex].city + '<br>';
        htmlCity += 'Currency: ' + countries[cityIndex].currency + '<br>';

        Helper.setHtml('city-container', htmlCity);
        Helper.setHtml('current-currency', countries[cityIndex].currency);

        this.showWeather(cityIndex);

        Helper.show('city-container');
        Helper.show('weather-container');
        Helper.show('exchange-container');
    }

    showWeather(cityIndex) {

        controller.weatherLoad(cityIndex);

        let htmlWeather = 'Weather at 12.00 PM local time: <br><br>';
        //"http://openweathermap.org/img/wn/" + icon + "@2x.png"
        //htmlWeather += '<img src="http://openweathermap.org/img/wn/' + weather.list[cityIndex].weather[0].icon + '@2x.png"><br>';
        //htmlWeather += weather.list[cityIndex].main.temp;

        var dt = new Date();
        dt.setHours(12,0,0,0);
        var dayIndex = 0;

        for(let i = 0; i < 5; i++) {
            htmlWeather += this.showDay(dt.getDay(dt)) + ' ';
            htmlWeather += dt.getDate(dt) + ' ';
            htmlWeather += this.showMonth(dt.getMonth(dt)) + ' <br>';
            //htmlWeather += '<img src="http://openweathermap.org/img/wn/' + weather.list[dayIndex].weather.icon + '@2x.png"><br>';
            //htmlWeather += 'Weather: ' + weather[dayIndex].list.weather.description + '<br>';
            //htmlWeather += 'Temperature : ' + weather.list[dayIndex].main.temp + '<br><br>';
            dayIndex += 8;
            dt.setDate(dt.getDate() + 1)
        }

        Helper.setHtml('weather-container', htmlWeather);
    }

    showDay(dtDay) {
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

    showMonth(dtMonth) {
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
                month = 'Decemer';
                break;
        }
        return month;
    }

    showExchange(toAmount) {
        Helper.setHtml('recieved-amount', toAmount);
    }
}
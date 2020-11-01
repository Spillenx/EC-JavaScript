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

        // todays date at 12.00 pm
        var dt = new Date();
        dt.setHours(12,0,0,0);
        let htmlDate = this.formatDate(dt);

        // find the index with the time 12:00:00
        let startIndex = 0;
        for(let i = 0; i < data.list.length; i++) {
            if(htmlDate == data.list[i].dt_txt) {
                startIndex = i;
            }
        }
        
        // show 5 day forecast at 12.00 local time
        let htmlWeather = 'Weather forecast: <br><br>';
        for(let i = startIndex; i < data.list.length; i += 8) {
            htmlWeather += this.showDay(dt.getDay(dt)) + ' ';
            htmlWeather += dt.getDate(dt) + ' ';
            htmlWeather += this.showMonth(dt.getMonth(dt)) + ' <br>';
            htmlWeather += 'Date and time: ' + data.list[i].dt_txt + '<br>';
            htmlWeather += '<img src="http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png"><br>';
            htmlWeather += 'Weather: ' + data.list[i].weather[0].description + '<br>';
            htmlWeather += 'Temperature : ' + data.list[i].main.temp.toFixed(1) + '<br><br>';
            dt.setDate(dt.getDate() + 1)
        }
        Helper.setHtml('weather-container', htmlWeather);
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

    // convert month to name of month
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

    // show the exhanged amount
    showExchange(toAmount) {
        Helper.setHtml('recieved-amount', toAmount);
    }
}
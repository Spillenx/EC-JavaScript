class View {

    selectCity() {
        let cityList = '';
        for (let i = 0; i < countries.length; i++) {
            cityList += '<option value="' + i + '">' + countries[i].city + '</option>';
        }   
        Helper.setHtml('city-list', cityList);
    }

    showCity(cityIndex) {
        let html = '';
        html += 'Country: ' + countries[cityIndex].country + '<br>';
        html += 'City: ' + countries[cityIndex].city + '<br>';
        html += 'Currency: ' + countries[cityIndex].currency + '<br>';

        //"http://openweathermap.org/img/wn/" + icon + "@2x.png"
        html += '<img src="http://openweathermap.org/img/wn/' + weather.list[cityIndex].weather[0].icon + '@2x.png"><br>';
        html += weather.list[cityIndex].main.temp;

        Helper.setHtml('selected-city', html);
        Helper.show('selected-city');
    }
}
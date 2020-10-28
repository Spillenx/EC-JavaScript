class View {

    selectCity() {
        let cityList = '';
        for (let i=0; i<countries.length; i++) {
            cityList += '<option value="' + i + '">' + countries[i].city + '</option>';
        }   
        Helper.setHtml('city-list', cityList);
    }

    showCity() {

    }
    
    showWeather() {
        //"http://openweathermap.org/img/wn/" + icon + "@2x.png"
        let html = '';

        for(let i = 0; i < weather.list.length; i++) {
            html += '<img src="http://openweathermap.org/img/wn/' + 'weather.list[i].weather[0].icon' + '@2x.png">';
        }

        Helper.setHtml('selected-weather', html);
        Helper.show('selected-weather');
    }
}
class Model {

    // fetch countries from local file countries.json
    async countriesLoad() {
        let promise = await fetch('json/countries.json');
        return promise;
    }

    // fetch currencies from exchangerate-api.com
    async currenciesLoad() {
        let promise = await fetch('');
        return promise;
    }

    // fetch weather data from openweathermap.org
    async weatherLoad() {
        let url = this.weatherURL();
        //url = url.substring(0, url.length);
        console.log(url);
        let promise = await fetch(url);
        return promise;
    }

    // generates url for openweather API with ID from all cities in countries.json
    weatherURL() {

        // ow_API_Key = 976ba469ccfcae3180d6448ff913c400
        // api.openweathermap.org/data/2.5/group?id={id,..,id}&appid={API key}

        let url_BASE = 'htps://api.openweathermap.org/data/2.5/group?id=';
        let url_KEYS = '&appid=976ba469ccfcae3180d6448ff913c400';
        let url_UNIT = '&units=metric';
        // let url_LANG = '&lang=SE';

        for(let i = 0; i < countries.length; i++) {
            url_BASE += countries[i].id + ',';
        }
        let url = url_BASE + url_KEYS + url_UNIT;
        //console.log(url);
        return url;
    }

}
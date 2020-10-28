class Model {

    // fetches countries from local file countries.json
    async countriesLoad() {
        let promise = await fetch('json/countries.json');
        return promise;
    }

    // fetches currencies from exchangerate-api.com
    // param String url
    async currenciesLoad() {
        let url = this.currenciesURL();
        //console.log(url);
        let promise = await fetch(url);
        return promise;
    }

    // fetches weather data from openweathermap.org
    // param String url
    async weatherLoad() {
        let url = this.weatherURL();
        //console.log(url);
        let promise = await fetch(url);
        return promise;
    }
    
    // genereates and returns url for exchangerate API
    currenciesURL() {

        // key = 86ac07a01d57484529525c6c
        // https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/SEK
    
        let url_BASE = "https://v6.exchangerate-api.com/v6/";
        let url_KEY = "86ac07a01d57484529525c6c";
        let url_CURRENCY = "/latest/SEK";
    
        let url = url_BASE + url_KEY + url_CURRENCY;
        return url;
    }
    
    // generates and returns url for openweather API with ID from all cities in countries.json
    weatherURL() {
    
        // key = 976ba469ccfcae3180d6448ff913c400
        // api.openweathermap.org/data/2.5/group?id={id,..,id}&appid={API key}
    
        let url_BASE = 'https://api.openweathermap.org/data/2.5/group?id=';
        let url_KEYS = '&appid=976ba469ccfcae3180d6448ff913c400';
        let url_UNIT = '&units=metric';
        //let url_LANG = '&lang=SE';
    
        for(let i = 0; i < countries.length; i++) {
            url_BASE += countries[i].id + ',';
        }
        url_BASE = url_BASE.substring(0, url_BASE.length -1);
        
        let url = url_BASE + url_KEYS + url_UNIT;
        return url;
    }
}
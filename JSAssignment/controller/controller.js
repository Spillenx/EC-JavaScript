class Controller {

    constructor() {}

    init() {
        model.countriesLoad()
        .then(response => response.json())
        .then(function(data) {   
            countries = data;
            console.log(countries);
            view.countriesShow(countries);
            controller.currenciesLoad();
            controller.weatherLoad();
        })
        .catch(error => alert(error))
    }

    currenciesLoad() {
        let url = this.currenciesUrl();
        model.currenciesLoad(url)
        .then(response => response.json())
        .then(function(data) {   
            currencies = data;
            console.log(currencies);
        })
        .catch(error => alert(error))
    }

    weatherLoad() {
        let url = this. weatherURL();
        model.weatherLoad(url)
        .then(response => response.json())
        .then(function(data) {   
            weather = data;
            console.log(weather);
        })
        .catch(error => alert(error))
    }

        // genereates and returns url forexchangerate API
        currenciesUrl() {

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
    
            let url_BASE = 'htps://api.openweathermap.org/data/2.5/group?id=';
            let url_KEYS = '&appid=976ba469ccfcae3180d6448ff913c400';
            let url_UNIT = '&units=metric';
            // let url_LANG = '&lang=SE';
    
            for(let i = 0; i < countries.length; i++) {
                url_BASE += countries[i].id + ',';
            }
            url_BASE = url_BASE.substring(0, url_BASE.length -1);
            let url = url_BASE + url_KEYS + url_UNIT;
            return url;
        }
}
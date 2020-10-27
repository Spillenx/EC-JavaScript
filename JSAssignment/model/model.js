class Model {

    // fetch countries from local file countries.json
    async countriesLoad() {
        let promise = await fetch('json/countries.json');
        return promise;
    }

    // fetch weather data from openweather API
    async weatherLoad() {
        let url = this.weatherURL();
        let promise = await fetch(url);
        return promise;
    }

    // generates url for openweather API with ID from all cities in countries.json
    weatherURL() {

        // ow_API_Key = 976ba469ccfcae3180d6448ff913c400
        // api.openweathermap.org/data/2.5/group?id={id,..,id}&appid={API key}

        let urlBASE = 'api.openweathermap.org/data/2.5/group?id=';
        let urlKEYS = '&appid=976ba469ccfcae3180d6448ff913c400';
        let urlUNIT = '&units=metric';
        // let urlLANG = '&lang=SE';

        for(let i = 0; i < countries.length; i++) {
            urlBASE += countries[i].id + ',';
        }
        let url = urlBASE + urlKEYS + urlUNIT;
        console.log(url);
        //return url;
    }

}
class Model {

    // fetches countries from local file countries.json
    async countriesLoad() {
        let promise = await fetch('json/countries.json');
        return promise;
    }

    // fetches currencies from exchangerate-api.com
    // param String url
    async currenciesLoad(url) {
        //let url = this.currenciesUrl();
        console.log(url);
        let promise = await fetch(url);
        return promise;
    }

    // fetches weather data from openweathermap.org
    // param String url
    async weatherLoad(url) {
        //let url = this.weatherURL();
        //url = url.substring(0, url.length);
        console.log(url);
        let promise = await fetch(url);
        return promise;
    }   
}
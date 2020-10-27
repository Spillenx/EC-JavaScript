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
        model.currenciesLoad()
        .then(response => response.json())
        .then(function(data) {   
            currencies = data;
            console.log(currencies);
        })
        .catch(error => alert(error))
    }

    weatherLoad() {
        model.weatherLoad()
        .then(response => response.json())
        .then(function(data) {   
            weather = data;
            console.log(weather);
        })
        .catch(error => alert(error))
    }

}
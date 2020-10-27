class Controller {

    constructor() {}

    init() {
        model.countriesLoad()
        .then(response => response.json())
        .then(function(data) {   
            countries = data;
            console.log(countries);
            view.countriesShow(countries);
        })
        .catch(error => alert(error))
    }
}
class Model {

    async countriesLoad() {
        let promise = await fetch('json/countries.json');
        return promise;
    }

}
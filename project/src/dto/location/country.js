export default class CountryDTO {
    /**
     * @param {Object} geo
     */
    constructor(geo) {
        this._countryCode = geo.country ? geo.country.iso_code : null;
        this._countryName = geo.country ? geo.country.names.en : null;
    }

    /**
     * @return {string}
     */
    get countryCode() {
        return this._countryCode;
    }

    /**
     * @return {string}
     */
    get countryName() {
        return this._countryName;
    }

    /**
     * @return {{country_code: *, country_name: *}}
     */
    get response() {
        return {
            "country_code": this.countryCode,
            "country_name": this.countryName
        }
    }
}

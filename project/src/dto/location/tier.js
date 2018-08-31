export default class TierDTO {

    /**
     * @param {string} tier
     */
    constructor(tier) {
        this._tier = tier
    }

    /**
     * @return {string}
     */
    get tier() {
        return this._tier
    }

    /**
     * @return {{tier: *}}
     */
    get response() {
        return {tier: this.tier}
    }
};

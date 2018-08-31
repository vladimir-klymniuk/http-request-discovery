import config from "../../config/config";
import tiers from "../../data/tiers"

/**
 * @param {string} countryCode
 *
 * @return {string}
 */
function lookup(countryCode) {
    for (let tier of config.tier.map) {
        let result = tiers[tier].find(function(element) {
            return countryCode.toUpperCase() === element;
        });

        if (null != result) {
            return tier;
        }
    }

    return config.tier.default_tier;
}

/**
 * @param {string} countryCode
 *
 * @return {string}
 */
export default function explore(countryCode) {
    return lookup(countryCode);
}

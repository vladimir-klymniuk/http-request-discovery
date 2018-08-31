const tierConfig = require('../data/tiers');

/**
 * @param {string} countryCode
 *
 * @return {string}
 */
function lookup(countryCode) {
    for (let tier of tierConfig.map) {
        let result = tierConfig[tier].find(function(element) {
            return countryCode.toUpperCase() === element;
        });

        if (null != result) {
            return tier;
        }
    }

    return tierConfig.default_tier;
}

const run = (event, ctx, callback) => {
    if (!event || !event.countryCode) {
        callback(
            new Error('Invalid event data, requires countryCode.')
        )
    } else {
        callback(null, {tier: lookup(event.countryCode)})
    }
};

module.exports = { run };
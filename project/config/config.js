const env = process.env;
const data_path = __dirname + '/../data/';

export default {
    env: env,
    debug: process.env.APP__DEBUG === "yes",
    httpPort: process.env.PORT || 8080,
    geo: {
        country: {
            file_path: data_path + 'GeoLite2-Country.mmdb'
        }
    },
    tier: {
        default_tier: "tier-1",
        map: [
            "tier-1",
            "tier-2",
            "tier-3"
        ],
        file_path: data_path + 'tiers.js'
    },
    wurfl: {
        file_path: data_path + 'wurfl.xml',
        info_groups: [
            "product_info",
            "display",
            "generic_mobile",
            "virtual"
        ]
    }
}

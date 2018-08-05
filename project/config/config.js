const env = process.env;

export default {
    env: env,
    debug: process.env.APP__DEBUG === "yes",
    httpPort: process.env.PORT || 9981,
    geo: {
        file_path: __dirname + '/../data/GeoLite2-Country.mmdb'
    }
}
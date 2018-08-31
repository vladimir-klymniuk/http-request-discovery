const maxmind = require('maxmind')

const path = __dirname + '/../data/GeoLite2-Country.mmdb';
const country = maxmind.openSync(path);

const run = (event, ctx, callback) => {
  if (!event || !event.ip) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
  } else {
    let geo = country.get(event.ip);

    if (null != geo) {
        callback(null, {
            "country_code": geo.country ? geo.country.iso_code : null,
            "country_name": geo.country ? geo.country.names.en : null
        })
    } else {
        callback(
            new Error('Invalid event data, requires correct IP address')
        )
    }

  }
};

module.exports = { run }
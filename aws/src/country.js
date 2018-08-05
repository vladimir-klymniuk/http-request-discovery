const maxmind = require('maxmind')

const path = __dirname + '/../data/GeoLite2-Country.mmdb';
const country = maxmind.openSync(path);

const run = (event, ctx, callback) => {
  if (!event || !event.ip) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
  } else {
      callback(null, country.get(event.ip))
  }
};

module.exports = { run }
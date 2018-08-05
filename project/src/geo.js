import maxmind from 'maxmind';

const path = __dirname + '/../data/GeoLite2-Country.mmdb';
const country = maxmind.openSync(path);

export function countryLookup(ip) {
    return country.get(ip);
}
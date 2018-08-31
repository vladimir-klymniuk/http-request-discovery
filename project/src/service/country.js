import maxmind from 'maxmind'
import config from "../../config/config";

const storage = maxmind.openSync(config.geo.country.file_path);

/**
 * @param {String} ip
 *
 * @return {Object|null}
 */
export default function explore(ip) {
    return storage.get(ip);
}
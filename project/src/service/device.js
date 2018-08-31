import fs from 'fs'
import expat from "node-expat"
import config from "../../config/config";
import Device from '../dto/device/device'
import {Group, GroupClass} from '../dto/device/group'

const wurfSource = fs.readFileSync(config.wurfl.file_path);
const DeviceStorage = packageDevices(parse(wurfSource, config.wurfl.info_groups));

/**
 * @param {String} userAgent
 *
 * @return {Device|null}
 */
export default function explore(userAgent) {
    return DeviceStorage[userAgent];
}

function parse(contents, groups) {

    let parser = new expat.Parser();
    let devices = [];
    let device;
    let group;

    parser.on('startElement', function(name, attr) {
        if (name === 'device') {
            device = attr;
            device.groups = {};
            devices.push(device);
        } else if (name === 'group') {
            // if groups is provided, don't parse groups not in the array
            if (groups && groups.indexOf(attr.id) === -1) {
                group = null;
            } else {
                device.groups[attr.id] = group = {};
            }
        } else if (name === 'capability' && group) {
            let value = attr.value;

            if (parseFloat(value).toString() === value) {
                value = parseFloat(value);
            } else if (value === 'false') {
                value = false;
            } else if (value === 'true') {
                value = true;
            }

            group[attr.name] = value;
        }
    });

    parser.parse(contents);

    return devices;
}
function packageDevices(devices) {

    let agents = new Map();

    // add the lookup first
    devices.forEach(function(device) {
        devices[device.id] = device;
    });

    // create device objects from each one
    devices.forEach(function(device, i, array) {

        if (device instanceof Device) {
            return;
        }

        array[i] = createDevice(device, devices, agents);
    });

    return agents;
}
function createDevice(attr, lookup, agents) {

    if (attr.fall_back !== 'root' && !(lookup[attr.fall_back] instanceof Device)) {
        createDevice(lookup[attr.fall_back], lookup, agents);
    }

    let groups = attr.groups;
    delete attr.groups;
    let device = new Device(attr);
    lookup[device.id] = device; // add a lookup by id
    agents[device.user_agent] = device; // and a lookup by user agent

    let parent = lookup[attr.fall_back];
    if (parent) {
        for (let i in parent) {
            const group = parent[i];
            if (group instanceof Group) {
                device[i] = group;
            }
        }
    }

    for (let id in groups) {
        let group = device[id];
        let groupClass = new GroupClass();
        device[id] = group ? group : new Group();


        let capabilities = groups[id];
        for (let name in capabilities) {
            groupClass[name] = capabilities[name];
        }

        device[id] = groupClass;
    }

    return device;
}

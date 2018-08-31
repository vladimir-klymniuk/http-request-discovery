export default class Device {
    constructor(attr) {
        for (let i in attr) {
            if (attr.hasOwnProperty(i)) {
                this[i] = attr[i]
            }
        }
    }
}
const SHA1 = require('./sha1');

class Hashcash {
    constructor({ resource, bits=20}) {
        const [month, date, year] = new Date().toLocaleDateString("en-US").split("/")

        this.date = `${year.toString().slice(2)}${month.padStart(2, "0")}${date.padStart(2, "0")}`;
        this.version = "1";
        this.bits = bits;
        this.resource = resource;
        this.extension = ""; //ignored in version 1
    }
    getHeader(randomString, binCounter) {
        return `${this.version}:${this.bits}:${this.date}:${this.resource}:${this.extension}:${randomString}:${binCounter}`;
    }
    getRandomString() {
        const rand = Math.floor(Math.random() * Number.MAX_VALUE) + 1;
        return Buffer.from(rand.toString(), 'utf-8').toString("base64");
    }
    getBinaryCount(count){
        return Buffer.from(parseInt(count).toString(2), "utf-8").toString("base64")
    }
    checkValid(header) {
        const hash = SHA1(header)
        return (parseInt(hash, 16).toString(2)).padStart(160, '0')
            .startsWith("0".repeat(this.bits))
    }
    computeValidHeader() {
        let header;
        let count = 0;

        for (;;) {
            header = this.getHeader(this.getRandomString(), this.getBinaryCount(count))
            const _header = this.checkValid(header)
            if (_header) {
                break;
            }
            count += 1;
        }

        return header;
    }
}

module.exports = Hashcash;
const Hashcash = require('./hashcash')
const hashcash = new Hashcash({resource: "sametcodes"});

console.log(hashcash.computeValidHeader()) // 1:20:220127:sametcodes::MS4wMzAyNjgzMjMyNzQ4ODllKzMwOA==:MTAwMTAxMTAxMDExMTA=
// console.log(hashcash.checkValid("1:20:220127:sametcodes::HkGGq9bK/lYPdiG7:00000001DrM")) // true
## Hashcash ― JavaScript implementation

It provides two functions: `.computeValidHeader` and `.checkValid`.

### Usage

```javascript
const Hashcash = require('./hashcash')
const hashcash = new Hashcash({resource: "sametcodes", bits: 20});

hashcash.computeValidHeader() // 1:20:220127:sametcodes::M5gLmflPN4C18sUv:0000001gSA
hashcash.checkValid("1:20:220127:sametcodes::M5gLmflPN4C18sUv:0000001gSA") // true
```

### Testing

[hashcash](https://www.hashcash.org/source/) CLI can be used to make sure that the output hash is valid or not, or vice versa:

#### Checking hashcash.js output on hashcash-cli

```javascript
hashcash.computeValidHeader() // 1:20:220127:sametcodes::MS4wMzAyNjgzMjMyNzQ4ODllKzMwOA==:MTAwMTAxMTAxMDExMTA=
```

```bash
~ hashcash -cdb20 -r sametcodes 1:20:220127:sametcodes::MS4wMzAyNjgzMjMyNzQ4ODllKzMwOA==:MTAwMTAxMTAxMDExMTA=
matched stamp: 1:20:220127:sametcodes::MS4wMzAyNjgzMjMyNzQ4ODllKzMwOA==:MTAwMTAxMTAxMDExMTA=
check: ok
```

#### Checking hashcash-cli hash on hashcash.js

```bash
~ hashcash -mb20 sametcodes
hashcash stamp: 1:20:220127:sametcodes::HkGGq9bK/lYPdiG7:00000001DrM
```

```javascript
hashcash.checkValid("1:20:220127:sametcodes::HkGGq9bK/lYPdiG7:00000001DrM") // true
```

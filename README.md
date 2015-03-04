# is-existy

Predicate that returns true for *existy* values.

# Install

```bash
npm install is-existy
```

```bash
bower install is-existy
```

# Usage

```javascript
var isExisty = require('is-existy');

console.log(isExisty(null)); // false
console.log(isExisty(undefined)); // false
console.log(isExisty(0)); // true
console.log(isExisty(1)); // true
console.log(isExisty(false)); // true
console.log(isExisty(true)); // true
console.log(isExisty('')); // true
console.log(isExisty({})); // true
console.log(isExisty([])); // true
```

# License

MIT

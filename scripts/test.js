const dns = require('dns');

console.log(dns);

dns.lookup('www.google.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

dns.setDefaultResultOrder('verbatim');

exports.default = {
    root: __dirname,
    plugins: [],
};

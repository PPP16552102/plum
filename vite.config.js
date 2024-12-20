const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const dns = require('dns');

dns.setDefaultResultOrder('verbatim');


exports.default = {
    root: __dirname,
    plugins: [],
};



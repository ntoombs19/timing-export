/** @type {import("next").NextConfig} */
let withPWA;
withPWA = require('next-pwa');
let runtimeCaching;
runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
});

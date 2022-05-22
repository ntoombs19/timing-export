/** @type {import("next").NextConfig} */
let withPWA;
withPWA = require('next-pwa');
let runtimeCaching;
runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV === 'development',
        register: true,
        sw: 'public/sw.js',
    },
    reactStrictMode: true,
});

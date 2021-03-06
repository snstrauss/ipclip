#!/usr/bin/env node
const { networkInterfaces } = require("os");
const clipboardy = require("clipboardy");

const isIPv4 = (net) => net.family === "IPv4";
const isExternal = (net) => !net.internal;

const { address } = Object.values(networkInterfaces())
    .filter((networkInterface) => networkInterface.some(isExternal))
    .filter((nets) => nets.some(isIPv4))[0]
    .filter(isIPv4)[0];

clipboardy.writeSync(address);

console.log();
console.log(`Address ${address} copied to clipboard`);
console.log();

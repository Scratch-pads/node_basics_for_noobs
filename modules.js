const names = require('./names');
const sayHi = require('./utils');
const alt = require('./alt')

console.log(alt)
sayHi(names.john);

//OS module

const express = require('express');
const os = require('os');

//current user info
const user = os.userInfo();
console.log(user);

//sys uptime
console.log(`sys-uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
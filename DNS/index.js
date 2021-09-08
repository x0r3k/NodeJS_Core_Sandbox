//IDK how it works
const dns = require('dns');

// dns.lookup('nodejs.org', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });


// console.log(dns.getServers(['4.4.4.4']));


// const options = {
//   family: 4,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('example.com', options, (err, address, family) => console.log('address: %j family: IPv%s', address, family));
// options.all = true;
// dns.lookup('example.com', options, (err, addresses) => console.log('addresses: %j', addresses));


dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log(hostname, service);
});
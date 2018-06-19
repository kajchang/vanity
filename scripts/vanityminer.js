importScripts("keythereum.min.js");
keythereum.constants.pbkdf2.c = 1;
const params = { keyBytes: 32, ivBytes: 16 };

onmessage = function(desiredphrase) {
	minedaddrs = 0;
	address = "placeholder"
	beginningTime = Math.round((new Date()).getTime());
	while (!address.toLowerCase().startsWith(desiredphrase.data)) {
 		var dk = keythereum.create(params);
 		var address = keythereum.dump("", dk.privateKey, dk.salt, dk.iv).address;
 		minedaddrs++;
 		postMessage(['ADDRS', minedaddrs, Math.round((new Date()).getTime())-beginningTime])
 	}
 	postMessage([address, dk.privateKey.toString('hex'), minedaddrs, (new Date()).getTime()-beginningTime]);

}



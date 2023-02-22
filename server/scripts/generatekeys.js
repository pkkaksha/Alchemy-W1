const secp = require("ethereum-cryptography/secp256k1")

const {toHex} = require("ethereum-cryptography/utils");

const privKey = secp.utils.randomPrivateKey();
console.log("Privkey", toHex(privKey));

const pubKey = secp.getPublicKey(privKey)

console.log("PubKey",toHex(pubKey));

const address = toHex(pubKey).slice(-15)

console.log("Adress",address)

// Number 1

// Privkey f2734ca8190787b1f1d45e827706fb23be7cabcdc5a72c679a331e91733e6e37
// PubKey 04458a7dbecf29f1cbc9a166f08614b1a8aea209158f212cd6323393e58387c1f6ea9485b31514ffb8d7dc15bc635844e30bb29e8455275c46ba8b683072d50d5c
// Adress a8b683072d50d5c

// Number 2
// Privkey 715f38905fc514231d42990d2883ecd6589560e8c3d65b710af27282aaa217b8
// PubKey 040e75799c7d188c6d3e32849e74f622c182563f420bc201b695a859ca7c9fe280b1a34298a74debdf6e4585f33a618c59f2717997055e2a7382ffb96bd5fd0411
// Adress 2ffb96bd5fd0411

// Number 3
// Privkey a1db371f725fbdea8862153a0410671579b2ab13610d344c87376971dab9a881
// PubKey 0462582a4d67e6652749506728217879ef0f5e86f7f7e9c2c0877728e7b2df9db5233c7f9daacdaf50ee19226ec73402ec93ee6187615890e2ebada7363e8b4fca
// Adress bada7363e8b4fca

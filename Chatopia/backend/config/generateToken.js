const jwt = require('jsonwebtoken');

//jwt.sign(payload, secretOrPrivateKey, [options, callback])
//payload: can be an object literal, buffer or string representing valid JSON
//secretOrPrivateKey: Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA

const generateToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET);
}
module.exports = generateToken;
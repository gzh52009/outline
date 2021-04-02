const jwt = require('jsonwebtoken');
const secret = 'laoxie';

// 生成token
function create(data, expiresIn = 60 * 60) {
    const token = jwt.sign(data, secret, { expiresIn });
    return token;
}

// 校验token
function verify(token) {
    try {
        var decoded = jwt.verify(token, secret);
        return true;
    } catch (err) {
       return false;
    }
}

module.exports = {
    create,
    verify
}
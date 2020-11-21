var CryptoJS = require("crypto-js");
const enckey = "sdfsdfsfffdf";

module.exports = {
    encryptObj : (obj) => {
        const keyArr = Object.keys(obj); 
        const res = {}; 
        keyArr.forEach((key)=>{
            var val = obj[key]; 
            //process.env.ENCRYPT_KEY
            var ciphertext = CryptoJS.AES.encrypt(val.toString(), enckey).toString();
            res[key] = ciphertext; 
        }); 
        return res; 
    },
    decryptObj : (obj) => {
        const keyArr = Object.keys(obj); 
        const res = {}; 
        keyArr.forEach((key)=>{
            var val = obj[key]; 
            //process.env.ENCRYPT_KEY
            
            var bytes  = CryptoJS.AES.decrypt(val, enckey);
            var original = bytes.toString(CryptoJS.enc.Utf8);
            res[key] = original; 
        }); 
    return res; 
    },
    enc : (val) => {
        var ciphertext = CryptoJS.AES.encrypt(val.toString(), enckey).toString();
        return ciphertext
    },
    dec : (val) => {
        var bytes  = CryptoJS.AES.decrypt(val, enckey);
        var original = bytes.toString(CryptoJS.enc.Utf8);
        return original; 
    }
}
    

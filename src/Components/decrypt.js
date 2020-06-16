const crypto = require("crypto");
const algorithm = "aes-192-cbc"; //algorithm to use

export const decryptNik = (encrypt) => {
    const password = "nik";
    const key = crypto.scryptSync(password, "docpro", 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decrypted =
      decipher.update(encrypt, "hex", "utf8") + decipher.final("utf8");
  
    return decrypted;
  };

  export const decryptTtl = (encrypt) => {
    const password = "ttl";
    const key = crypto.scryptSync(password, "docpro", 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decrypted =
      decipher.update(encrypt, "hex", "utf8") + decipher.final("utf8");
  
    return decrypted;
  };
  export const decryptAlamat = (encrypt) => {
    const password = "alamat";
    const key = crypto.scryptSync(password, "docpro", 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decrypted =
      decipher.update(encrypt, "hex", "utf8") + decipher.final("utf8");
  
    return decrypted;
  };

  export const decryptPhone = (encrypt) => {
    const password = "phone";
    const key = crypto.scryptSync(password, "docpro", 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    var decrypted =
      decipher.update(encrypt, "hex", "utf8") + decipher.final("utf8");
  
    return decrypted;
  };


const bcrypt = require("bcrypt");


function  generateActivationToken(){
    return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

function hashPassword(str){
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
}

  module.exports = {
    generateActivationToken,
    hashPassword,

  }
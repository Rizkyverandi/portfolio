const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.HashIT = (password) => {
    console.log('In HashIT')    
    return new Promise((resolve , reject) => {
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err){
                resolve({ error:true, message:err });
            }
            else{                
                bcrypt.hash(password, salt, function(err, hash){
                    if(err) resolve({ error:true, message:err });
                    
                    resolve({ error:false, hash });
                    
                })
            }
            
        }) 
    })    
}

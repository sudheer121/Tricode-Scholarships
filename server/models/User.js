const pool = require("./config/dbconfig");

module.exports = {
    create : function(data) {
        const myPromise = new Promise((resolve,reject)=>{
            pool.query(
                'insert into registration(first_name,last_name,email,password) values(?,?,?,?)',
                [
                    data.first_name,
                    data.last_name,
                    data.email, 
                    data.password
                ]
                ,
                function(error,result,fields){
                    if (error) {
                        reject(error);
                        return; 
                    }
                    resolve(result);
                }
                
                ); // query
        }); 
        return myPromise; 
    },
    
    getUserById : function(userid) {
        const myPromise = new Promise((resolve,reject)=>{
            pool.query(
                'select * from registration where uid=?',
                [userid],
                function(error,result,fields) {
                    if (error) {
                        reject(error);
                        return; 
                    }
                    resolve(result);
                }
                ); //query 
        }); 
        return myPromise; 
    },
    getUserByEmail : function(email) {
        const myPromise = new Promise((resolve, reject)=>{
            pool.query(
                'select * from registration where email=?',
                [email],
                function(error,result,fields) {
                    if (error) {
                        reject(error);
                        return; 
                    }
                    resolve(result);
                }
                ); //query 
        }); 
        return myPromise; 
    }
} 
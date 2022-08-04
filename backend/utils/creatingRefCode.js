const User = require('../db/schemas');

function makeRefCode(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const makeid = async(length)=>{
    //making sure a unique refer code is created everytime
    const allRefCodes = await  User.find({}).select({_id : 0, referCode : 1});
    let referCodes = allRefCodes.map(refCode=>{
        if(refCode.referCode !== undefined){
            return refCode.referCode
        }
    });
    console.log(referCodes);
    //console.log(allRefCodes);
    const result = makeRefCode(length);
    while(referCodes.includes(result)){
        result = makeRefCode(length);
    }
    return result;
}


module.exports = makeid;
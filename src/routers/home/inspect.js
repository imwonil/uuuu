const  express = require("express");
const  router = express.Router();
const fs =  require('fs').promises
const moment = require("moment")

setInterval(inspect, 60000);
function inspect() { 
  console.log("inspect")
fs. readFile("./src/database/userGoodsKinds.json")
.then((data) => {
const userGoodsKinds = JSON.parse(data)
const nowTime =  moment().format('yyyy-MM-DD hh:mm')

function  next_2() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    
      if(userGoodsKinds[0].loginStart !== "") { 
       
    if(resolve) {
       
      for(var q = 0; q<userGoodsKinds.length; q ++) {
        
        for(var b = 0; b<userGoodsKinds[q].UseTime.length; b ++)  {
     
         
               
              if(userGoodsKinds[q].expiryName[b] < nowTime   ) {
             
      
                userGoodsKinds[q].wonset.splice([b],1)
                userGoodsKinds[q].UseTime.splice([b],1)
                userGoodsKinds[q].loginStart.splice([b],1)
                userGoodsKinds[q].goodsName.splice([b],1) 
                userGoodsKinds[q].benchName.splice([b],1)
                userGoodsKinds[q].expiryName.splice([b],1)
                userGoodsKinds[q].logoutEnd.splice([b],1)
                userGoodsKinds[q].koko.splice([b],1)
            
                  }else if( userGoodsKinds[q].UseTime[b] < 0 ) {
                  
                    userGoodsKinds[q].wonset.splice([b],1)
                    userGoodsKinds[q].UseTime.splice([b],1)
                    userGoodsKinds[q].loginStart.splice([b],1)
                    userGoodsKinds[q].goodsName.splice([b],1) 
                    userGoodsKinds[q].benchName.splice([b],1)
                    userGoodsKinds[q].expiryName.splice([b],1)
                    userGoodsKinds[q].logoutEnd.splice([b],1)
                    userGoodsKinds[q].koko.splice([b],1)
            }
           
   
          
        }
       
      }
      
      fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
        if (err) throw err;
           console.log("err") 
           
         })
      }
     
        resolve();
    } },300);
    });}

function  next() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  if(resolve) {
      
    for(var q = 0; q<userGoodsKinds.length; q ++) {
     
      for(var b = 0; b<userGoodsKinds[q].UseTime.length; b ++)  {
           
       
        if(userGoodsKinds[q].loginStart[b] !== "" || userGoodsKinds[q].wonset[b] !== "") { 
          const nowTime =  moment().format('yyyy-MM-DD hh:mm')
          const dateB = moment(`${nowTime}`);
          const login =   userGoodsKinds[q].loginStart[b]
    
         
           const nexetTime= dateB.diff(login, 'minute')

                    
          const kk = userGoodsKinds[q].UseTime[b] - nexetTime
       
         
          userGoodsKinds[q].UseTime[b] = kk
          userGoodsKinds[q].loginStart[b] = nowTime
            fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
            if (err) throw err;
               console.log("err") 
               
             })
      break;
        }
  
        
      }
         
    }
   
      resolve();
  } },500);
  });}
  next().then(() =>{return next_2()}) 
})


}

  
module.exports = router 
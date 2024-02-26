const moment = require("moment")
const fs =  require('fs').promises
const  express = require("express");
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com", { clientid: "emc22wonil/wonil/ilim" });
const db = require("../config/db");
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCS2VWYIUO94SIGY", "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP");
 
class UserStorage { 
static #uses = {
      id:[], psword:[] ,name:[], phon:[], certification:[]
               }
static #set ={
    wonset:[], day:[], expiry:[], logoutTime:[], loginStart:[],
    UseTime:[],  goods:[],  name:[],  phon:[],  id:[], cdId:[],
    expiry:[],
             
  } 
  static #arrObject =[]
static #y = { t:[]  } 
static #remove = {wonSet:[]}
static #adminSet = {  kindSet :[], wonset:[]  }  
static #getUser(data, fildes) {
  const users = JSON.parse(data)
  
  const newUsers = fildes.reduce((newUsers, filde ) =>{
  newUsers[filde] = users[filde]
  return newUsers;
   },{}) 
  return newUsers;   
  }   
  static getUser(...fildes) {
  return fs.
  readFile("./src/database/users.json")
  .then((data) => {
  return this.#getUser(data, fildes)
  }) 
  .catch((err) => console.error())
  }

  static async first (){ 
    return fs.
    readFile("./src/database/first.json")
    .then((data) => {
    return JSON.parse(data)
    }).catch((err) => console.error(err))
  } 
  static #getUserInfo (data, id){
      const users = JSON.parse(data)
      const idx = users.id.indexOf(id)
      const keys = Object.keys(users)
      const newUsers = keys.reduce((newUsers, filde ) =>{
      newUsers[filde] = users[filde][idx]
      return newUsers;
      },{})
     
      return newUsers;
      }
  static getUserInfo(id) {
      
  return fs.
  readFile("./src/database/users.json")
  
  .then((data) => {
  return this.#getUserInfo(data, id)
  }) 
  .catch((err) => console.error(err))
  }
  
  static async save(client) {
   
  const Users=  this.#uses
  const users = await this.getUser("id", "psword" , "name","phon","certification")
  const First = await this.first()
  
  if(users.id === undefined){
    console.log("djdjf")
  First.id.push(client.id);
  First.psword.push(client.psword);
 
  fs.writeFile("./src/database/first.json", JSON.stringify(First))
  fs.writeFile("./src/database/users.json", JSON.stringify(First))

  return {success: true}
  } else if(users.id !== undefined) {
    if(users.id.includes(client.id)) { 
      throw ("이미 존재하는 아이디입니다.")
     }
    
     First.id.push(client.id);
     First.psword.push(client.psword);
 
    fs.writeFile("./src/database/first.json", JSON.stringify(First))
    
    users.id.push(First.id[0]);
    users.name.push(First.name[0]);
    users.phon.push(First.phon[0]);
    users.psword.push(First.psword[0]);
    
    
     fs.writeFile("./src/database/users.json", JSON.stringify(users))
    return {success: true}
  
  } 
   
  
  } 
////////////////////////////DB 구축 했을때 쓰임 ///////////////////////////////////
// static getUserInfo(id) {
//   return new Promise((resolve, reject) => {
//     const query ="SELECT * FROM CUSTOMER WHERE id = ?"
//     db.query(query,[id], (err, data) =>{
      
//       if(err) reject(`${err}`)
//     return  resolve(data[0])
//     })

//     return id
//   })


// }  

// static async save(client) {
 
//    const users = await this.getUserInfo(client.id)
//    console.log(users,"uddeinf")
//   if(users !== undefined){ 
//     users.id.includes(client.id)
//     return {success:false}
// }else if(users === undefined) {
 
//   return new Promise((resolve, reject) => {
//     const nowTime =  moment().format('yyyy-MM-DD hh:mm')
//     const query ="INSERT INTO CUSTOMER(id, NAME, psword, phon, createDate, isDeleted) VALUES(?, ?, ?, ?, ?, ?);";
//     db.query(query,[client.id, client.name, client.psword, client.telephon, nowTime, 1], (err, data) =>{
//       if(err){reject(err)}
//       console.log("bb")
//       resolve({success: true});
      
//     }) 
//   })   
// }
// } 
static  async Certification(client) {
  const Users=  this.#uses
  const users = await this.getUser("phon","name","certification")

if(users.phon === undefined) {
  const Users=  this.#uses
  Users.phon.push(client.phon)
  Users.name.push(client.name)
  Users.certification.push(client.certification)
  
  fs.writeFile("./src/database/first.json", JSON.stringify(Users))
  console.log(client.phon,"jjj")
  messageService.send({
    "to": client.phon,
    "from": "01029718573",
    "kakaoOptions": {
      "pfId": "KA01PF240201053925212fFkWt1ESnqq",
      "templateId": "KA01TP240206110644561nFhQnMjvfkx",
      // 치환문구가 없을 때의 기본 형태
      "variables": {
        "#{name}" :client.name,
        "#{certification}" : client.certification
      }
  
      // 치환문구가 있는 경우 추가, 반드시 key, value 모두 string으로 기입해야 합니다.
      /*
      variables: {
        "#{변수명}": "임의의 값"
      }
      */
  
      // disbaleSms 값을 true로 줄 경우 문자로의 대체발송이 비활성화 됩니다.
      // disableSms: true,
    }
  });
 return {success:true}
}else if (users.phon !== undefined && !users.phon.includes(client.phon)) {
  console.log(client.phon,"kkkk")
  messageService.send({
    "to": client.phon,
    "from": "01029718573",
    "kakaoOptions": {
      "pfId": "KA01PF240201053925212fFkWt1ESnqq",
      "templateId": "KA01TP240206110644561nFhQnMjvfkx",
      // 치환문구가 없을 때의 기본 형태
      "variables": {
        "#{name}" :client.name,
        "#{certification}" : client.certification
  
      }
  
      // 치환문구가 있는 경우 추가, 반드시 key, value 모두 string으로 기입해야 합니다.
      /*
      variables: {
        "#{변수명}": "임의의 값"
      }
      */
  
      // disbaleSms 값을 true로 줄 경우 문자로의 대체발송이 비활성화 됩니다.
      // disableSms: true,
    }
  });
  

  Users.phon.push(client.phon)
  Users.name.push(client.name)
  Users.certification.push(client.certification)
  

  fs.writeFile("./src/database/first.json", JSON.stringify(Users))
  return {success: true}
}
else if (users.phon.includes(client.phon)) {return {success : false}}                        

} 
static objectsave(...fildes) { //userGoodsKinds data file
  return fs.
  readFile("./src/database/userGoodsKinds.json",  'utf8', (err, data) => {
  })
  
 .then((data) => {
  return JSON.parse(data, ...fildes)
 })
} 


////////////////////// 위 부분은 User 저장및 로그인 과정 ////////////
static async call (){ // 폴더 database/user.json 정보를 읽어 오겠다
   return fs.
   readFile("./src/database/user.json")
   .then((data) => {
   return  JSON.parse(data)
   }).catch((err) => console.error(err))
 } 
 // --------------- 파일 불러오는 모듈 ----------- //
// ------ src/Use 에있는 폴더들 ---------//

// ------ src/day data 들 즉 시간이 지난 data들를 삭제하기 위한 전초 작업 --------//

//////// admin data ////////////////
static async admincall (){ 
  return fs.
  readFile("./src/adminUser/adminUserInfo.json")
  .then((data) => {
  return JSON.parse(data)
  }).catch((err) => console.error(err))
} 
//////// admin data ////////////////

static adminSet() {
   return fs.
   readFile("./src/adminSetKinds/adminsetkinds.json",  'utf8', (err, data) => {
   })
  
  .then((data) => {
   return JSON.parse(data)
  })
} 
static datasrr() {  //
  return fs.
  readdir("./src/redata") 
  .then((data) => {
    
  return data
 })
} 

static objectSet(...fildes) {
  return fs.
  readFile("./src/adminSetKinds/adminSeet.json",  'utf8', (err, data) => {
  })
 
 .then((data) => {
  return JSON.parse(data, ...fildes)
 })
} 

static adminNe() {
  return fs.
  readFile("./src/adminSetKinds/adminNext.json",  'utf8', (err, data) => {
  })
 
 .then((data) => {
  return JSON.parse(data)
 })
}
// ------ src/client 에서 입력한 id를 가지고 데이터를 불러오겠다. ---------//




///////////////////////////////////////////////////////////////////////


static  async As(cl) {   //기존 로그인 id, psword 를 덮어쓰기 즉 초기화 해줌

  const users = await this.getUserInfo(cl.id)
  
  
  const us = this.#uses
  const ad = await this.call()    //
   // 회원 가입 할떄 작성한 정보
  const a =this.#set

  const nowTime =  moment().format('yyyy-MM-DD hh:mm')
  const dateB = moment(`${nowTime}`);

 const dd = dateB + nowTime 
 console.log("kkk")
//  if(cl.noName !== "username") {

 
// } else if(cl.noName === "username") {
//   const id = "N"
//   fs.writeFile("./src/database/user.json", JSON.stringify({id}), (err) => {
//     fs.readFile('./src/database/user.json', "{}", 'utf8', (err, data) => {
      
//     });
//   })  
// }
  fs.writeFile("./src/database/user.json", JSON.stringify(users), (err) => {
    fs.readFile('./src/database/user.json', "{}", 'utf8', (err, data) => {
      
    });
  }) 
  const userGoodsKinds = await this.objectsave() //userGoodsKinds.json 파일이 존재 하는곳

  var newUserGoodsKinds = userGoodsKinds.filter(function (addSave) { return addSave.id === cl.id });
  
   
 

     function  delivery() {
      return new Promise( (resolve, reject) => {
      setTimeout(() => {
      if(resolve) {
           
         
        if(newUserGoodsKinds[0] === undefined &&  cl.noName !== "username"  ) {
          const phonSub = users.phon.substring(7,11)
          const pswsub = users.psword.substring(0,2) 
          const comb = phonSub + pswsub //문열기 비번 조합 comb
                  userGoodsKinds.push({"id": users.id ,"name":users.name, "cdId": comb,
                              "phon":users.phon, "wonset":[] ,
                              "UseTime":[] , "goodsName":[],
                              "benchName":[],"expiryName":[],
                              "loginStart": [], "logoutEnd" : [],
                               "koko":[], "goods":"N"})
                             
                              fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
                              fs.writeFile("./src/database/user.json", JSON.stringify(users), (err) => {
                                fs.readFile('./src/database/user.json', "{}", 'utf8', (err, data) => {
                                  
                                });
                              })  
                              resolve();
        }
      } },500);
      });}
       
     
  
  // function  next_2() {
  //   return new Promise((resolve, reject) => {
  //   setTimeout(() => {
    
  //     if(userGoodsKinds[0].loginStart !== "") { 
       
  //   if(resolve) {
       
  //     for(var q = 0; q<userGoodsKinds.length; q ++) {
        
  //       for(var b = 0; b<userGoodsKinds[q].UseTime.length; b ++)  {
     
         
               
  //             if(userGoodsKinds[q].expiryName[b] < nowTime   ) {
             
      
  //               userGoodsKinds[q].wonset.splice([b],1)
  //               userGoodsKinds[q].UseTime.splice([b],1)
  //               userGoodsKinds[q].loginStart.splice([b],1)
  //               userGoodsKinds[q].goodsName.splice([b],1) 
  //               userGoodsKinds[q].benchName.splice([b],1)
  //               userGoodsKinds[q].expiryName.splice([b],1)
  //               userGoodsKinds[q].logoutEnd.splice([b],1)
  //               userGoodsKinds[q].koko.splice([b],1)
            
  //                 }else if( userGoodsKinds[q].UseTime[b] < 0 ) {
                  
  //                   userGoodsKinds[q].wonset.splice([b],1)
  //                   userGoodsKinds[q].UseTime.splice([b],1)
  //                   userGoodsKinds[q].loginStart.splice([b],1)
  //                   userGoodsKinds[q].goodsName.splice([b],1) 
  //                   userGoodsKinds[q].benchName.splice([b],1)
  //                   userGoodsKinds[q].expiryName.splice([b],1)
  //                   userGoodsKinds[q].logoutEnd.splice([b],1)
  //                   userGoodsKinds[q].koko.splice([b],1)
  //           }
           
   
          
  //       }
       
  //     }
      
  //     fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
  //       if (err) throw err;
  //          console.log("err") 
           
  //        })
  //     }
     
  //       resolve();
  //   } },300);
  //   });}
  
      function  next_3() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(resolve) {
         
          var kend = userGoodsKinds.filter(function (addSave) { return addSave.id === cl.id });
   
          fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(kend), (err) => {
            fs.readFile("./src/adminSetKinds/adminNext.json", "{}", 'utf8', (err, data) => {
                                   
                         });
                   })  
                   fs.writeFile("./src/database/user.json", JSON.stringify(users), (err) => {
                    fs.readFile('./src/database/user.json', "{}", 'utf8', (err, data) => {
                      
                    });
                  }) 
            resolve();
        } },500);
        });}

  if(newUserGoodsKinds[0] === undefined  ) {
    
    delivery().then(() =>{return  next_3()})   //초기화 해주는 함수
              .then(() =>{return  next()})   // longinStart 롤 UseTime 시간 차감해주는 함수
  }else { 
    
     next_3().then() 
     
        }
         
         

   return 
  
}  

 
static async Addsavesk(add) { ///  자리 선정 localhost:3000 클릭시 실행하는 위치 ///// 
// 자리 선정하는 함수 경로 bench.js "/"}

   const  adminNexet = await this.adminNe()
   const modiFY = await this.objectsave()

   const ab = await this.call("id") //database/user.json 담겨있는 id
  
   const userGoodsKinds = await this.objectsave()//userGoodsKinds.json


 
  
 
   var userRemove = userGoodsKinds.filter(function (addSave) { return addSave.id === ab.id});
   
   const index = add.index
   const benchSet =  userRemove[0].goodsName[index]
 
   

   
    if(benchSet !== add.setGoods) { throw ( "type 의 유형이 않닙니다 또는 :).") }
    
    

      
       
           function  paymentAPI() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                if(resolve) {
         
                  userRemove[0].wonset[index]= `${add.wonset}set`
                  fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
                    resolve();
                }else{
                reject("err");
                        }   },300);
                });}
           
                function  deliveryAPIS() {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(resolve) {
              adminNexet[0].wonset[index] =`${add.wonset}set`
              fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(adminNexet) , 'utf8' , (err) => {
                if (err) throw err;
                   console.log("err") 
                   
                 })
                resolve();
            }else{reject("err");
                    } },300);
            });}
            
           

           
            paymentAPI().then(()  => { return  deliveryAPIS() })  


          return  userGoodsKinds
  

}
static async days(add) { // kiosk 버튼을 누르면 day data 등록
 


  const modiFY = await this.objectsave()
  
  const userGoodsKinds = await this.objectsave()//userGoodsKinds.json  
    // const  nameChang = add.setGoods = "fixed"

    

  const yy = this.#y
   const ab = await this.call("id") //초기화 된 정보

   const day = add.day// client 상품구매한 날짜 충전 data 

  //요일를 나타냄
 //////////문자가 숫자가 혼합해있으면 숫자만추출 /////////////
  const regex = /[^0-9]/g;
  const result = add.expiry.replace(regex, "");
  const number = parseInt(result);
   //////////문자가 숫자가 혼합해있으면 숫자만추출 /////////////
  const expiryN =  moment ().add(number, 'day').format ('yyyy-MM-DD hh:mm')  //유효기간
  var userRemove = userGoodsKinds.filter(function (addSave) { return addSave.id === ab.id });
    console.log(userRemove[0])


    function  delivery() {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
      if(resolve) {
        if(add.setGoods === "fixedType" || add.setGoods === "daysType" ) {
      
          
           
              userRemove[0].UseTime.push(`${day*1440}`)
              userRemove[0].goodsName.push(add.setGoods)
              userRemove[0].expiryName.push(expiryN)
              userRemove[0].benchName.push (`${add.day}-day`) 
              userRemove[0].wonset.push("")
              userRemove[0].loginStart.push("")
              userRemove[0].logoutEnd.push("")
              userRemove[0].koko.push("N")
              userRemove[0].goods = "Y"
              // userRemove[0].UseTime[h] = `${day*1440}`
              // userRemove[0].goodsName[h] = add.setGoods
              // userRemove[0].expiryName[h] = add.expiry
              // userRemove[0].benchName[h] = `${add.day}-day` 
             
              return fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
             
            
     
       
      }else if(add.setGoods === "feeType") { 
     
        
            console.log("kkkk")
              userRemove[0].UseTime.push(`${day*60}`)
              userRemove[0].goodsName.push(add.setGoods)
              userRemove[0].expiryName.push(expiryN)
              userRemove[0].benchName.push (`${add.day}-Time`) 
              userRemove[0].wonset.push("")
              userRemove[0].loginStart.push("")
              userRemove[0].logoutEnd.push("")
              userRemove[0].koko.push("N")
              userRemove[0].goods = "Y"
            return fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
           
          
   
     
       }
          resolve();
      } },300);
      });}


  
   
 var userRemove = userGoodsKinds.filter(function (addSave) { return addSave.id === ab.id });
  
//  const userExpiry = modiFY.filter(function (addSave) { return addSave.id === `${ab.id}` });
 
  
  function  deliveryAPI() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if(resolve) {
    
      var kend = userGoodsKinds.filter(function (addSave) { return addSave.id === `${ab.id}` });
     fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(kend), (err) => {
    fs.readFile("./src/adminSetKinds/adminNext.json", "{}", 'utf8', (err, data) => {
                           
                 });
           })  
        resolve();
    } },300);
    });}
    
   

    delivery().then()
    deliveryAPI().then()

} 


static async locaUser(client) { //logout 버튼 시 초기감 만들어줌
        
  const adminNe = await this.adminNe() //adimNext.json //초기화 데디터를 가지고있는 위치
  
  const modiFY = await this.objectsave() // //초기화 데디터를 가지고있는 위치
  var kend = modiFY.filter(function (addSave) { return addSave.id === client.id })
  console.log(kend)
  fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(kend), (err) => {
    fs.readFile("./src/adminSetKinds/adminNext.json", "{}", 'utf8', (err, data) => {
                           
                 });
           })

  
   const id = client.id
    fs.writeFile("./src/database/user.json", JSON.stringify({id}), (err) => {
      fs.readFile('./src/database/user.json', "{}", 'utf8', (err, data) => {
        
      });
    })  
  
 
    return kend     
       
        
         
        
         
          
        
   }

  static async logouttimes(client) { //logout 버튼 다음으로 퇴실 처리시 실행하는 함수 logout 시간을 담아줌
  
    const nowTime =  moment().format('yyyy-MM-DD hh:mm') 
    const adminNe = await this.adminNe() //adimNext.json //초기화 데디터를 가지고있는 위치
  
    const modiFY = await this.objectsave()
    var kend = modiFY.filter(function (addSave) { return addSave.id === client.id });
    //  Number(kend[0].loginStart[client.index])
  
     const dateB = moment(`${nowTime}`);
   
     const login =   kend[0].loginStart[client.index]
     const nexetTime= dateB.diff(login, 'minute')
     console.log(nexetTime, kend[0].UseTime[client.index],"kkkk")
              
      
     const Usetime = kend[0].UseTime[client.index] - nexetTime
     const save = [] 
    function  de() { 
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        var kend = modiFY.filter(function (addSave) { return addSave.id === client.id });
       
        
        if(kend[0].UseTime[client.index]>0 && kend[0].wonset[client.index] !== undefined  && client.adminId !== "ADMIN") {
           
        if(resolve) {
          
        adminNe[0].logoutEnd[client.index] = nowTime
        adminNe[0].UseTime[client.index] = Usetime
        adminNe[0].wonset[client.index] = ""
        adminNe[0].loginStart[client.index] = ""
       fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(adminNe), (err) => {
        })  
        kend[0].logoutEnd[client.index] = nowTime
        kend[0].UseTime[client.index] = Usetime
        kend[0].wonset[client.index] = ""
        kend[0].loginStart[client.index] = ""
        
           fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(modiFY))
     
          }
         
       }
  
     
       
      },300);
      });}
      de()
      if(kend[0].UseTime[client.index]>0 && client.index !== undefined  && client.adminId === "ADMIN") {
           modiFY.forEach((item, index) =>{
          if(item.id === "ADMIN") {
            item.wonset.splice(client.index,1)
            item.UseTime.splice(client.index,1)
            item.loginStart.splice(client.index,1)
    fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(modiFY))
          }
    
     
        })
            
     }   
      return {success: true}
  }

    
  
  

 
 static async goods (add) {
  //여기서 add 는 고정석, 자유석, 기간제 
  console.log(add)
  const ab = await this.call()
  const i  = await this.Times () 
  const modiFY = await this.objectsave() //userGoodsKinds.json
  
  const users = await this.getUser("id","phon","name")
  const goods = modiFY.map((obj) => obj.id === ab.id[0] ? { ...obj, goods:add.goods } : obj)
  
  fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(goods))

const index = users.id.indexOf(ab.id[0])
const object = Object.keys(users)
const newuser = object.reduce((newuser, fileds) =>{
  
  newuser[fileds] = users[fileds][index]
   
return newuser
},{})

  
 return {success : true}
 } 
 static async adminSetKindSave(add) { // 좌석 유형 설정 adminbench
 const adminset = add
 const setAdd = await this.adminSet() //저장할곳
 const objectSet =await this.objectSet() // userGoodsKinds.json data 들
 const set = this.#adminSet

  
  
 if(add.wonset !== undefined) {
  set.wonset.push(add.wonset)

} 



       
      const cdid = set.wonset[set.wonset.length -1]
      console.log(cdid)
      var men = setAdd.filter(function (setAdd) { return setAdd.cdId === add.wonset });
      
          
      if(men[0] === undefined && add.kindSet === undefined) {
      setAdd.push({'cdId': cdid})
          fs.writeFile("./src/adminSetKinds/adminsetkinds.json", JSON.stringify(setAdd) , 'utf8' , (err) => {
        if (err) throw err;
           console.log("err")   
         })  
      }
      if(add.wonset !== undefined) {
      objectSet.cdIdSeet.push(add.wonset)
      fs.writeFile("./src/adminSetKinds/adminSeet.json", JSON.stringify(objectSet) , 'utf8' , (err) => {
       
           })  }
          
          
          
            
           const objS = objectSet.cdIdSeet[objectSet.cdIdSeet.length - 1]
           var menz = setAdd.filter(function (setAdd) { return setAdd.cdId === objS });
      
         
        if (menz[0].cdId === objS && add.wonset === undefined) {
       
         menz[0].kindSet = add.kindSet
      
       
        fs.writeFile("./src/adminSetKinds/adminsetkinds.json", JSON.stringify(setAdd) , 'utf8' , (err) => {
       
         })  
         objectSet.cdIdSeet.splice(1, objectSet.cdIdSeet.length);
         fs.writeFile("./src/adminSetKinds/adminSeet.json", JSON.stringify(objectSet) , 'utf8' , (err) => {
       
         })  
        }
   
      
       
  
}



static async adminnext(userIds) { 
 
  const adminNe = await this.adminNe()
  const arrObject =this.#arrObject
  const userGoodsKinds = await this.objectsave()
 
  // const  toTall= this.#set 
  var menz = userGoodsKinds.filter(function (setAdd) { return setAdd.id === userIds.id });

  // file 초기화 함
  fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify([menz[0]]), (err) => {
    fs.readFile('./src/adminSetKinds/adminNext.json', "[]", 'utf8', (err, data) => {
    
    
    });
 }) 
 return [userIds]
} 

static async modify(userIds) { // admin 에서 자리 이동 adminViews 에서 클릭시 작동함수
 
  const next =await this.adminNe()
  const modiFY = await this.objectsave() //userGoodsKinds.json
  


  console.log(userIds)
    var menz = modiFY.filter(function (setAdd) { return setAdd.id === userIds.id });

     const indexOF = menz[0].wonset.indexOf(userIds.wonsetIndexOf)
    if(userIds.goodsName === undefined) {
     
      menz[0].wonset[indexOF] = userIds.wonset
     
      

    fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(menz), (err) => {
    })    
   fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
      })    
  
    
       return  modiFY
    } else if(userIds.goodsName !== undefined) {
      
     
      function  deliveryAPI() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(resolve) {
            menz[0].wonset[userIds.index -1] = userIds.wonset
            menz[0].loginStart[userIds.index -1] = userIds.loginStart
            fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(menz), (err) => {
            })    
           fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
              })    
           
            resolve();
        } },100);
        });}
        
            

          deliveryAPI().then
      
          
   }
   
   return {success : true}

}

static async timesubadd(userIds) { //admin 에서 시간 조정 함수
  const  modiFY = await this.objectsave() //adminGoodsKinds.json data 
  const restart = await this.adminNe()
  const nowTime=  moment().format('yyyy-MM-DD hh:mm') 

       const kindinfo = modiFY.filter(function (modiFY) { return modiFY.id === userIds.id });
        
       const useTime = kindinfo[0].UseTime/1 
   
     
       
        const regex = /[^0-9]/g;
        const result = userIds.resaveTime.replace(regex, "");
        const number = parseInt(result);
     
        const result2 = userIds.resaveExpiryAdd.replace(regex, "");
        const number2 = parseInt(result2);
        console.log(number2)
      
      
        if(userIds.add === "add") {
          const nowTime =  moment().format('yyyy-MM-DD hh:mm')
       
          
          const kindinfo = modiFY.filter(function (modiFY) { return modiFY.id === userIds.id });
          const addTimes = Number(kindinfo[0].UseTime[userIds.index]) + Number(number*60)
          
           
          const dateB = moment(`${kindinfo[0].expiryName[userIds.index]}`);
          
          const dateA = moment(`${nowTime}`);
         
          const nexetTime= dateB.diff(dateA, 'day')
           const Add = nexetTime + number2
          
          
           const expiryN =  moment ().add(Add, 'day').format('yyyy-MM-DD hh:mm')
          kindinfo[0].UseTime[userIds.index] = addTimes 
          kindinfo[0].expiryName[userIds.index] =expiryN
          
          fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
      })   
             
           
                          fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify([kindinfo[0]]), (err) => {
                    })
              }else if(userIds.sub === "sub") {
               
             
               const kindinfo = modiFY.filter(function (modiFY) { return modiFY.id === userIds.id });
               const addTimes = Number(kindinfo[0].UseTime[userIds.index]) - Number(number*60)
            
               const dateB = moment(`${kindinfo[0].expiryName[userIds.index]}`);
               const dateA = moment(`${nowTime}`);
         
          const nexetTime= dateB.diff(dateA, 'day')
           const Add = nexetTime - number2
      
           const expiryN =  moment ().add(Add, 'day').format ('yyyy-MM-DD hh:mm')
          
           
   
               
              kindinfo[0].UseTime[userIds.index] = addTimes
              kindinfo[0].expiryName[userIds.index] = expiryN
              
          
              
              fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
              })   
             
              fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify([kindinfo[0]]), (err) => {
              })
                 
               }
     
 
 
}
static async adminGoods(userIds) { //admin 에서 상품권 지급

  const  modiFY = await this.objectsave() //adminGoodsKinds.json data 
 
  const kindinfo = await modiFY.filter(function (modiFY) { return modiFY.id === userIds.userId });
  console.log()
  const expiryN =  moment ().add(userIds.expiryName, 'day').format ('yyyy-MM-DD hh:mm') 

  const indexs = []
  //////////문자와  숫자가 혼합해있으면 숫자만추출 /////////////
  const regex = /[^0-9]/g;
  const result = userIds.goodsName.replace(regex, "");
  const number = parseInt(result);
  
  
  const resultTime = userIds.goodsName.replace(regex, "");
  const numberTime = parseInt(resultTime);
    //////////문자와  숫자가 혼합해있으면 숫자만추출 /////////////
   
 
    // kindinfo[0].goodsName.forEach((cl, index) => { 
    //   console.log(cl,"jjieii")
    //     if(cl === ""){
        
    //       console.log("kkkll")
    //    indexs.push(index)
    //     }else if( cl !==""){
    //       indexs.push(index + 1)
    
    //     }
    // })
         
           
         if(userIds.feeName === "fixedType" || userIds.feeName === "daysType") {
          kindinfo[0].benchName.push(userIds.goodsName)
           kindinfo[0].goodsName.push(userIds.feeName)  
           kindinfo[0].expiryName.push(expiryN) 
           kindinfo[0].UseTime.push(number*1440 )
           kindinfo[0].loginStart.push("")  
           kindinfo[0].logoutEnd.push("") 
           kindinfo[0].wonset.push("") 
           kindinfo[0].koko.push("N")
             
           fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
           
        })  
            return {success: true}     
         } else if(userIds.feeName === "feeType") {
          kindinfo[0].benchName.push(userIds.goodsName)
          kindinfo[0].goodsName.push(userIds.feeName)  
          kindinfo[0].expiryName.push(expiryN) 
          kindinfo[0].UseTime.push(number*1440 )
          kindinfo[0].loginStart.push("")  
          kindinfo[0].logoutEnd.push("") 
          kindinfo[0].wonset.push("") 
          kindinfo[0].koko.push("N")
            fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(modiFY), (err) => {
        })
        return {success: true}
        
         }  
  }



  static async Userinfor(userIds) {
    const userGoodsKinds = await this.objectsave()
    const  adminNexet = await this.adminNe()
  var kend = userGoodsKinds.filter(function (addSave) { return addSave.id === userIds.id });{
 
    const nowTime =  moment().format('yyyy-MM-DD hh:mm')
  if(kend[0].loginStart[userIds.sessionIndexof] !== "" && kend[0].wonset[userIds.sessionIndexof] === "" && userIds.sessionIndexof !== null){
   
    kend[0].loginStart[userIds.sessionIndexof] = nowTime
    fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
  if (err) throw err;
     console.log("err") 
    
   }) 

  }else if(kend[0].loginStart[userIds.sessionIndexof] !== "" && kend[0].wonset[userIds.sessionIndexof] !== "" && userIds.sessionIndexof !== null){
      console.log(kend[0].wonset[userIds.sessionIndexof])
  return { success: false, mag : `현재 상품에 ${kend[0].wonset[userIds.sessionIndexof]} 자리를 사용하고 계습니다.` , wonset:kend[0].wonset[userIds.sessionIndexof]}

  }else if(kend[0].loginStart[userIds.sessionIndexof] === "") {
    kend[0].loginStart[userIds.sessionIndexof] = nowTime
    fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
  if (err) throw err;
     console.log("err") 
    
   }) 
   
    adminNexet[0].loginStart[userIds.sessionIndexof] = nowTime

        fs.writeFile("./src/adminSetKinds/adminNext.json", JSON.stringify(adminNexet) , 'utf8' , (err) => {
    if (err) throw err;
       console.log("err") 
       
     })
     return { success: false, mag : "자리를 선택 해주세요"}
  } else if (userIds.sessionIndexof === null) {
           
    return { success: false, mag : " 상품을  먼져 선택(클릭) 해주세요." , wonset:kend[0].wonset[userIds.sessionIndexof]}
  }
}
  }
  static async forciBley(client) {
    const userGoodsKinds = await this.objectsave() //userGoodsKinds.json 파일이 존재 하는곳
    const nowTime =  moment().format('yyyy-MM-DD hh:mm')
    var newUserGoodsKinds = userGoodsKinds.filter(function (addSave) { return addSave.id === client.id });
   const dayTime = Number(client.forcDay)*1440 + Number(client.forcTime)

   if(newUserGoodsKinds[0] === undefined && client.id === "ADMIN") {
    userGoodsKinds.push({"id": client.id ,"name":"ADMIN", "cdId":client.cdId,
     "wonset":[client.cdId], "UseTime":[dayTime] , "goodsName":[],
    "benchName":[],"expiryName":[],
    "loginStart": [nowTime], "logoutEnd" : []})
   
    fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
   }
   if(newUserGoodsKinds[0] !== undefined && client.id === "ADMIN") {
    const userGoodsKinds = await this.objectsave()
   
    userGoodsKinds.forEach((item, index) =>{
      if(item.id === "ADMIN") {
         item.wonset.push(client.wonset)  
        item.UseTime.push(dayTime)  
        item.loginStart.push(nowTime) 
        item.koko.push("Y")
        console.log(item)

      }


    })
   fs.writeFile("./src/database/userGoodsKinds.json",JSON.stringify(userGoodsKinds))
    }
    return {success : true}
  }

  static async getnext(client) {
    const comb = client.id + client.psword
    console.log(comb)
    const userGoodsKinds = await this.objectsave()
    var newUserGoodsKinds = userGoodsKinds.filter(function (addSave) { return addSave.cdId === comb });
    
   if(newUserGoodsKinds[0].goodsName[0] !== undefined  ) {
    
   return {success : true} 
   }else if(newUserGoodsKinds[0] === undefined){

    return {success : false}
   }else if(newUserGoodsKinds[0].goodsName[0] === undefined ){
      
    return "goodsfalse"
   }
         
  }
  static async KOKO(client) {

    const userGoodsKinds = await this.objectsave()
   fs. readFile("./src/database/kokoTime.json")
.then((data) => { 
  
const datas = JSON.parse(data)

var kokoFile = datas.filter(function (addSave) { return addSave.sendName === client.sendName });


 if(kokoFile[0] === undefined ) {
   const add = Number(client.timeSend*60) + Number(client.daySend*1440)
   datas.push({"sendName":client.sendName, "Text":client.Text, 
                "timeSend":add, "send":"YES", "set":client.set})

    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(datas))
  }else if( kokoFile[0].sendName === "fixedDeadine" && client.save === "option") {
    const add = Number(client.timeSend*60) + Number(client.daySend*1440)
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "Text": client.Text ,  "timeSend":add, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
 
  }else if(client.sendName === "fixedDeadine" && client.save === "save") {
    const add = Number(client.timeSend*60) + Number(client.daySend*1440)
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
   return a 
  }else if( kokoFile[0].sendName === "feeDeadine" && client.save === "option") {
    const add = Number(client.timeSend*60) + Number(client.daySend*1440)
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "Text": client.Text , "timeSend":add, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }else if( client.sendName === "feeDeadine" && client.save === "save") {
    console.log("se2")
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }else if( client.sendName === "expiryDeadine" && client.save === "option") {
    const add = Number(client.timeSend*60) + Number(client.daySend*1440)
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "Text": client.Text , "timeSend":add, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }else if( client.sendName === "expiryDeadine" && client.save === "save") {
    console.log("4")
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }else if( client.sendName === "information" && client.save === "option") {
    const add = Number(client.timeSend*60) + Number(client.daySend*1440)
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "Text": client.Text , "timeSend":add, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }else if( client.sendName === "information" && client.save === "save") {
    console.log("sedii")
    const a = datas.map((item) => item.sendName === client.sendName ? { ...item, "set":client.set } : item)
    fs.writeFile("./src/database/kokoTime.json",JSON.stringify(a))
  }
})
     return {success: true}
  }
}

module.exports = UserStorage;

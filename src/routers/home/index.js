const  express = require("express");
const ctrl = require("./home.ctrl")
const  router = express.Router();
const fs =  require('fs').promises

// setInterval(time, 2000)

// function time() {

// console.log("koko")

// }
/////////////////////////////////////////////////////
 fs. readFile("./src/database/userGoodsKinds.json")
        .then((data) => {
     const a = JSON.parse(data)
     router.get('/userGoodsKinds', (req,res) =>{
      res.send(a) 
     })
})
fs. readFile("./src/database/kokoTime.json")
.then((data) => {
const a = JSON.parse(data)

router.get('/kokoTime', (req,res) =>{
res.send(a) 
})
})
fs. readFile ("./src/adminSetKinds/adminNext.json")
      .then ((data) => {
      const a = JSON.parse(data)
       router.get ('/adminNext', (req, res) => {
                   res.send(a) 
            })
      })  

     fs. readFile("./src/adminUser/adminGoodsKiosk.json")
     .then((data) => {
   
  const datas = JSON.parse(data)
  router.get('/adminGoodsKiosk', (req,res) =>{
   res.send(datas) 
  })
})

fs. readFile("./src/adminSetKinds/adminsetkinds.json")
        .then((data) => {
     const a = JSON.parse(data)
     router.get('/setKind', (req,res) =>{
      res.send(a) 
     })
})

fs. readFile ("./src/adminSetKinds/adminNext.json")
      .then ((data) => {
       const a = JSON.parse(data)
       if(a[0]!== undefined){

       router.get (`/adminUinfo=${a[0].phon}`, (req, res) => {
        res.render("home/adminControl") 
         })
      }
 })
 fs. readFile("./src/database/first.json")
 .then((data) => {
 const a = JSON.parse(data)
  
 router.get('/certifications', (req,res) =>{
 res.send(a) 
 })
 })
       
router.get("/", ctrl.output.bench)
router.get("/newLogin", ctrl.output.newLogin)
router.get("/koko", ctrl.output.koko)
router.get("/adminTimeAdd", ctrl.output.adminTimeAdd)
router.get("/register", ctrl.output.register)
router.get("/goodsKinds", ctrl.output.goodsKinds)
router.get("/admin", ctrl.output.admin)
router.get("/adminLogin", ctrl.output.adminLogin)
router.get("/adminFee", ctrl.output.adminFee)
router.get("/Kioce", ctrl.output.Kioce)
router.get("/adminBench", ctrl.output.adminBench)
router.get("/adminViews", ctrl.output.adminViews)
router.get("/adminUinfo", ctrl.output.adminUinfo)
router.get("/goodsPush", ctrl.output.goodsPush)
router.get("/userInfor", ctrl.output.userInfor)
router.get("/certification", ctrl.output.certification)
////////////poset/////////////////
router.post("/login", ctrl.process.login)
router.post("/register", ctrl.process.register)
router.post("/logout", ctrl.process.logout)
router.post("/goodsKinds", ctrl.process.goodsKinds)
router.post("/admin", ctrl.process.admin)
router.post("/adminLogin", ctrl.process.adminLogin)
router.post("/adminFee", ctrl.process.adminFee)
router.post("/Kioce", ctrl.process.Kioce)
router.post("/", ctrl.process.bench)
router.post("/adminBench", ctrl.process.adminBench)
router.post("/adminTimeAdd", ctrl.process.adminTimeAdd)
router.post("/adminUinfo", ctrl.process.adminUinfo)
router.post("/adminViews", ctrl.process.adminViews)
router.post("/adminControl", ctrl.process.adminControl)
router.post("/newLogin", ctrl.process.newLogin)
router.post("/goodsPush", ctrl.process.goodsPush)
router.post("/userInfor", ctrl.process.userInfor)
router.post("/koko", ctrl.process.koko)
router.post("/logoutTime", ctrl.process.logoutTime)
router.post("/forcibley", ctrl.process.forcibley) 
router.post("/enter", ctrl.process.enter)
router.post("/certification", ctrl.process.certification)

 module.exports = router      
  

// combination
const name = document.querySelector("#name");
const telephon = document.querySelector("#telephon");
const registerBtn = document.querySelector("#button");
const CertiFication = document.querySelector("#certification");
const certiFicationBtn = document.querySelector("#buttons");
const nowTime = moment().format('ss')





 registerBtn.addEventListener("click", register)
function register() {
  const comb = telephon.value.substr(9, 10)
 const conmbination =  nowTime + comb

 if(!name.value) {  return alert("이름을 입력하주세요.")}
if(!telephon.value) {  return alert("전호를 입력하세요.")}
const req = {
title:"certification",
phon : telephon.value,
name: name.value,
certification:conmbination

}
 
fetch("/certification", {
method: "POST",
headers : {
  "Content-Type" :"application/json"
},

 body: JSON.stringify(req),
})
.then((res => res.json()))
.then((res) => {
   if(res.success === true) {
    alert("인증요청 하였습니다.")
   fetch('/certifications') //users information
  .then(res => res.json())
  .then(data => {
       const index =  data.name.indexOf(name.value)
         const sur = data.certification[index]
    certiFicationBtn.addEventListener("click", certiFication)
    function certiFication() {

      if(!CertiFication.value) {  return alert("인증번호를 누르세요.") }
                   
      
      if(sur === CertiFication.value) 
      { location =  "/register" }
      else { return alert ("인증번호와 일치 하지 않습니다")}
   
     
     
     }
     


   })
  }else if(res.success === false) {
    alert("이미등록된 회원입니다.")
  }
  })

}

  


var HanEnNumber = 1;
const en = ["0","1","2","3","4","5","6","7","8","9","Bc/spa",
  "q","w","e","r","t","y","u","i","o","p",
"a","s","d","f","g","h","j","k","l", "z","x",
"c","v","b","n","m","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]

// const han =  [ "ㅂ","ㅈ","ㄷ",'ㄱ',"ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ","Bc/spa",
// "ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ",
// "ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","0","1","2","3","4",      
// "5","6","7","8","9","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]

const aTag =document.querySelector(".menuCategory").getElementsByTagName("a").length // menuCtegorys 에서 a테그의 길이

 //한영 버튼 클릭시 변환
const hangle = [] 
const pshangle = [] 
const suPshangle = []

    
  for(var d=0; d<aTag; d++) {
    document.querySelector(".menuCategory").getElementsByTagName("a")[d].innerText = en[d]
    document.querySelector(".menuCategory").getElementsByTagName("a")[d].id=en[d]
    document.querySelector(".menuCategory").getElementsByTagName("a")[d]
   
            
  }
 

                 







  var keyboardzone = document.getElementById("keyboardzone");
var input = document.querySelectorAll(".targetinput") // input 길이를 추출하기 위해서


document.querySelector(".menuCategory").getElementsByTagName("a")[43].addEventListener("click", HanEn)
function HanEn() {  
    HanEnNumber = HanEnNumber + 1 ,  
    persentHan = HanEnNumber%2  
    for(var d=0; d<aTag; d++) {
    if(persentHan === 0){ 
    
       
 
    const han =  [ "0","1","2","3","4","5","6","7","8","9","Bc/spa",
                   "ㅂ","ㅈ","ㄷ",'ㄱ',"ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ",
                   "ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ",
                   "ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]
   
                   document.querySelector(".menuCategory").getElementsByTagName("a")[d].innerText = han[d]
                   document.querySelector(".menuCategory").getElementsByTagName("a")[d].id=han[d]
                   document.querySelector(".menuCategory").getElementsByTagName("a")[d] 
              
                               
                               }else if(persentHan === 1){
                                const en = ["0","1","2","3","4","5","6","7","8","9","Bc/spa",
                                            "q","w","e","r","t","y","u","i","o","p",
                                            "a","s","d","f","g","h","j","k","l", "z","x",
                                            "c","v","b","n","m","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]
                              
                            for(var d=0; d<aTag; d++) {
                          
                  document.querySelector(".menuCategory").getElementsByTagName("a")[d].innerText = en[d]
                  document.querySelector(".menuCategory").getElementsByTagName("a")[d].id=en[d]
                  document.querySelector(".menuCategory").getElementsByTagName("a")[d]   
                                                    } 
                           
                                    }
                            } 
   }


 for(var v =0; v<input.length; v++) {
   
const inputId = input[v].id
document.getElementById(inputId).addEventListener("click", inputClick) //input 테그 id 값
 function inputClick() {
  console.log(inputId)
  if(inputId === "name") {
    for(var d=0; d<aTag; d++) {
    const hanNubuer =document.querySelector(".menuCategory").getElementsByTagName("a")[d]
    document.querySelector(".menuCategory").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
    }         
    function myFunction(value) {
      if(value === "Bc/spa" && value !=="한/영" ) {
        console.log("lll")
        hangle.splice(hangle.length - 1)
        // strArray.splice(strArray.length - 1)
        const ao= Hangul.assemble(hangle) 
        document.querySelector("#name").value = ao
      
       }else if(value !=="Bc/spa" && value !=="한/영"){ 
        
      hangle.push(value)
     
      const ao= Hangul.assemble(hangle) 
      document.querySelector("#name").value = ao
    }
    else if(value === "한/영") {
       HanEnNumber%2

         
    }

    }
    
    
    
  }else if (inputId==="telephon") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategory").getElementsByTagName("a")[d]
      document.querySelector(".menuCategory").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          console.log("lll")
          pshangle.splice(pshangle.length - 1)
          
          const ao= Hangul.assemble(pshangle) 
          document.querySelector("#telephon").value = ao
          console.log(pshangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          pshangle.push(value)
        console.log(pshangle)
        console.log(hangle)
        
        const ao= Hangul.assemble(pshangle) 
        document.querySelector("#telephon").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }else if (inputId==="certification") {
  
    for(var d=0; d<aTag; d++) {
      console.log(aTag)
      const hanNubuer =document.querySelector(".menuCategory").getElementsByTagName("a")[d]
      document.querySelector(".menuCategory").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          console.log("lll")
          suPshangle.splice(suPshangle.length - 1)
          
          const ao= Hangul.assemble(suPshangle) 
          document.querySelector("#certification").value = ao
          console.log(suPshangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          suPshangle.push(value)
        console.log(suPshangle)
        console.log(suPshangle)
        
        const ao= Hangul.assemble(suPshangle) 
        document.querySelector("#certification").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }

}
  
 }
 
const id =  document.querySelector("#id");
const psword =  document.querySelector("#psword");


const confirmPsword = document.querySelector("#confirm-psword")
const registerBtn = document.querySelector("#button");



registerBtn.addEventListener("click", register)

function register() {
   if(!id.value) {return alert("아이디를 입력하세요")}
  if(confirmPsword.value !== psword.value ){
    return alert("비밀번호가 일치하지 않습니다.")
   
}

const req = {

id : id.value,
psword : psword.value,
confirmPsword: confirmPsword.value,
  

}
 console.log(req)
fetch("/register", {
method: "POST",
headers : {
  "Content-Type" :"application/json"
},

 body: JSON.stringify(req),
})
.then((res => res.json()))
.then((res) => {
  
  console.log(res)
if(res.success === true) {
  console.log("kjjjj")
   location.href = "/newLogin"
}
  else if(res.success === false) {
  alert("존재하는 아이디입니다.")
  }
})
}
var HanEnNumber = 1;
const han =  [ "0","1","2","3","4","5","6","7","8","9","Bc/spa",
      "ㅂ","ㅈ","ㄷ",'ㄱ',"ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ",
      "ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ",
      "ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]

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
    document.querySelector(".menuCategory").getElementsByTagName("a")[d].innerText = han[d]
    document.querySelector(".menuCategory").getElementsByTagName("a")[d].id=han[d]
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
  if(inputId === "id") {
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
        document.querySelector("#id").value = ao
      
       }else if(value !=="Bc/spa" && value !=="한/영"){ 
        
      hangle.push(value)
     
      const ao= Hangul.assemble(hangle) 
      document.querySelector("#id").value = ao
    }
    else if(value === "한/영") {
       HanEnNumber%2

         
    }

    }
    
    
    
  }else if (inputId==="psword") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategory").getElementsByTagName("a")[d]
      document.querySelector(".menuCategory").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          console.log("lll")
          pshangle.splice(pshangle.length - 1)
          
          const ao= Hangul.assemble(pshangle) 
          document.querySelector("#psword").value = ao
          console.log(pshangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          pshangle.push(value)
        console.log(pshangle)
        console.log(hangle)
        
        const ao= Hangul.assemble(pshangle) 
        document.querySelector("#psword").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }else if (inputId==="confirm-psword") {
  
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
          document.querySelector("#confirm-psword").value = ao
          console.log(suPshangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          suPshangle.push(value)
    
  
        
        const ao= Hangul.assemble(suPshangle) 
        document.querySelector("#confirm-psword").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
             
      }
  
      }
  
  }

}
  
 }
 
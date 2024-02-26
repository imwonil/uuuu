const id = document.querySelector("#id"),
  psword = document.querySelector("#psword")
const idOut = document.querySelector("#idIngout"),
  pswordOut = document.querySelector("#psIngout");
  const idGate = document.getElementById("idGate");
  const pswordGate = document.getElementById("pswordGate");
  
  loginBtn = document.querySelector("#button");
const buttonss = document.getElementById("buttonss");

const logoutBt = document.getElementById("buttons")
const logiOutTime = document.querySelector("#move")


let idleTime = 0;
const liLength = document.getElementsByTagName("a")[22]
const box1Length = document.querySelector(".menuCategorys").getElementsByTagName("a").length;
for(var u =0; u<box1Length; u++) {

    document.querySelector(".menuCategorys").getElementsByTagName("a")[u].q


}

// document.addEventListener("keyup", dealWithKeyboard, false);

// document.addEventListener("keydown", dealWithKeyboard, false);
// function dealWithKeyboard(event) { idleTime = idleTime +1 
// console.log(idleTime)

// if(idleTime>5){console.log("kkkkkk")}

// }
   
// setInterval(time, 2000);
// 특정시간 작동없을시 리로드 함
// function time() {

//   idleTime = idleTime +1
//   console.log(idleTime)
//   document.addEventListener("keydown", dealWithKeyboard, false);
//   function dealWithKeyboard(event) { idleTime = 0;
//   console.log(idleTime)
//     }
//   if(idleTime>20){
//     idleTime = 0;
//    login() }
// }


const m = moment().format('yyyyMMDDhhmm')


const nowTime = moment().format('yyyyMMDDhhmm')
  // setInterval(login, 60000);

//1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");
document.querySelector("#tab1").style = "display:block"
document.querySelector("#tab3").style = "display:none"
document.querySelector("#tab2").style = "display:none"

loginBtn.addEventListener("click", login);
let i = 0;


function login() {
  i = i+1
  console.log(i)
  const a = document.querySelector("#id").setAttribute("placeholder", `username${id.value}`)
  const b = document.querySelector("#id").getAttribute("placeholder")
  const req = {
    id: id.value,
    psword: psword.value,
    loginStart: nowTime,
    noName: b
  };
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),

  }).then((res) => res.json())
    .then((res) => {
     
      if (res.success === true) {
        alert(`${req.id} 방갑습니다 :)`)
        location.href = "/userInfor"
      } else if (res.success === false) {
        alert(res.msg)
      } else if (res.noName === "username") {
        location.href = "/nowLogin"

      }

    })

}
// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
tabItem.forEach((item, index) => {

  // 3. 탭 버튼에 클릭 이벤트를 준다.
  item.addEventListener("click", (e) => {

    // 4. 버튼을 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault(); // a 

    // 5. 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    tabContent.forEach((content) => {
      // 6. 탭 내용 부분들 전부 active 클래스를 제거한다.

      content.classList.remove("active");
    });

    // 7. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    tabItem.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("active");
    });

    // 9. 탭 버튼과 탭 내용 영역의 index에 해당하는 부분에 active 클래스를 추가한다.
    // ex) 만약 첫번째 탭(index 0)을 클릭했다면, 같은 인덱스에 있는 첫번째 탭 내용 영역에
    // active 클래스가 추가된다.
    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");


    // login 하는 부분
    console.log(item.id)
    if (item.id === "detail") {
      document.querySelector("#tab1").style = "display:block"
      document.querySelector("#tab3").style = "display:none"
      document.querySelector("#tab2").style = "display:none"
    }
    else if (item.id === "next") {  // logOUT  하는 부분 


      document.addEventListener("keydown", dealWithKeyboard, false);
      function dealWithKeyboard(event) { idleTime = 0 }



      document.querySelector("#tab2").style = "display:none"
      document.querySelector("#tab1").style = "display:none"
      document.querySelector("#tab3").style = "display:block"
      logoutBt.addEventListener("click", logout);
      function logout() {
        document.querySelector(".expandables").style = "display:block"
       
        const req = {
          id: idOut.value,
          psword: pswordOut.value,
          // logOutTime : nowTime,

        };

        fetch("/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req),

        }).then((res) => res.json())
          .then((data) => {
         
        
            document.querySelector(".box1").style = "display:none"
       
            if (data.success === false) {
              alert(data.msg)

            }
            else if (data.a[0].id !== undefined) {
             
              document.getElementById("goodsNmae").style = "display:block"

              document.querySelector(".logout-box").style = "display:none"
              console.log("ok")
              
              document.getElementById("userName").innerText = `회원명: ${data.a[0].name}`
                    if(data.a[0].goodsName.length <= 0) {alert("상품권이 존재 하지 않습니다") 
                    return  location.href = "/newLogin"}

                   
              if (data.a[0].goodsName.length > 0) {
                for (var i = 0; i < data.a[0].goodsName.length; i++) {
                  if (data.a[0].goodsName[i] !== "") {
                  
                    document.getElementsByTagName("a")[8 + i].style = "display:block"
                    document.getElementsByTagName("a")[8 + i].innerText = `${data.a[0].goodsName[i]} : ${data.a[0].benchName[i]}`
                    document.getElementsByTagName("a")[8 + i].id = `idNumber-${[i]}`
                    document.getElementById(`idNumber-${[i]}`).setAttribute("cdId", [i])
                    const index = document.getElementById(`idNumber-${[i]}`).getAttribute("cdId")

                    if(data.a[0].wonset[i] !=="") {
                      const tr = document.createElement('tr')
                      const td = document.createElement('td')
                      const h2 = document.getElementById("useSet")
                                     
                      h2.appendChild(tr)
                      tr.appendChild(td)                      // 상품 명
                     
                     
                     td.innerText =`현재 사용중인 자리 : ${data.a[0].wonset[i]}  상품:${data.a[0].goodsName[i]} - ${data.a[0].benchName[i]} `
                   
                     var hour =  Math.floor(tme/60) // 시간
                   
                     
                     var tme =  (data.a[0].UseTime[i]%1440) //나머지 분
                     var day = Math.floor( data.a[0].UseTime[i]/1400) // 1일
                     var hour =  Math.floor(tme/60) // 시간
                     var min = tme%60  // 분
                     var hours =  Math.floor(data.a[0].UseTime[i]/60)
                     
                     var mon = Math.floor( tme/60)
                     console.log(day,"day")
                     console.log(hour,"hour")
                     console.log(min,"min")
                    
                     const tr2 = document.createElement('tr')
                     const td2= document.createElement('td')
                     const h3 = document.getElementById("useTime")
                    
                     h3.appendChild(tr2)
                     tr2.appendChild(td2)                      // 상품 명
                    
                     
                   
                   
                                 // 상품 명
                    
                    
                    td2.innerText =`상품:${data.a[0].goodsName[i]} - ${data.a[0].benchName[i]} : ${day}일 ${hour}시 ${min}분 입니다`     


                     }

                    document.getElementById(`idNumber-${[i]}`).onclick = () => { myFunction(index) };


                  }
                }

                document.querySelector("#move").style = "display:block"
                const logiOutTime = document.querySelector("#move")

                logiOutTime.addEventListener("click", logiOutTimes);
              function logiOutTimes() {
                 

                    return alert("퇴실할 삼품을 먼저 선택해주세요")
                

              }

              }
              function myFunction(index) {

                const goodsIndex = data.a[0].goodsName[index]
                const benchIndex = data.a[0].benchName[index]



                alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다 퇴실하실려면 퇴실 버튼을눌러주세요`)
                const logiOutTime = document.querySelector("#move")

                logiOutTime.addEventListener("click", logiOutTimes);

                if (data.a[0].loginStart[index] === "") {
                  alert("사용하지 않았는 상품 입니다. 상품을 시작해세요")
                  location.href = "/userInfor"
                }

                function logiOutTimes() {

                  if (data.a[0].loginStart[index] !== "N") {
                    const req = {
                      id: data.a[0].id,
                      logOutTime: nowTime,
                      index,
                    };

                    fetch("/logoutTime", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(req),

                    }).then((res) => res.json())
                      .then((res) => {
                        console.log(res)
                        if (res.success) {
                          alert("퇴실 처리 되였습니다.")
                          location.href = "/newLogin"

                           }


                                    })
                                 }
                             }
                        }

                  } 

              })

      }

    } else if (item.id === "detail") {
      document.querySelector("#tab2").style = "display:none"
      document.querySelector("#tab1").style = "display:block"
      loginBtn.addEventListener("click", login);
      function login() {
        const req = {
          id: id.value,
          psword: psword.value,
          loginStart: nowTime,
          cdId: cdId
        };

        fetch("/newLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req),

        }).then((res) => res.json())
          .then((res) => {

            const t = res.wonSet
            if (res) {
              t.map((value) => {
                localStorage.removeItem(value)

              })


            }

          })
      }
    } else if (item.id === "enter") {
      document.querySelector("#tab1").style = "display:none"
      document.querySelector("#tab2").style = "display:block"
      document.querySelector("#tab3").style = "display:none"

      

    
      
    }
    // 별개 


    //
  });

});
var HanEnNumber = 1;
const en = ["0","1","2","3","4","5","6","7","8","9","Bc/spa",
"q","w","e","r","t","y","u","i","o","p",
"a","s","d","f","g","h","j","k","l", "z","x",
"c","v","b","n","m","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]

// const han =  [ "ㅂ","ㅈ","ㄷ",'ㄱ',"ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ","Bc/spa",
// "ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ",
// "ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","0","1","2","3","4",      
// "5","6","7","8","9","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]

const aTag =document.querySelector(".menuCategorys").getElementsByTagName("a").length // menuCtegorys 에서 a테그의 길이

 //한영 버튼 클릭시 변환
const hangle = [] 
const pshangle = [] 


    // const en = ["q","w","e","r","t","y","u","i","o","p","Bc/spa",
    //              "a","s","d","f","g","h","j","k","l", "z","x",
    //              "c","v","b","n","m","0","1","2","3","4",      
    //              "5","6","7","8","9","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]
  
  for(var d=0; d<aTag; d++) {
    document.querySelector(".menuCategorys").getElementsByTagName("a")[d].innerText = en[d]
    document.querySelector(".menuCategorys").getElementsByTagName("a")[d].id=en[d]
    document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
   
            
  }
 

                 







  var keyboardzone = document.getElementById("keyboardzone");
var input = document.querySelectorAll(".targetinput") // input 길이를 추출하기 위해서


document.querySelector(".menuCategorys").getElementsByTagName("a")[43].addEventListener("click", HanEn)
function HanEn() {  
    HanEnNumber = HanEnNumber + 1 ,  
    persentHan = HanEnNumber%2  
    for(var d=0; d<aTag; d++) {
    if(persentHan === 0){ 
    
       
 
      const han =  [ "0","1","2","3","4","5","6","7","8","9","Bc/spa",
      "ㅂ","ㅈ","ㄷ",'ㄱ',"ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ",
      "ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ","ㅋ","ㅌ",
      "ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]
   
                   document.querySelector(".menuCategorys").getElementsByTagName("a")[d].innerText = han[d]
                   document.querySelector(".menuCategorys").getElementsByTagName("a")[d].id=han[d]
                   document.querySelector(".menuCategorys").getElementsByTagName("a")[d] 
              
                               
                               }else if(persentHan === 1){
                                const en = ["0","1","2","3","4","5","6","7","8","9","Bc/spa",
                                "q","w","e","r","t","y","u","i","o","p",
                                "a","s","d","f","g","h","j","k","l", "z","x",
                                "c","v","b","n","m","ㅃ","ㅉ","ㄲ","ㅆ","ㅒ","ㅖ","한/영"]
                              
                            for(var d=0; d<aTag; d++) {
                          
                  document.querySelector(".menuCategorys").getElementsByTagName("a")[d].innerText = en[d]
                  document.querySelector(".menuCategorys").getElementsByTagName("a")[d].id=en[d]
                  document.querySelector(".menuCategorys").getElementsByTagName("a")[d]   
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
    const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
    document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
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
      console.log(hangle)
      const ao= Hangul.assemble(hangle) 
      document.querySelector("#id").value = ao
    }
    else if(value === "한/영") {
       HanEnNumber%2

         
    }

    }
    
    
    
  }else if (inputId==="psword") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
      document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
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
  
  }else if (inputId==="idGate") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
      document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          console.log("lll")
          hangle.splice(hangle.length - 1)
          idleTime =    idleTime - Number(1)
          const ao= Hangul.assemble(hangle) 
          document.querySelector("#idGate").value = ao
          console.log(hangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          hangle.push(value)
          idleTime =  idleTime +1
           console.log(idleTime)
              if(idleTime>=7){
                setTimeout(function () {
                  buttonss.addEventListener("click", gate());
                }, 10000);
               
               
              
                    function gate () { 
                     const req = {
                      id: idGate.value,
                      psword: pswordGate.value
                    } 
                
                    fetch("/enter", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(req),
              
                    }).then((res) => res.json())
                      .then((res) => {
                        console.log(res)
                       if(res.success === true) {
              
                        location = "/newLogin"
              
                       }else if(res.success === false){
                         alert("패스워드랑 다릅니다.")
                         location = "/newLogin"
                       }
                      
              
                      })
                    }
                  }
            
        const ao= Hangul.assemble(hangle) 
        document.querySelector("#idGate").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }else if (inputId==="pswordGate") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
      document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          const ao= Hangul.assemble(pshangle) 
          pshangle.splice(pshangle.length - 1)
          idleTime =    idleTime - Number(1)
          document.querySelector("#pswordGate").value = ao
          console.log(pshangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
         pshangle.push(value)
         idleTime =  idleTime +1
         console.log(idleTime)
         if(idleTime>=6){
          setTimeout(function () {
            buttonss.addEventListener("click", gate());
          }, 500);
         
         }
              function gate () { 
               const req = {
                id: idGate.value,
                psword: pswordGate.value
              } 
          
              fetch("/enter", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
        
              }).then((res) => res.json())
                .then((res) => {
                  console.log(res)
                 if(res.success === true) {
        
                  location = "/newLogin"
        
                 }else if(res.success === false){
                   alert("패스워드랑 다릅니다.")
                   location = "/newLogin"
                 }else if(res === "goodsfalse") {
                  alert("상품이 존재 하지 않습니다.")

location = "/newLogin"
                 }
                
        
                })
              }
           
        
        const ao= Hangul.assemble(pshangle) 
        document.querySelector("#pswordGate").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }else if (inputId==="idIngout") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
      document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          
          hangle.splice(hangle.length - 1)
        
          const ao= Hangul.assemble(hangle) 
          document.querySelector("#idIngout").value = ao
          console.log(hangle,"kkkk")
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          hangle.push(value)
       
        
        const ao= Hangul.assemble(hangle) 
        document.querySelector("#idIngout").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }else if (inputId==="psIngout") {
  
    for(var d=0; d<aTag; d++) {
      const hanNubuer =document.querySelector(".menuCategorys").getElementsByTagName("a")[d]
      document.querySelector(".menuCategorys").getElementsByTagName("a")[d].onclick = () => { myFunction(hanNubuer.id) } 
      }         
      function myFunction(value) {
        if(value === "Bc/spa" && value !=="한/영" ) {
          console.log("lll")
          pshangle.splice(pshangle.length - 1)
          
          const ao= Hangul.assemble(pshangle) 
          document.querySelector("#psIngout").value = ao
   
         }else if(value !=="Bc/spa" && value !=="한/영"){ 
          
          pshangle.push(value)
        console.log(pshangle)
        
        
        const ao= Hangul.assemble(pshangle) 
        document.querySelector("#psIngout").value = ao
      }
      else if(value === "한/영") {
         HanEnNumber%2
  
           
      }
  
      }
  
  }
}
  
 }
 
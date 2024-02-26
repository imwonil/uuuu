
const kokos = document.querySelectorAll('.koko')


fetch('/kokoTime')
.then(res => res.json())
.then(data => { 
if(data[0] !==undefined) {
 for(var i=0; i<data.length; i++) {
 

   if(data[i].set === null) {
    document.querySelectorAll('.checks')[i].style ="background:solid #ffffff;"
   
   }else if(data[i].set ==="1") { 
    document.querySelectorAll('.checks')[i].style ="background:#0876fc"
    document.querySelectorAll('.checks')[i].id="1"
    document.querySelectorAll('.checks')[i].innerText ="사용"
   }else if(data[i.set ==="0"]) { 
    document.querySelectorAll('.checks')[i].style ="background:solid #ffffff;"

    document.querySelectorAll('.checks')[i].id="0"
    document.querySelectorAll('.checks')[i].innerText ="미사용"
   }
 


}
kokos.forEach((koko) => {koko.addEventListener("click", kokoClick)
function kokoClick() {

 if( data[koko.dataset.id] !==undefined ) { 
 var dayss = Math.floor( data[koko.dataset.id].timeSend/1440)
            
 var tme =  (data[koko.dataset.id].timeSend%1440) //나머지 분
 var day = Math.floor( data[koko.dataset.id].timeSend/1400) // 1일
 var hour =  Math.floor(tme/60) // 시간
 var min = tme%60  // 분
 var hours =  Math.floor(data[koko.dataset.id].timeSend/60)
 
 var mon = Math.floor( tme/60)
 // console.log(day,"day")
 // console.log(hour,"hour")
 // console.log(min,"min")
 // var Time = Math.floor( data[0].UseTime[listInfo]/60)
 // var min = Time%60
 // // var dayss = Math.floor(dataS[q].UseTime[b]/1440)
 // var dayss = Math.floor(data[koko.dataset.id].timeSend/1440)          
 // var tme =  (dayss/1440) //나머지 분
  
 // console.log(Math.floor(tme/60))
 //  console.log(dayss%60 , "아라")
 var hour =  Math.floor(tme/60) // 시간

 // console.log(hour)
 document.querySelector(".modal2").classList.remove("hidden2");
 document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".modalBox").style = "display:none"
  console.log(koko.dataset.id)
  
  document.getElementById("h2").innerText = `내용 : ${data[koko.dataset.id].Text}`
  document.getElementById("h3").innerText =  `메세지 보낼 시간 :  마감전  ${day}일 ${hour}시간 에 메세지 보냄`
 } else { return alert("메세지 확인할 글이 존재 하지 않습니다.")}
}
})
}

const saves = document.querySelectorAll('.save')
saves.forEach((save) => { save.addEventListener("click", saveClick) 
function saveClick() {

 if(data[save.id] !== undefined) { 
const goodsName =document.querySelectorAll('.deadines')[save.id].id
const set = document.querySelectorAll('.checks')[save.id].id
 const req = {
    save: "save",
    sendName: goodsName,
    set
          
 }

 fetch("/koko", {
  method: "POST",
  headers : {
    "Content-Type" :"application/json"
  },
  
   body: JSON.stringify(req),
  })
  .then((res => res.json()))
  .then((res) => {
    alert("변경되였습니다.")

   
  })
} else if (data[save.id] === undefined) {alert("보내실 문구가 존재 하지 않습니다. 문구를 작성해주세요")}
}

}) 
})
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");
// document.getElementById("openBtn").addEventListener("click", open)
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);
// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
// document.getElementById("openBtn").addEventListener("click", open) //chang 클릭하면 모달창 생성

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

    console.log(item.id)
    if(item.id === "detail"){
      
     
      const check = document.querySelectorAll('.checks'); //확인 시 수행하는 함수
 
      check.forEach((checks) => { 
        
        let checkIndex = document.querySelectorAll('.checks')[checks.dataset.id].id
                 
        const ke =  document.querySelectorAll('.deadines').dataset;
        checks.addEventListener('click',  checkClick) 
        function checkClick () {
          
          checkIndex = Number(checkIndex) +1
          document.querySelectorAll('.checks').dis
        const a = checkIndex%2
           if(a === 1) {
         document.querySelectorAll('.checks')[checks.dataset.id].style ="background:#0876fc"
         document.querySelectorAll('.checks')[checks.dataset.id].innerText ="사용"
          document.querySelectorAll('.checks')[checks.dataset.id].id = "1"
                   
            }else {
                    document.querySelectorAll('.checks')[checks.dataset.id].style ="background:solid #ffffff"
                    document.querySelectorAll('.checks')[checks.dataset.id].id = "0"
                    document.querySelectorAll('.checks')[checks.dataset.id].innerText ="미사용"
                    return  
          }
       
      const indexSET =  document.querySelectorAll('.checks')[checks.dataset.id].id
       sessionStorage.setItem("set",indexSET)
     
    }
       
         

})
   
}

});

});
document.querySelector(".closeBtn2").addEventListener("click", close2);
document.querySelector(".bg2").addEventListener("click", close2);

document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);
     function close () {
   
      document.querySelector(".modal").style = "display:none"
     
      location.href ="/koko"
     }
     function close2 () {
   
      
      document.querySelector(".modal2").style = "display:none"
      location.href ="/koko"
     }

     const deadine = document.querySelectorAll('.deadines');
    
      deadine.forEach((deadines) => {
       
        deadines.addEventListener('click', onClickBox)
     
        function onClickBox() {
         const dedI= deadines.dataset.id
        
         
          document.querySelector(".modal").classList.remove("hidden");
     
          const texts= document.querySelector(".texts")
          const daySend = document.querySelector(".inputDay")
          const timeSend = document.querySelector(".inputTime")
     
          document.querySelector("#set").addEventListener('click', sende);
             
     
          function sende () { 
           
              if(texts.value === "" || daySend.value === "" && timeSend.value === "") {
                return alert("공백란이 존재 하면 안됩니다.")
              }
     
            if(deadines.id === "fixedDeadine") {
              
              const req = {
                save: "option",
               sendName : deadines.id,
               Text : texts.value,
               daySend : daySend.value,
               timeSend : timeSend.value,
                set:  "1"
                 }
                 console.log(req)
                 fetch("/koko", {
                  method: "POST",
                  headers : {
                    "Content-Type" :"application/json"
                  },
                  
                   body: JSON.stringify(req),
                  })
                  .then((res => res.json()))
                  .then((res) => {
                    alert("작성되였습니다.")
                    sessionStorage.removeItem("set")
                    location.href ="/koko"
                  })
             
            }else if(deadines.id === "feeDeadine") {
              
              const req = {
                save: "option",
               sendName : deadines.id,
               Text : texts.value,
               daySend : daySend.value,
               timeSend : timeSend.value,
               set: "1"
                 }
                 fetch("/koko", {
                  method: "POST",
                  headers : {
                    "Content-Type" :"application/json"
                  },
                  
                   body: JSON.stringify(req),
                  })
                  .then((res => res.json()))
                  .then((res) => {
                    sessionStorage.removeItem("set")
                    alert("작성되였습니다.")
                    sessionStorage.removeItem("set")
                    location.href ="/koko"
                  })
            } else if(deadines.id === "expiryDeadine") {
     const req = {
      save: "option",
     sendName : deadines.id,
     Text : texts.value,
     daySend : daySend.value,
     timeSend : timeSend.value,
     set: "1"
     }
     fetch("/koko", {
      method: "POST",
      headers : {
        "Content-Type" :"application/json"
      },
      
       body: JSON.stringify(req),
      })
      .then((res => res.json()))
      .then((res) => {
        sessionStorage.removeItem("set")
        alert("작성되였습니다.")
        sessionStorage.removeItem("set")
        location.href ="/koko"
      })
     }else if(deadines.id === "information") {
     const req = {
      save: "option",
     sendName : deadines.id,
     Text : texts.value,
     daySend : daySend.value,
     timeSend : timeSend.value,
     set: "1"
     }
     fetch("/koko", {
      method: "POST",
      headers : {
        "Content-Type" :"application/json"
      },
      
       body: JSON.stringify(req),
      })
      .then((res => res.json()))
      .then((res) => {
        alert("작성되였습니다.")
        sessionStorage.removeItem("set")
        location.href ="/koko"

      })
     }
     
     
     }
     

       
       
       
       
        }
        
}); 


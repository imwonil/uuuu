
////////// tr 테그를 생성 ////////////
// 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");
const feeMame = document.querySelector('#feeName')
const fee = document.querySelector('#fee')
const expiry = document.querySelector("#expiry")

const feeMame2 = document.querySelector('#feeMame2')
const feeTime = document.querySelector('#feeTime')
const expiry2 = document.querySelector("#expiry2")

const feeMame3 = document.querySelector('#feeMame3')
const Days = document.querySelector('#Days')
const expiry3 = document.querySelector("#expiry3")

const days = document.querySelector("#days")
const fixed =  document.querySelector("#RoomType")
const timeID =  moment().format('1MMDDhhmm') 
// 2. 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
document.querySelector(".closeBtn").addEventListener("click", close);
function close() {
document.querySelector(".modal").classList.add("hidden");
  }
const nowTimes =  moment().format('yyyyMMDDhhmm')  
fetch('/adminGoodsKiosk')
.then(res => res.json())
.then((res => {
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
    document.getElementById("style").style ="display:block"
    const feeName = document.querySelector('#feeName')
// const fee = document.querySelector('#fee')
// const expiry = document.querySelector('#expiry')
/////////// 충전권 ////////////////////

const button = document.querySelector('#button')
const l = document.querySelector('.list')


button.addEventListener("click", add)

function add() {
  
if(item.id ==='fixedType')  {
  
 console.log(feeName.value , feeName.value , expiry.value )

    if(feeName.value !== "" && fee.value !== "" && expiry.value !== "") {
      const req = {
        cdId  : timeID,
        feeName : feeName.value,
        fee: fee.value,
        Type : fixed.id,
        expiry: expiry.value,
        indexType:item.id
           }
  
           
                  
  fetch("/adminFee" , {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify(req),
        
      })
      .then((res) =>  res.json())
      .then((res) =>{    
        alert("추가되였습니다")
        location.href = location.href
      })
    }else{
     
    alert("이름, 금액, 유효기간중 하나라도 공백이있습면 안됩니다")
    location.href = location.href
  }
  
}else if(item.id === "feeType") {
  if(feeTime.value !== "" && feeMame2.value !== "" && expiry2.value !== "") {
   
      const req = {
   cdId  : timeID,
   feeName : feeMame2.value,
   fee: feeTime.value,
   Type : fixed.id,
   expiry: expiry2.value,
   indexType :item.id
      }
      
     
     
  fetch("/adminFee" , {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify(req),
        
      })
      .then((res) =>  res.json())
      .then((res) =>{    
        alert("추가되였습니다")
        location.href = location.href
      })
     
    }else{

    alert("이름, 금액, 유효기간중 하나라도 공백이있습면 안됩니다")
   
  }
}else if(item.id === "daysType") {
  if(Days.value !== "" && feeMame3.value !== "" && expiry3.value !== "") {
  
 const req = {
   cdId  : timeID,
   feeName : feeMame3.value,
   fee: Days.value,
   Type : fixed.id,
   expiry: expiry3.value,
   indexType:item.id
      }
    
  
  fetch("/adminFee" , {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify(req),
        
      })
      .then((res) =>  res.json())
      .then((res) =>{    
      })
      alert("추가되였습니다")
      location.href = location.href
}else{
 
alert("이름, 금액, 유효기간중 하나라도 공백이있습면 안됩니다")
location.href = location.href
}
}
}
  });

});

 
 for(var i =0; i<res.length; i++ ) {
  const menz = res.filter(function (setAdd) { return setAdd.indexType === res[i].indexType });
   
    if(menz[0].indexType === "fixedType") {
      
      for(var y = 0; y<menz[0].feeName.length; y++) {
        
      
      document.getElementById("feeName").setAttribute('cdId',`${[y]}`)
      const tr =  document.createElement('tr')
      const tbody = document.querySelector('tbody')
      
      tbody.appendChild(tr)
                   
      const td0 = document.createElement('td')
      const td1 = document.createElement('td')
      const td2 = document.createElement('td')
      const td3 = document.createElement('td')
      const td4 = document.createElement('td')
    
      td0.innerText = "RoomType"
      td1.innerText = menz[0].feeName[y] 
      td2.innerText = menz[0].fee[y]  
      td3.innerText = "수정, 삭제 하기"
      td4.innerText = menz[0].expiry[y]
     
      tr.appendChild(td0).id = [y]
      tr.appendChild(td1).id = menz[0].feeName[y] 
      tr.appendChild(td2).id =  menz[0].fee[y]  
      tr.appendChild(td3).id =`default${[y]}`
      tr.appendChild(td4).id = menz[0].expiry[y]
     
      document.getElementById(`default${[y]}`).setAttribute('cdId',`${menz[0].cdId}`)
      const feeName = document.getElementById(`${menz[0].feeName[y] }`)
      const fee = document.getElementById(`${menz[0].fee[y]  }`)
      const expiry = document.getElementById(`${menz[0].expiry[y]}`)
      const index = document.getElementById(`${[y]}`)
      const cdId = document.getElementById(`default${[y]}`).getAttribute('cdId',`${menz[0].cdId}`)
       
      // console.log( document.getElementById('${res[i].type}'))
       document.getElementById(`default${[y]}`).onclick = () => {myFunction(cdId,feeName.id,fee.id,expiry.id, index.id, "fixedType")};
    }
  }
    if(menz[0].indexType === "feeType") {
      for(var k=0; k<menz[0].feeName.length; k++ ) {
    
      document.getElementById("feeMame2").setAttribute('cdId',`${[k]}`)
      const tr =  document.createElement('tr')
      const tbody = document.getElementById('ree')
      
      
       tbody.appendChild(tr)
                   
      const td0 = document.createElement('td')
      const td1 = document.createElement('td')
      const td2 = document.createElement('td')
      const td3 = document.createElement('td')
      const td4 = document.createElement('td')
    
      td0.innerText = "충전권"
      td1.innerText = menz[0].feeName[k] 
      td2.innerText = menz[0].fee[k]  
      td3.innerText = "수정, 삭제 하기"
      td4.innerText = menz[0].expiry[k]
     
      tr.appendChild(td0).id = [k]
      tr.appendChild(td1).id = menz[0].feeName[k] 
      tr.appendChild(td2).id = menz[0].fee[k]  
      tr.appendChild(td3).id =`defaultfeeType${[k]}`
      tr.appendChild(td4).id = menz[0].expiry[k]
     
      document.getElementById(`defaultfeeType${[k]}`).setAttribute('cdId',`${menz[0].cdId}`)
      const feeName2 = document.getElementById(`${menz[0].feeName[k]}`)
      const fee = document.getElementById(`${menz[0].fee[k]}`)
      const expiry = document.getElementById(`${menz[0].expiry[k]}`)
      const index = document.getElementById(`${[k]}`)
      const cdId = document.getElementById(`defaultfeeType${[k]}`).getAttribute('cdId',`${menz[0].cdId}`)
      
      
       document.getElementById(`defaultfeeType${[k]}`).onclick = () => {myFunction(cdId,feeName2.id,fee.id,expiry.id, index.id, "feeType")};
      }   
      
  }
    if(menz[0].indexType === "daysType") {
      for(var u=0; u<menz[0].feeName.length; u++ ) {
        console.log(menz[0].feeName.length) 
        document.getElementById("feeMame2").setAttribute('cdId',`${[u]}`)
        const tr =  document.createElement('tr')
        const tbody = document.getElementById('rs')
        
         tbody.appendChild(tr)
                     
        const td0 = document.createElement('td')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
      
        td0.innerText = "기간권"
        td1.innerText = menz[0].feeName[u] 
        td2.innerText = menz[0].fee[u]  
        td3.innerText = "수정, 삭제 하기"
        td4.innerText = menz[0].expiry[u]
       
        tr.appendChild(td0).id = [u]
        tr.appendChild(td1).id = menz[0].feeName[u] 
        tr.appendChild(td2).id = menz[0].fee[u]  
        tr.appendChild(td3).id =`defaultdaysType${[u]}`
        tr.appendChild(td4).id = menz[0].expiry[u]
       
        document.getElementById(`defaultdaysType${[u]}`).setAttribute('cdId',`${menz[0].cdId}`)
        const feeName2 = document.getElementById(`${menz[0].feeName[u]}`)
        const fee = document.getElementById(`${menz[0].fee[u]}`)
        const expiry = document.getElementById(`${menz[0].expiry[u]}`)
        const index = document.getElementById(`${[u]}`)
        const cdId = document.getElementById(`defaultdaysType${[u]}`).getAttribute('cdId',`${menz[0].cdId}`)
        
     
         document.getElementById(`defaultdaysType${[u]}`).onclick = () => {myFunction(cdId,feeName2.id,fee.id,expiry.id, index.id, "daysType")};
          
      }
      }
   
  
    function myFunction(cdId,feeName,fee,expiry, index, benchType) {
     
        document.querySelector(".modal").classList.remove("hidden");
      
     
          document.getElementById("modal-feeName").setAttribute('value',feeName)
          document.getElementById("modal-fee").setAttribute('value', fee)
          document.getElementById("modal-expiry").setAttribute('value', expiry)
         
      
         
          
      const valueFeeName = document.getElementById("modal-feeName")
      const valueFee = document.getElementById("modal-fee")
      const valueExpiry= document.getElementById("modal-expiry")
   
      const boxes = document.querySelectorAll('.box');
    
      boxes.forEach((box) => {
     
        
        box.addEventListener('click', onClickBox)
        function onClickBox() {
         
         if(box.value === "resave") {
         if(valueFeeName.value !=="" && valueFee.value !== "" && valueExpiry.value !==""){
        const req = {
                  cdId : cdId,
                  resave: box.value, 
                  valueFeeName :valueFeeName.value,
                  valuFee: valueFee.value,
                  valueExpiry: valueExpiry.value,
                  index,
                  indexType: benchType,
        }
          
        
        fetch("/adminFee", {
          method: "POST",
          headers : {
            "Content-Type" :"application/json"
          },
          
           body: JSON.stringify(req),
          })
          .then((res => res.json()))
          .then((res) => {
            
            alert("수정되였습니다.")
            location.href = location.href
          })
        }else{
          console.log("kdkkkdfk")
        alert("이름, 금액, 유효기간중 하나라도 공백이있습면 안됩니다")
        
        }
         }else if(box.value === "deleted") {
           const req = {
            delet: box.value, 
            cdId :cdId,
            index,
            indexType: benchType,
          
                  }
                  fetch("/adminFee", {
                    method: "POST",
                    headers : {
                      "Content-Type" :"application/json"
                    },
                    
                     body: JSON.stringify(req),
                    })
                    .then((res => res.json()))
                    .then((res) => {
                      alert("삭제되였습니다.")

                      location.href = location.href
                    })
            }
          
          
        }
   
      
      });
    
      
      
    }
   }
  

  }
  ))


  
/////////// 고정석 /////////////////////

/////////// 충전권 /////////////////////



 



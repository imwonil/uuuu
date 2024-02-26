fetch('/adminGoodsKiosk')
.then(res => res.json())
.then(data => {
  console.log(data)
  //  고정석

  for( var y =0; y<data.length; y++) {
    const menz = data.filter(function (setAdd) { return setAdd.indexType === data[y].indexType });
    
    if(menz[0].indexType === "fixedType") {
     
    for(var i =0; i<menz[0].feeName.length; i++) {
  
    const tr = document.createElement('tr')
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr)
     
   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')

  
   td.innerText = menz[0].feeName[i]
   td1.innerText = menz[0].fee[i]
   td2.innerText = "RoomType"
   td3.innerText = menz[0].expiry[i]
   tr.appendChild(td)                      // 상품 명
   tr.appendChild(td1).id = menz[0].feeName[i]; // 상품 금액
   tr.appendChild(td2).id = menz[0].fee[i]; 
   tr.appendChild(td3).id = "RoomType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
   
   document.getElementById(`${menz[0].fee[i]}`).setAttribute('expiry', `${menz[0].expiry[i]}`)
   const expiry = document.getElementById(`${menz[0].fee[i]}`).getAttribute('expiry')
   const goodsName = document.getElementById(`${menz[0].feeName[i]}`)
   console.log(goodsName.id)
   document.getElementById(`${menz[0].feeName[i]}`).onclick = () => {myFunction(goodsName.id, expiry, goodsName.outerText, "fixedType")};
        }  
  }
  if(menz[0].indexType === "feeType") {
     
    for(var k =0; k <menz[0].feeName.length; k++) {

    const tr = document.createElement('tr')
    const tbody = document.querySelector('#ree')
    tbody.appendChild(tr)
     
   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')

  
   td.innerText = menz[0].feeName[k]
   td1.innerText = menz[0].fee[k]
   td2.innerText = "Times"
   td3.innerText = menz[0].expiry[k]
   tr.appendChild(td)                      // 상품 명
   tr.appendChild(td1).id = menz[0].feeName[k]; // 상품 금액
   tr.appendChild(td2).id = menz[0].fee[k]; 
   tr.appendChild(td3).id = "feeType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
   document.getElementById(`${menz[0].fee[k]}`).setAttribute('expiry', `${menz[0].expiry[k]}`)
   const expiry = document.getElementById(`${menz[0].fee[k]}`).getAttribute('expiry')
   const goodsName = document.getElementById(`${menz[0].feeName[k]}`)
  
   document.getElementById(`${menz[0].feeName[k]}`).onclick = () => {myFunction(goodsName.id, expiry, goodsName.outerText,"feeType")};
    }  
  }
  if(menz[0].indexType === "daysType") { 
     
    for(var z =0; z <menz[0].feeName.length; z++) {
    console.log(menz[0],'kkkkkllklkk')
    const tr = document.createElement('tr')
    const tbody = document.querySelector('#rs')
    tbody.appendChild(tr)
     
   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')

  
   td.innerText = menz[0].feeName[z]
   td1.innerText = menz[0].fee[z]
   td2.innerText = "days"
   td3.innerText = menz[0].expiry[z]
   tr.appendChild(td)                      // 상품 명
   tr.appendChild(td1).id = `${menz[0].fee[z]}`; // 상품 금액
   tr.appendChild(td2).id =  `${menz[0].feeName[z]}`
   tr.appendChild(td3).id = "dayType"  //유효기간 현재 유효 기간에 충전권 금액 들어감
   document.getElementById(`${menz[0].fee[z]}`).setAttribute('expiry', `${menz[0].expiry[z]}`)
   const expiry = document.getElementById(`${menz[0].fee[z]}`).getAttribute('expiry')
    const goodsName = document.getElementById(`${menz[0].feeName[z]}`)

   document.getElementById(`${menz[0].fee[z]}`).onclick = () => {myFunction(goodsName.id, expiry, goodsName.outerText,"daysType")};
    }  
  }
 
// 1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

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
    
  });
   
}); 



       function  myFunction  (goodsName, expiry, fee, setGoods)  {
        
        const regex = /[^0-9]/g;
        const result = goodsName.replace(regex, "");
        const number = parseInt(result);
        console.log(number)
        console.log(goodsName, expiry,fee, setGoods,"setBood")
            const req = {
           day:number,
           setGoods,
           fee,
           expiry:expiry
            }  
             console.log(req)
            fetch("/Kioce", {
              method: "POST",
              headers : {
                "Content-Type" :"application/json"
              },
              body: JSON.stringify(req),
              })
                .then((res) =>  res.json())
            
              .then((res) =>{ 
                alert("상품권 구매 하셨습니다..")
                setTimeout(() => {
                  location.href = "/userInfor"  ;
                }, 2000)
               
                
              })
           
        
           
            }
          
          }
          
    
        


   

})


 fetch('/userGoodsKinds') 
.then(res => res.json())
.then(res => {
 
    console.log(res)
    sessionStorage.removeItem("cdId") // 자리 이석을 위한 빌디업 
    
  for( var y =0; y<res.length; y++) {
    if( res[y].name !== "ADMIN") {
    const tr = document.createElement('tr')
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr).id = `${res[y].name}`
     const name =  `${res[y].name}`
     const wonset =  `${res[y].wonset}`
     console.log(res,"llll")
     const id =  `${res[y].id}`
    let z = 0 ;                                                             
                                                           
   document.getElementById(`${res[y].name}`).setAttribute('onclick', `change(${res[y].phon},${JSON.stringify(res[y].UseTime)},${JSON.stringify(res[y].expiry)}
   ,${JSON.stringify(id)},${JSON.stringify(name)},${JSON.stringify(res[y].wonset)},${JSON.stringify(res[y].goodsName)},${JSON.stringify(res[y].benchName)},${JSON.stringify(res[y].setType)},${JSON.stringify(res[y].cdId)})`)

   const td = document.createElement('td')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')
   const td4 = document.createElement('td')

   

   tr.appendChild(td)
   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)

   
     
  
  
   
    td.innerText = res[y].phon
    td1.innerText =res[y].name
    if(res[y].UseTime !== undefined) { 
      const  setconst = []
      
      const lengUseTime= res[y].UseTime.length
      const lengthWonset = res[y].wonset.length
      const  Wonset = res[y].wonset.length
 
    td2.innerText = `상품${lengUseTime} 개가  존재합니다.` // 상품명
 
    td3.innerText =  `${lengUseTime} 개의 유효기간이 존재합니다.` //유효기관 갯수
    td4.innerText = `${setconst.length} 사용하고 있는 자리가 있습니다..` 
    for(var i=0; i<res[y].wonset.length; i++) {
      var wonsetCo = 1
      let won =0 
      if(res[y].wonset[i] !== ""){
       
       setconst.push("a")
       td4.innerText =  `${setconst.length} 사용하고 있는 자리가 있습니다..`
       
       console.log(setconst) 
     
      }
    
      
      
    } 
    
   
  
    }

  
    }
    
  }
    
         })
 function change(phon,UseTime, expiry,  id, name, wonset, goodsName, benchName, setType, cdId) {
 
    document.getElementById("openBtn").addEventListener("click", open) //chang 클릭하면 모달창 생성
    document.querySelector(".modal").classList.remove("hidden");
 
  
       const req = {
        id: id,
        name : name,
        phon : phon,
        UseTime: UseTime,
        wonset: wonset,
        expiry : expiry,
        goodsName,
        benchName, 
        setType,
        cdId
       
     } 
     sessionStorage.setItem('cdId',req.cdId)
     
       
      fetch("/adminUinfo", { //위에 정보를 adminUinfo에다가 dsta를 전달함 
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      } ,
      body: JSON.stringify(req),
        
      }).then((res => res.json()))
        .then((res) => {  
         
          
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

          function close () {
            document.querySelector(".modal").classList.add("hidden");
            location.reload();
           }
     alert("자리이동 및 상세 정보입니다.")
     for(var i =0; i<res[0].wonset.length; i++){
      if(res[0].wonset[i] !== undefined) {

     const li = document.createElement('li')
     const a = document.createElement('a')
     const ul = document.querySelector('ul')
    
      ul.appendChild(li)
      if(res[0].wonse !== "") {
      li.appendChild(a).innerHTML = `${res[0].wonset[i]} 자리 이동` }
      
      console.log(res[0].wonset[i],"자리이동")
      li.appendChild(a).id = res[0].wonset[i]
       const wonset = res[0].wonset[i]
      document.getElementById(`${res[0].wonset[i]}`).onclick = () => {myFunction(wonset,res[0].id)}
      }
       
    } 
 document.getElementById("detail").setAttribute('phon', `(${res[0].phon})`)
 const detail =  document.getElementById("detail")

 detail.addEventListener("click", phon); //phon 함수 상제 정보 함수
//phon 함수로 상제 정보 url 를 만들어진다. 

// 자리 이동 함수
  function phon () {
          console.log(res[0].phon,"kkkkk")
    setTimeout(() => { 
          alert("상제정보 페이지로 이동합니다.")
          location.href = `/adminUinfo=0${res[0].phon}` 

       }, 400)//먼제 adminUinfo 정보를 보낸다 즉 모달창이 클릭되는 순간 res.phon를 보낸다
     //setTimeout 함수를 주는 이유는 res.phon 정보를 다보내기 전에
   
      }  
      function myFunction(wonset, id) {
        console.log(wonset, id,"kkkk")
        
        
        sessionStorage.setItem('wonset' , wonset)  //기존 자리 좌석 변경할 index
        
        location.href =" /adminViews"
            
          } 
      })
  
 

         }
        
     
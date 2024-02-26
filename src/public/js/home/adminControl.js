

 fetch('/adminNext')
 .then(res => res.json())
 .then(data => {
   console.log(data) 
   const k = []
   const NextInfo = {index:[],TYpe:[]}
   const nowTime =  moment().format('yyyy-MMDD hh:mm') 
   const dayTimes =  moment().format('yyyy-MMDD hh:mm') 
   
   document.getElementById("name").innerText = data[0].name
   document.getElementById("phon").innerText = `0${data[0].phon}`
  document.getElementById("openBtn").addEventListener("click", open)
  document.querySelector(".closeBtn").addEventListener("click", close);
  document.querySelector(".bg").addEventListener("click", close);
 const dayTime = document.getElementById("day")
 const mTime = document.getElementById("time")
 const expiryAdd= document.getElementById("expiry-subtraction")
 const boxes = document.querySelectorAll('.box');
 for(var i=0; i<data[0].goodsName.length; i++) {
 
  
      if(data[0].goodsName[i] !=="N") {        
    document.getElementsByTagName("a")[17+i].style ="border: 10px solid #1a0404"
    document.getElementsByTagName("a")[17+i].innerText= `${data[0].goodsName[i]} : ${data[0].benchName[i]}`
    document.getElementsByTagName("a")[17+i].id = `idNumber-${[i]}`
    document.getElementById(`idNumber-${[i]}`).setAttribute("cdId" , [i])
    const index  = document.getElementById(`idNumber-${[i]}`).getAttribute("cdId") // index를 결정해줌
    
    // const b  = document.getElementById(`idNumber-${[i]}`).outerText
    // ${JSON.stringify(userSerachPhon[0].id)}goodsName.outerText
    const Name =  document.getElementsByTagName("a")[17+i].outerText
    document.getElementById(`idNumber-${[i]}`).onclick = () => {myFunction(index , Name)}   
     k.push([i]) 
      }

   function myFunction(Index,Type) {
    NextInfo.index.push(Index)
    NextInfo.TYpe.push(Type)
    alert(`${Type}을 선택하셨습니다.`)

   }
  
 }
 
function open() { //시간 조정, 유효기간 조정
  const listInfo = NextInfo.index[NextInfo.index.length -1] 
 const TypeInfo = NextInfo.TYpe[NextInfo.TYpe.length -1] 
  alert(`${TypeInfo}의 상품에 시간조중을 진행 합니다.`)
  if(NextInfo.index[0] !== undefined) { 
    document.querySelector(".modal").classList.remove("hidden");
   
     
      var dayss = Math.floor( data[0].UseTime[listInfo]/1440)
             
      var tme =  (data[0].UseTime[listInfo]%1440) //나머지 분
      var day = Math.floor( data[0].UseTime[listInfo]/1400) // 1일
      var hour =  Math.floor(tme/60) // 시간
      var min = tme%60  // 분
      var hours =  Math.floor(data[0].UseTime[listInfo]/60)
      console.log(day,"day")
      console.log(hour,"hour")
      console.log(min,"min")
      var mon = Math.floor( tme/60)
      
      var Time = Math.floor( data[0].UseTime[listInfo]/60)
      var min = Time%60
     
  
    
      // document.getElementById("day").setAttribute('value',`${dayss}일${da}시간 ${da}분`)
      // document.getElementById("time").setAttribute('value', `${Time}시간${da}분`)
      
      
     
  }else{
    alert("시간 차감및 추가 하실 상품을 먼저 선택 해주세요")
    location.reload(true);
  }
 
    boxes.forEach((box) => { 
     
      box.addEventListener('click', onClickBox)
      
       
          // const h4 = document.getElementById("dyas")
          const h3 = document.getElementById("times")
          const h2 = document.getElementById("expiry")
        // h4.innerText = `남아있는 기간 은${day}일  입니다`
        h3.innerText = `남아있는 기간 ${day}일`
      const substRing = data[0].expiryName[listInfo]
     
      const addExpir = `${substRing}`.substring(0,8)
      const nowTime =  moment().format('yyyy-MM-DD hh:mm')
      const dateB = moment(`${nowTime}`);
      const login =   data[0].expiryName[listInfo]
      const dateA = moment(`${login}`);
     
      const nexetTime= dateA.diff(dateB, 'day')
       console.log(nexetTime,"nextiner")
      
        const NowExpiryName =  addExpir - dayTimes 
          const reDay = data[0].expiryName[listInfo] - nowTime
        h2.innerText = `남아있는 유효기간 은 ${nexetTime}일 입니다`
      // console.log(mon,"kkkk")
    
      // document.getElementById("day").setAttribute('value', `남아있는 기간 ${day}일`)
          document.getElementById("time").setAttribute('value', `${hours}시간 남음`)
          document.getElementById("expiry-subtraction").setAttribute('value', `${nexetTime}일 남음`)
         
      
      const expiry = document.getElementById("expiry-subtraction").getAttribute('value')
      function onClickBox () {

    if(box.value === 'add' ) {
      
    const req = {
     
       resaveTime: mTime.value,
      id: data[0].id,
       resaveExpiryAdd: expiryAdd.value,
       add : "add",
       index : listInfo
    }
     console.log(req.resaveExpiryAdd,"djjfj")
      fetch("/adminControl", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        } ,
        body: JSON.stringify(req),
          
        }).then((res => res.json()))
          .then((res) => {  
            
            })


    }else if( box.value === "sub"){
    
      const req = {
       
        resaveTime: mTime.value,
        id: data[0].id,
        resaveExpiryAdd: expiryAdd.value,
        sub : "sub",
        index : listInfo
      }
      console.log(req,"sub")
      fetch("/adminControl", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        } ,
        body: JSON.stringify(req),
          
        }).then((res => res.json()))
          .then((res) => {  
        
            })

    }
        
   
    
      }

    })
    
    
     
  
   
       

   
}

})


const boxes = document.querySelectorAll('.button');
const nowTime =  moment().format('yyyyMMDDhhmm') 

fetch('/adminNext')
.then(res => res.json())
.then(data => { 
  
  
 document.getElementById("userName").innerText = `회원명: ${data[0].name}`

 const liLength = document.getElementsByTagName("a").length
   
 const k = []
    
    for(var i=0; i<data[0].goodsName.length ; i++) {
     
      
      if(data[0].goodsName[i] !== "")   {
        
      document.getElementsByTagName("a")[8+i].style ="display:block"
      document.getElementsByTagName("a")[8+i].innerText= `${data[0].goodsName[i]} : ${data[0].benchName[i]}`
      document.getElementsByTagName("a")[8+i].id = `idNumber-${[i]}`
      document.getElementById(`idNumber-${[i]}`).setAttribute("cdId" , [i])
      const index  = document.getElementById(`idNumber-${[i]}`).getAttribute("cdId")
      
      // const b  = document.getElementById(`idNumber-${[i]}`).outerText

      document.getElementById(`idNumber-${[i]}`).onclick = () => {myFunction(index)};
      document.getElementById("move").setAttribute("cdID" ,data[0].id)
      k.push([i]) 
     } 
    
     if(data[0].wonset[i] !=="") {
      const tr = document.createElement('tr')
      const h2 = document.getElementById("useSet")
      
    
      h2.appendChild(tr)
    
       
     const td = document.createElement('td')
    
     tr.appendChild(td)                      // 상품 명
     
     
     td.innerText =`현재 사용중인 자리 : ${data[0].wonset[i]}  상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} `
   
    
     }
     
     // var Time = Math.floor( data[0].UseTime[listInfo]/60)
     // var min = Time%60
     // // var dayss = Math.floor(dataS[q].UseTime[b]/1440)
     // var dayss = Math.floor(data[koko.dataset.id].timeSend/1440)          
     // var tme =  (dayss/1440) //나머지 분
      
     // console.log(Math.floor(tme/60))
     //  console.log(dayss%60 , "아라")
      var hour =  Math.floor(tme/60) // 시간
      const tr = document.createElement('tr')
      const h2 = document.getElementById("useTime")
      
      var tme =  (data[0].UseTime[i]%1440) //나머지 분
      var day = Math.floor( data[0].UseTime[i]/1400) // 1일
      var hour =  Math.floor(tme/60) // 시간
      var min = tme%60  // 분
      var hours =  Math.floor(data[0].UseTime[i]/60)
      
      var mon = Math.floor( tme/60)
      console.log(day,"day")
      console.log(hour,"hour")
      console.log(min,"min")
      h2.appendChild(tr)
    
       
     const td = document.createElement('td')
    
     tr.appendChild(td)                      // 상품 명
     
     
     td.innerText =`상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} : ${day}일 ${hour}시 ${min}분 입니다`
   
   
     
 
}
  
 if(k.length === 0){ alert ("상품권이 없습니다.")}
  else{ alert ("상품권이 존재 합니다.")}

 
 

function myFunction (index)  {
         console.log(index)
  const  goodsIndex = data[0].goodsName[index]
  console.log(goodsIndex)
   const  benchIndex = data[0].benchName[index]
    const  expiryIndex = data[0].expiryName[index]
  // const  goodsIndex = data[0].goodsName[index]
  if(goodsIndex === "fixedType") {
    alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
     document.getElementById("setName").style ="display:block"
    
     document.getElementById("setName").innerText= `선택한 상품 - 고정석 : ${goodsIndex}`
    
  } else if(goodsIndex === "feeType") {
    alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
  document.getElementById("setName").style ="display:block"
    
  document.getElementById("setName").innerText= `자유석 : ${goodsIndex}`

}else if(goodsIndex === "daysType") {
  alert(`${goodsIndex} : ${benchIndex} 선택하셨습니다`)
document.getElementById("setName").style ="display:block"
  
document.getElementById("setName").innerText= `기간권(요일제) : ${goodsIndex}`

}

  
  // 상품권을 선택 해야지만 선택 가능한 버튼        
boxes.forEach((button) => {
  sessionStorage.setItem('indexof',index)
  button.addEventListener('click', onClickBox)

  function onClickBox() {
    console.log(button.id)
    const id = document.getElementById("move").getAttribute("cdID")
    const userId= data.filter(function (addSave) { return addSave.id === data[0].id});
 
     if (button.id === "start" && data[0].loginStart[index] ==="") {
      const sessionIndexof = sessionStorage.getItem('indexof')
         const req = {
          nowTime,
          id: data[0].id,
          sessionIndexof
         }
         sessionStorage.setItem('indexof',index)
         sessionStorage.setItem('cdId',data[0].cdId)
          fetch("/userInfor", {
            method: "POST",
            headers : {
              "Content-Type" :"application/json"
            },
            
             body: JSON.stringify(req),
            })
            .then((res => res.json()))
            .then(( res) => {
            // console.log(res)
            
            })
         
          alert("좌석을 선택 해주세요")

          document.getElementById("benchselection").style = "display:block"

          document.getElementById("buy").style = "display:none"
          document.getElementById("start").style = "display:none"
          
        }else if ( button.id === "start" && data[0].loginStart[index] !=="" && data[0].wonset[index] !=="" )
        {alert("사용중인 상품 입니다.")
        document.getElementById("move").style = "display:block"
        document.getElementById("buy").style = "display:none"
        document.getElementById("start").style = "display:none"}
        
        else if(button.id === "start" && data[0].wonset[index] ==="" && data[0].loginStart[index] !=="")
       
         {
          document.getElementById("benchselection").style = "display:block"
          // document.getElementById("move").style = "display:block"
          document.getElementById("buy").style = "display:none"
          document.getElementById("start").style = "display:none"
          console.log("kkdkf")
         
           } 
    
                   
      if(button.value === "move") { 
       const req = {
        id: data[0].id,
        //  wonset:data[0].benchName[index],
        goodsIndex,
        expiryIndex,
        benchIndex,
        index
          }


     
          sessionStorage.setItem('indexof',index)
          sessionStorage.setItem('cdId',data[0].cdId)
          fetch("/userInfor", {
            method: "POST",
            headers : {
              "Content-Type" :"application/json"
            },
            
             body: JSON.stringify(req),
            })
            .then((res => res.json()))
            .then(( res) => {
              
              location.href =  "/"
            })
        } else if(button.value === "move" && userId[0].wonset[index] !== "") {
          {alert("사용중인 상품 입니다.")}
        }
      
      

}




})



      

  

    
    
      
        
  }
  
/// 상품권 먼져 선택을 않해도 크릭 가능 함 사용하기
boxes.forEach((button) => {

  button.addEventListener('click', onClickBox)
  const userId= data.filter(function (addSave) { return addSave.id === data[0].id});
  function onClickBox() {
     const sessionIndexof = sessionStorage.getItem('indexof') 
     if(button.value === "benchselection" && userId[0].wonset[sessionIndexof] === "" ) { 
      
     
         location.href =  "/"
       
      }else if(button.value === "benchselection" && userId[0].wonset[index] !== ""){alert("사용중인 상품 입니다.")}
    
    if(button.id ==="buy") {
      const id = document.getElementById("move").getAttribute("cdID")
      location.href =  "/kioce"
    } 

  
 
      
}

})

})

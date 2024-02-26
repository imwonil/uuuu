
const search = document.querySelector(".search")
const searchID = document.querySelector("#searchID")
const searchStart = document.querySelector(".searchStart")
const sea = document.querySelector("#detail")
const time = document.querySelector("#time")
const day = document.querySelector("#day")
const buttonsu = document.querySelector(".buttonsu")
console.log(buttonsu,"null")
const newTime =  moment().format('yyyy-MM-DD hh:mm') 
const reserveCDID =  moment().format(' mmss')
const select  = document.querySelector('.detail')
const forciblyStart  = document.querySelectorAll('.forciblyStart')
// console.log(forciblyStart,"jjjj")
 fetch('/userGoodsKinds') 
.then(res => res.json())
.then(data => { 
	console.log(data,"jjkkii") 
// 현재 자리에 사용중인 회 원 목록 //..
const  session = sessionStorage.getItem('cdId')
	// console.log(session)
var men = data.filter(function (addSave) { return addSave.cdId == session });
              
var id = data.filter(function (addSave) { return addSave.id == session });

const buttons = document.querySelectorAll('.btn-hover');

const gg =document.getElementById("openBtn").getElementsByTagName('button').length;
console.log(data,"dkjfk")
 for(var i = 0; i<data.length ; i++) { 
	for(var y =0; y<data[i].wonset.length; y++){
if(data[i].wonset[y] !=="" ) {
	  document.getElementById(`${data[i].wonset[y]}`).setAttribute('cdId', `${data[i].cdId}`)
  	 document.getElementById(`${data[i].wonset[y]}`).setAttribute('phon', `${data[i].phon}`)
	 document.getElementById(`${data[i].wonset[y]}`).setAttribute('name', `${data[i].name}`)
	 document.getElementById(`${data[i].wonset[y]}`).setAttribute('wonset', `${data[i].wonset}`)
	 
	 if(data[i].wonset[y] !=="" ) {
     
	
	  const indexOF = data[i].wonset.indexOf(data[i].wonset[y])
	  console.log("kikk")
	  document.getElementById(`${data[i].wonset[y]}`).setAttribute('indexOF', indexOF)
	 
	  document.getElementById(`${data[i].wonset[y]}`).innerHTML="사용중"  
	 }
    }
}
}

search.addEventListener("click" , surs)  
function surs() {

	const req = {
		SerachPhon : searchID.value


	}
	
	const userSerachPhon = data.filter(function (addSave) { return addSave.phon === req.SerachPhon});
         
if(userSerachPhon[0] !== undefined) {
	
	
  const tr = document.createElement('tr')
  const tbody = document.querySelector('tbody')
  tbody.appendChild(tr)
 const td = document.createElement('td')
 const td1 = document.createElement('td')
  
 td.innerText = userSerachPhon[0].phon
 td1.innerText = userSerachPhon[0].name
 tr.appendChild(td).id = userSerachPhon[0].id
 tr.appendChild(td1).id =userSerachPhon[0].id
//  const indexOF = document.getElementById(`${data[i].wonset[y]}`).getAttribute('indexOF')
  document.getElementById(userSerachPhon[0].id).setAttribute('onclick', `change(${JSON.stringify(userSerachPhon[0].id)})`)
//  document.getElementById(userSerachPhon[0].id).setAttribute('onclick', `change(${JSON.stringify(userSerachPhon[0].id)},${JSON.stringify(see.value)},${JSON.stringify(expiryDay.value)},${JSON.stringify(seetValue.value)})`)

}
}
   

 	buttons.forEach((btnHover) => {
btnHover.addEventListener('click', kkk)
 
    
		function kkk() { 
			sessionStorage.setItem("forc" , btnHover.id)
		 const  k = sessionStorage.getItem("cdId")
	     const c = `${btnHover.id}`
     
		const cdId = document.getElementById(`${[btnHover.value]}set`).getAttribute('cdid')
		 
		const name = document.getElementById(`${[btnHover.value]}set`).getAttribute('name')
        const phon = document.getElementById(`${[btnHover.value]}set`).getAttribute('phon')

	  if(btnHover.id === c && k === null) { // 좌석 선택시 회원정보 보여줌
	        
	      if(cdId) {
			sessionStorage.setItem("forcEnd" , btnHover.id)
	            h1 = document.getElementById('h1')
				h1.innerText = name
				
				h3 = document.getElementById('h3')
				h3.innerText = phon
			
      document.querySelector("#openBtn").addEventListener("click", open)	
	  function open() {
	  document.querySelector(".modal").classList.remove("hidden");
					  }
					
				         }
						

				}
			
       document.querySelector(".closeBtn").addEventListener("click", close);
       function close() {
		sessionStorage.removeItem("bench")	
		sessionStorage.removeItem('set')
	   document.querySelector(".modal").classList.add("hidden");
	   location.href = "adminViews"  }
	   const cdIdd = document.getElementById(`${[btnHover.value]}set`).getAttribute('cdid')
	  
	   const  setIndexOf = sessionStorage.getItem('set')
	   const  cdid = sessionStorage.getItem('cdId')
	   const wonsetIndexOf = sessionStorage.getItem('wonset')
	   const local =  `${btnHover.id}`
	    sessionStorage.setItem("bench",local )
	   
			   
			 if(btnHover.id !== null &&  cdid !== null) {
				
				
				
         
			   
			   const req = {
                
				wonset: btnHover.id,
				 id : men[0].id,
				 setIndexOf,
				 wonsetIndexOf
				 }
				
				 fetch("/adminViews", {
					method: "POST",
					headers: {
					  "Content-Type" : "application/json",
					} ,
					body: JSON.stringify(req),
					  
					}).then((res => res.json()))
					  .then((res) => {  
						console.log(res,"res")
						
					alert("자리를 변동하시겠습니까??")
					sessionStorage.removeItem("cdId")
					sessionStorage.removeItem("set")
					sessionStorage.removeItem("wonset")
					location.href = "/adminViews"
																						
 					})
								 
			} else if (name !== null && wonsetIndexOf !== null) {
				  	alert("사용중인 자리입니다.!")
				  location.href = "/adminViews"
			}
		}	
		})

		})
		function change(userID,) {
			fetch('/userGoodsKinds') 
			.then(res => res.json())
			.then(data => {
			
				const userSerachPhon = data.filter(function (addSave) { return addSave.id === userID});
				const select  = document.querySelector('.detail')
			     const expriy =	userSerachPhon[0].expiryName 
				 
			 for(var i =0; i<userSerachPhon[0].goodsName.length; i++) {
				
				
					if(userSerachPhon[0].goodsName[i] !== "") {
						if(userSerachPhon[0].wonset[i] !== "") { 
						const option = document.createElement('option')
						const select  = document.querySelector('.detail')
					    select.appendChild(option).value =  userSerachPhon[0].benchName[i]
						select.appendChild(option)
	     			    option.innerText =`${userSerachPhon[0].goodsName[i]} 사용중입니다.`
						 console.log(select.appendChild(option).index)
												
					}  else if (userSerachPhon[0].wonset[i] === "") {
				    	const option = document.createElement('option')
						const select  = document.querySelector('.detail')
						select.appendChild(option).value =  userSerachPhon[0].benchName[i]
						select.appendChild(option).id = `${userSerachPhon[0].goodsName[i]}.${[i]}}`	
						option.innerText =`${userSerachPhon[0].goodsName[i]}.`
						const cdId = document.getElementById(`${userSerachPhon[0].goodsName[i]}.${[i]}}`).setAttribute('data-id' , `${[i]}`)
						
					}
				}
				
				
			
				}
		
				
				sea.addEventListener('change', function () { 
		           
			     
				searchStart.addEventListener("click" , surs)
				const seetValue = select.options[select.selectedIndex];
	          
			    // const set = sessionStorage.getItem('set')
				const see = select.options[select.selectedIndex];
				
				const seeCutNunmver = see.id.split('.')
			
				function surs() {
					if(see.id ==="") {alert("선택하신 상품은 사용할 수 없습니다."
					)
					sessionStorage.removeItem("bench")	
					location.reload();
				}else if(see.index !== 0 && see.value !== "상품 선택") { 
					const wonset = sessionStorage.getItem("bench")
					const req = {
					id : userID,
					goodsName: seeCutNunmver[0],
					benchName: see.value,
					expriy: expriy[see.dataset.id],
					wonset,
					index : see.index,
					loginStart  : newTime
			  } 

			
			    
			   
			    sessionStorage.removeItem('set')
			  fetch("/adminViews" , {
				method: "POST",
				headers: {
				  "Content-Type" : "application/json",
				} ,
				body: JSON.stringify(req),
				  
				}).then((res) =>  res.json())
				  .then((res) => {
					alert("강제시작 했습니다.")
					sessionStorage.removeItem("forc")
					sessionStorage.removeItem("forcEnd")
					sessionStorage.removeItem("bench")	
					location.href = "/adminViews"
					
					    
					})
				}
			}
			 })
			})
		
		}
		
			fetch('/userGoodsKinds') 
			.then(res => res.json())
			.then(data => {
				
				document.querySelector(".closeBtn2").addEventListener("click", close2);
				function close2() {
				
				document.querySelector(".modal2").classList.add("hidden2");
				  }
		    	forciblyStart.forEach((btnHover) => {
					btnHover.addEventListener('click', kkk)
					function kkk () {
                
				 const forcstart=sessionStorage.getItem("forc")
				 const forcEnd=sessionStorage.getItem("forcEnd")
				 
		
              if(btnHover.id ==="forccStart" && forcstart !== null) {
				// 강제 점유 확인 버턴 클릭 시 수행
				 sessionStorage.removeItem("bench")
				 document.querySelector("#openBtn2").addEventListener("click", open2)	
				 function open2() {
				 document.querySelector(".modal2").classList.remove("hidden2");
					buttonsu.addEventListener("click" , btn) 			
				  
				   function btn() {

					const req = {
					 
					 forcTime: time.value,
					 forcDay: day.value,
					 wonset : forcstart, 
					 cdId : forcstart,
					 id:"ADMIN"
		
					}
				
					fetch("/forcibley", {
						method: "POST",
						headers : {
						  "Content-Type" :"application/json"
						},
						
						 body: JSON.stringify(req),
						})
						.then((res => res.json()))
						.then(( res) => { 
							alert("강제시작 했습니다.")
							sessionStorage.removeItem("forc")
							sessionStorage.removeItem("forcEnd")
							sessionStorage.removeItem("bench")	
							location.href = "/adminViews"
						})

				   }      
				   }
							   
									
	
		}else if(btnHover.id ==="forccEnd" && forcEnd !== null) {
			const CDID =  document.getElementById(`${forcEnd}`).getAttribute('cdId')
			var men = data.filter(function (addSave) { return addSave.cdId == CDID });
			  const index = men[0].wonset.indexOf(forcEnd)
           
		
			const req = {
				 id : men[0].id,
				 logOutTime : newTime,
                 index,
				 adminId:"ADMIN"
			}
            console.log(req,"rez")
			fetch("/logoutTime", {
				method: "POST",
				headers : {
				  "Content-Type" :"application/json"
				},
				
				 body: JSON.stringify(req),
				})
				.then((res => res.json()))
				.then(( res) => { 
	              alert("강제퇴실 했습니다.")
				  sessionStorage.removeItem("forc")
				  sessionStorage.removeItem("forcEnd")
				  sessionStorage.removeItem("bench")	
				  location.href = "/adminViews"
				})
		
		}
		}
	})
	 })
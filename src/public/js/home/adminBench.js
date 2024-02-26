const buttons = document.querySelectorAll('.btn-hover');
buttons.forEach( (btnHover) => {
	btnHover.addEventListener('click', kkk)
	  
	function kkk() {   
	   
	const req ={
	wonset : btnHover.id,
	
	} 
	 console.log(req)
	fetch("/adminBench", {
		method: "POST",
		headers: {
		  "Content-Type" : "application/json",
		} ,
		body: JSON.stringify(req),
	   
		})
		.then((res) =>res.json())
		.then((res) =>  { 
			console.log(res)
		  
		 
		}) 
	}
	   })

// // modal 창 구문 start //
const open = () => {
	document.querySelector(".modal").classList.remove("hidden");
}
const close = () => {
	document.querySelector(".modal").classList.add("hidden");
}

document.querySelector("#openBtn").addEventListener("click", open)
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

  

const seet = document.getElementById('seet');
const seetValue = seet.options[seet.selectedIndex].value;

fetch("/", {
	method: "POST",
	headers: {
	  "Content-Type" : "application/json",
	} ,
	 
   
	})
	.then((res) =>res.json())
	.then((res) =>  {  
		  	seet.addEventListener('change', function () {
			const seetValue = seet.options[seet.selectedIndex].value;
			const req = {
			 kindSet: seetValue,
			
			}
			alert("좌석 타입을 변경 하시겠습니까")
			location = "/adminBench"
			fetch("/adminBench", {
				method: "POST",
				headers: {
				  "Content-Type" : "application/json",
				} ,
				body: JSON.stringify(req),
			  
				})
				.then((res) =>res.json())
				.then((res) =>  { 
					
			})
				  
			 })  
	
		
})




 
 


  

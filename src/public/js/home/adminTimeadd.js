

const userId = document.querySelector("#userId")
const userTime = document.querySelector("#times")
 const UserDays= document.querySelector("#days")
 button.addEventListener("click", lo)




function lo() {

    const req = {

   userId: userId.value,
   userTime: userTime.value,
   userDays: UserDays.value

    }
  console.log(req)

  fetch("/adminTimeAdd", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    } ,
    body: JSON.stringify(req),
 
    })
    .then((res) =>res.json())
    .then((res) =>  { 
      
      
     
    })
  
   

}


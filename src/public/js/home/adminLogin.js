
const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector(".btn-primary");

loginBtn.addEventListener("click", adminlogin);

function adminlogin() {
  const req = {
  id : id.value,
  psword : psword.value

  }

  fetch("/adminLogin", {
    method: "POST",
    headers : {
      "Content-Type" :"application/json"
    },
    
     body: JSON.stringify(req),
    })
    .then((res => res.json()))
    .then(( res) => {
        if(res.success) {
          location.href = "/admin"

        } else {
        alert(res.mag)
        }
    })
}
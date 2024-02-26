
const buttons = document.querySelectorAll('.btn-hover');


fetch('/setKind') // AJax를 이용해 파일를 send road 해였다
  .then(res => res.json())
  .then(res => {
     console.log(res,"jjie")
    for (var i = 0; i < res.length; i++) {
       if(res[i].kindSet === "fixedType") {
        console.log("rrrrdd")
        document.getElementById(`${res[i].cdId}set`).setAttribute("data-id", `${res[i].kindSet}`)
      
        document.getElementById(`${res[i].cdId}set`).style.background = "blue"

       }else if(res[i].kindSet === "feeType") {
       console.log("dkfjkedddd")
      document.getElementById(`${res[i].cdId}set`).setAttribute("data-id", `${res[i].kindSet}`)
      document.getElementById(`${res[i].cdId}set`).style.background = "yellow";
      document.getElementById(`${res[i].cdId}set`).style.color = "black"; 
      //roda 한 data를 가지고 각 자리마다 유형을 지정 <-- adminBench에서 값을 받아온것
       }else if(res[i].kindSet === "daysType") {
        console.log(res[i].kindSet)
        document.getElementById(`${res[i].cdId}set`).setAttribute("data-id", `${res[i].kindSet}`)
        document.getElementById(`${res[i].cdId}set`).style.background = "green";
        document.getElementById(`${res[i].cdId}set`).style.color = "black"; 

       }
    }
  })
fetch('/userGoodsKinds')
  .then(res => res.json())
  .then(res => {

    for (var z = 0; z < res.length; z++) {
      var men = res.filter(function (addSave) { return addSave.id === `${res[z].id}` });
      console.log(men)
      for (var y = 0; y < men[0].wonset.length; y++) {

        if (men[0].wonset[y] !== "") {
          console.log(`${men[0].wonset[y]}`)

          document.getElementById(`${men[0].wonset[y]}`).innerHTML = "사용중"
        }


      }


    }




    const tagConter = document.querySelector(".buttons").getElementsByTagName('button').length;

    const arr = [];//좌석수 set  설정
    for (var y = 1; y <= tagConter; y++) {
      arr.push(`${[y]}set`)
    }
    arr.push()
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {

      const set = localStorage.getItem(arr[i])

      if (arr[i] === set) {



      }
    }

  })


buttons.forEach((btnHover) => {
  btnHover.addEventListener('click', kkk)
  
  const index = sessionStorage.getItem('indexof')

  function kkk() {
    const Use =  document.getElementById(btnHover.id).innerText

  if(Use === "사용중"){
  return alert("이미 사용중입니다.")
  } 
    const req = {
      wonset: btnHover.value,
      setGoods: btnHover.dataset.id,
      index
    }
   
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),

    })
      .then((res) => res.json())
      .then((res) => {
       
       
        const CDID =  sessionStorage.getItem('cdId')
        if(res.success === false) {
          alert(res.msg)
        } else {
          
            for (var i = 0; i < res.length; i++) {
              var men = res.filter(function (addSave) { return addSave.id === `${res[i].id}` });
              for (var y = 0; y < men[0].wonset.length; y++) {
                var men = res.filter(function (addSave) { return addSave.id === `${res[i].id}` });

                if (`${men[0].wonset[y]}` !== "" && CDID === null) {
                  

                    document.getElementById(`${men[0].wonset[y]}`).innerHTML = "사용중"
                   
                    //  alert(`${men[0].name}님 열공하세요`)
                    // sessionStorage.removeItem("cdId")
                    // sessionStorage.removeItem("indexof")
                    //  location.href = "/newLogin";
              
                } else if( `${men[0].wonset[y]}` === "" || CDID !== null ) {
                  const CDID =  sessionStorage.getItem('cdId')
                 
                   var mens = res.filter(function (addSave) { return addSave.cdId === CDID });
                    
                    alert(`${mens[0].name}님 열공하세요`)
                    sessionStorage.removeItem("cdId")
                    sessionStorage.removeItem("indexof")
                     location.href = "/newLogin";
    
                     const Use =  document.getElementById(`${men[0].wonset[y]}`).innerHTML
                }
              }
         
            }
         
          
        }
        



      })

  }
});



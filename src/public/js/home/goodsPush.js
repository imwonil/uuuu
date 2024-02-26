const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");
const button = document.querySelector(".button")
const button_2 = document.querySelector("#button_2")
const searchID = document.querySelector("#searchID")
const expiryDay = document.querySelector("#expiryDay")
document.getElementById("expiry").style = "display:none"
document.getElementById("expiryDay").style = "display:none"
const select2 = document.getElementById("feeTypess")
// const nowTime = momentF().format('yyyyMMDDhhmm')
const cdId = moment().format('MMDDhhmm')

//1. 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
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
    console.log(item.value)
    const goods = document.getElementById('goods');
    const a = document.querySelector(".details")

    const goodsname = []
    document.getElementById("expiry").style = "display:none"
    goods.addEventListener('change', function () {

      document.querySelector("#tab2").style = "display:none"




      const seetValue = goods.options[goods.selectedIndex];






      fetch('/adminGoodsKiosk')
        .then(res => res.json())
        .then(data => {
          //
          document.querySelector(".details").style = "display:block"
          document.getElementById("expiry").style = "display:block"
          document.getElementById("expiryDay").style = "display:block"
          const select = document.getElementById("fixedTypess")
          const select2 = document.getElementById("feeTypess")
          const select3 = document.getElementById("daysTypess")


          if (seetValue.value === "fixedType") {
            const select = document.getElementById("fixedTypess")
            document.querySelector(".detail").style = "display:block"
            document.querySelector(".detail2").style = "display:none"
            document.querySelector(".detail3").style = "display:none"
            select.innerHTML = ''
            const userId = data.filter(function (addSave) { return addSave.indexType === "fixedType" });
            for (var i = 0; i < userId[0].feeName.length; i++) {
              const option = document.createElement('option')
              const select = document.getElementById("fixedTypess")
              select.appendChild(option).value = userId[0].feeName[i]
              select.appendChild(option).id = userId[0].feeName[i]
              option.innerText = userId[0].feeName[i]
              select.onclick = () => { myFunction(select.value) };
            }



          }


          if (seetValue.value === "feeType") {
            const select2 = document.getElementById("feeTypess")

            document.querySelector(".detail").style = "display:none"
            document.querySelector(".detail2").style = "display:block"
            document.querySelector(".detail3").style = "display:none"
            select2.innerHTML = ''
            const userId = data.filter(function (addSave) { return addSave.indexType === "feeType" });
            for (var i = 0; i < userId[0].feeName.length; i++) {
              const option = document.createElement('option')
              const select2 = document.getElementById("feeTypess")

              select2.appendChild(option).value = userId[0].feeName[i]
              select2.appendChild(option).id = `${[i]}set`
              option.innerText = userId[0].feeName[i]

            }
            select2.onclick = () => { myFunction(select2.value) };
          }
          if (seetValue.value === "daysType") {
            const select3 = document.getElementById("daysTypess")


            document.querySelector(".detail").style = "display:none"
            document.querySelector(".detail2").style = "display:none"
            document.querySelector(".detail3").style = "display:block"
            select3.innerHTML = ''
            const userId = data.filter(function (addSave) { return addSave.indexType === "daysType" });
            for (var i = 0; i < userId[0].feeName.length; i++) {
              const option = document.createElement('option')
              const select3 = document.getElementById("daysTypess")
              select3.appendChild(option).value = userId[0].feeName[i]
              select3.appendChild(option).id = userId[0].feeName[i]
              option.innerText = userId[0].feeName[i]
              select3.onclick = () => { myFunction(select3.value) };
            }

          }

          function myFunction(nameGoods) { goodsname.push(nameGoods) }
        })



      button.addEventListener("click", surs)

      function surs() {

        document.querySelector(".search").style = "display:block"
        document.querySelector(".button").style = "display:none"
        document.querySelector(".details").style = "display:none"
        document.querySelector(".detail").style = "display:none"
        document.querySelector(".closeBtn2").style = "display:none"
        document.getElementById("goods").style = "display:none"
        document.getElementById("seet").style = "display:none"
        document.getElementById("expiry").style = "display:none"
        document.getElementById("goodss").style = "display:none"
        document.getElementById("stude").style = "display:none"
        document.getElementById("button_2").style = "display:block"
        document.getElementById("expiry").style = "display:none"

        document.querySelector(".detail").style = "display:none"
        document.querySelector(".detail2").style = "display:none"
        document.querySelector(".detail3").style = "display:none"
        console.log(expiryDay.value)


      }




      button_2.addEventListener("click", buu)
      function buu() {


        fetch('/userGoodsKinds')
          .then(res => res.json())
          .then(res => {

            const req = {
              SerachId: searchID.value,
              SerachPhon: searchID.value,
              SerachName: searchID.value
            }

            const userSerachName = res.filter(function (addSave) { return addSave.name === req.SerachName });
            const userSerachPhon = res.filter(function (addSave) { return addSave.phon === req.SerachPhon });

            const goodsName = goodsname[goodsname.length - 1]
            console.log(goodsname[goodsname.length - 1], goodsname)
            if (userSerachPhon[0] !== undefined) {


              const tr = document.createElement('tr')
              const tbody = document.querySelector('tbody')
              tbody.appendChild(tr)
              const td = document.createElement('td')
              const td1 = document.createElement('td')
              console.log(seetValue.value, "dkkfkdkf")
              td.innerText = userSerachPhon[0].phon
              td1.innerText = userSerachPhon[0].name
              tr.appendChild(td).id = userSerachPhon[0].id
              tr.appendChild(td1).id = userSerachPhon[0].id
              document.getElementById(userSerachPhon[0].id).setAttribute('onclick',
                `change(${JSON.stringify(userSerachPhon[0].id)},${JSON.stringify(expiryDay.value)},${JSON.stringify(seetValue.value)},${JSON.stringify(goodsName)})`)




            } else if (userSerachName[0] !== undefined) {

              const see = a.options[a.selectedIndex];
              console.log(userSerachName[0])
              const tr = document.createElement('tr')
              const tbody = document.querySelector('tbody')
              tbody.appendChild(tr)

              const td = document.createElement('td')
              const td1 = document.createElement('td')

              td.innerText = userSerachName[0].phon
              td1.innerText = userSerachName[0].name
              tr.appendChild(td).id = userSerachName[0].id
              tr.appendChild(td1).id = userSerachName[0].id
              document.getElementById(userSerachName[0].id).setAttribute('onclick',
                `change(${JSON.stringify(userSerachName[0].id)},${JSON.stringify(expiryDay.value)},${JSON.stringify(seetValue.value)},${JSON.stringify(goodsName)})`)
            } else { alert("사용자가 존재하지 않습니다.") }


          })
      }



    })









  });

});

function change(userId, expiryDay, feeName, goods) {


  const req = {
    userId,
    feeName,
    expiryName: expiryDay,
    goodsName: goods
  }
  
  fetch("/goodsPush", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(req),
  })
    .then((res => res.json()))
    .then((res) => {
        console.log(res)
         if(res.success === true) {
          alert("상품이 지급되였습니다..")
          location.href = "/adminViews"

         }
        
    })

}
 



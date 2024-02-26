const buttons = document.querySelectorAll('.btn-hover');

buttons.forEach((btnHover) => {
   btnHover.addEventListener('click', goods)

   function goods() {


      const req = {
         goods: btnHover.value

      };


      fetch("/goodsKinds", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(req),

      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res)

            if (res.success) {
               //  location.href = "/Kioce"
            }

         }
         )

   }
});


// 'use strict'
// // const conf = require('../config.js')
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCSELBVEPESDYS5M", "SQOHKJHHH5GMZFPZBKE6YFWXTIAVNGZQ");
// const req =

// {
//   "messages": [{
//       "to": "01071038573",
//       "kakaoOptions": {
//           "pfId": "KA01PF22101008f52rLy9Dzaz3l06DKB",
//           "templateId": "beanstalk-ace",
//           "variables": {
//             "variables": {
//               "#{NAME}" :"임원일",
//               "#{time}" : "1 시간"
        
//             }
//           }
//       }
//   }]
// }
function kk() {

//KA01PF240201072156304ikVz36WEuTC
// 반드시 발신번호와 수신번호는 01012345678 형식으로 입력해주세요!

messageService.send({
  "to": "01071038573",
  "from": "01029718573",
  "kakaoOptions": {
    "pfId": "KA01PF240201053925212fFkWt1ESnqq",
    "templateId": "beanstalk-ace",
    // 치환문구가 없을 때의 기본 형태
    "variables": {
      "#{NAME}" :"임원일",
      "#{time}" : "1 시간"

    }

    // 치환문구가 있는 경우 추가, 반드시 key, value 모두 string으로 기입해야 합니다.
    /*
    variables: {
      "#{변수명}": "임의의 값"
    }
    */

    // disbaleSms 값을 true로 줄 경우 문자로의 대체발송이 비활성화 됩니다.
    // disableSms: true,
  }
});
}
 kk()

// messageService.getKakaoChannelCategories().then(res => {
//   res.forEach(data => {
//     // 채널 카테고리 코드, 실제 연동시에는 카테고리 코드를 추출하여 연동해주시면 됩니다.
//     console.log(data.code);

//     console.log('----');

//     // 채널 카테고리 이름
//     console.log(data.name);
//   });
// });
// const axios = require('axios')

// async function runGetMemberInfo () {
//   try {
//     const { data } = await axios.get('https://api.solapi.com/users/v1/member', {
//       headers: {
//         Authorization: 'HMAC-SHA256 apiKey=NCSAVCBCDEFG9LQP, date=2024-01-27 16:20:43, salt=4779289e1db13a94c56f4ce100cee6b70cbe616e21ad410d5c868e7f731e04e3, signature=00512a7e5555ea15612f1755af5671cde25f92407573a22cab6ed1222a12cdc4'
//       }
//     })
//     console.log(data)
//   } catch (e) {
//     console.log(e)
//   }
// }
// runGetMemberInfo()
// messageService
//   .requestKakaoChannelToken({
//     searchId: 'beanstalk',
//     phoneNumber: '01029718573',
//   })
//   .then(res => console.log(res))




// curl -v -X POST "https://kauth.kakao.com/oauth/token" \
//  -H "Content-Type: application/x-www-form-urlencoded" \
//  -d "grant_type=authorization_code" \
//  -d "client_id=${REST_API_KEY}" \
//  --data-urlencode "redirect_uri=${REDIRECT_URI}" \
//  -d "code=${AUTHORIZE_CODE}"
const url_form_data = new URLSearchParams(

  "grant_type=authorization_code",
   "client_id=b7c9085551cd9efec79671518e94404a",  //자신의 REST API KEY
   "redirect_uri=https://localhost:3000/koko", // 자신의 Redirect URI
   "code=https://kauth.kakao.com/oauth/authorize?client_id=b7c9085551cd9efec79671518e94404a&response_type=code&redirect_uri=https://localhost:3000/koko",
  
   )

// fetch("https://kauth.kakao.com/oauth/token", {
//   method: "POST",
//   headers : {
//    "Content-type": "Content-type: application/x-www-form-urlencoded;charset=utf-8"
//   },
  
//    body: url_form_data
//   })
//   .then((res => res.json()))
//   .then(( res) => { console.log(res,"dkjkjdkfjdfkj")})



// fetch("https://kapi.kakao.com/v1/api/talk/friends", {
// method: "GET",
// headers : {
//   "Content-Type" :"application/json"
// },

//  body: JSON.stringify(req),
// })
// .then((res => res.json()))
// .then(( res) => {


// })
 
   
  //   var options = { method: 'POST',
  //   url: 'https://kauth.kakao.com/oauth/token',
  //   headers: { 'content-type': 'application/json' },
  //    body: {
  //      "grant_type" : "authorization_code",
  // "client_id"  : "b7c9085551cd9efec79671518e94404a",  //자신의 REST API KEY
  // "redirect_uri" : "https://localhost:3000/koko", // 자신의 Redirect URI
  // "code" :"https://kauth.kakao.com/oauth/authorize?client_id=b7c9085551cd9efec79671518e94404a&response_type=code&redirect_uri=https://localhost:3000/koko",
  //   },
  //   json: true
  //  } 



// const liLength = document.getElementsByTagName("li")
// const boxes = document.querySelectorAll('.box_search');
//  console.log(boxes)
 function shareKakaotalk() {

        Kakao.init("ebf09492e6ed1fc74d4a1d70af471c1c"); // 사용할 앱의 JavaScript 키를 설정
        Kakao.Link.sendDefault({
              objectType:"feed"
            , content : {
                  title:"다른 pc에서도 가능?"   // 콘텐츠의 타이틀
                , description:"카카오톡 메시지 전송 연습용임"   // 콘텐츠 상세설명
                , imageUrl:""   // 썸네일 이미지
                , link : {
                      mobileWebUrl:"http://www.naver.com/"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                    , webUrl:"http://www.naver.com/" // PC버전 카카오톡에서 사용하는 웹 링크 URL
                }
            }, buttons : [
                { title:"게시글 확인"    // 버튼 제목
                    , link : {
                        mobileWebUrl:"http://www.naver.com/"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                      , webUrl:"http://www.naver.com/" // PC버전 카카오톡에서 사용하는 웹 링크 URL
                    }
                }
            ]
        });
    
        // const params = new URLSearchParams( {
        //   offset:3
        // }
 
        //    )
        Kakao.Auth.login({
        success: function(authObj) {
          alert(JSON.stringify(authObj));
          Kakao.Auth.setAccessToken(authObj.access_token);
         console.log(authObj.access_token)
       
         

        //  curl -X POST "https://{base_url}/v2/send/kakao" \
        //  -H  "accept: */*" \
        //  -H  "authorization: Bearer {access_token}" \
        //  -H  "Content-Type: application/json" \
        //  -d  '{
        //          "message_type": "AT",
        //          "sender_key": "{senderKey}",
        //          "cid": "202210181600001",
        //          "template_code": "TEMPLATE_001",
        //          "phone_number": "01012341234",
        //          "sender_no": "021112222",
        //          "message": " 알림톡 메시지",
        //          "fall_back_yn": false
        //      }'
fetch("https://{base_url}/v2/send/kakao", {
method: "POST",
headers : {
  "Content-Type" :"application/json",
  "accept":" */*",
  "authorization": "Bearer" `${authObj.access_token}`
  
},

//  body: JSON.stringify({
//   "message_type": "AT",
//            "sender_key": "{senderKey}",
//            "cid": "202210181600001",
//            "template_code": "TEMPLATE_001",
//            "phone_number": "01029718573",
//            "sender_no": "021112222",
//            "message": " 알림톡 메시지",
//            "fall_back_yn": false
// }),
// })
// .then((res => res.json()))
// .then(( res) => {


})
        
        // axios.get("https://kapi.kakao.com/v1/api/talk/friends", params.toString(), Header)
        //    .then(response => {
        //     console.log(response.data);
        //      console.log(response)
        //    })
                     
          
        //    .catch(error => {
        //     console.log(error,"lk");
           
        //    })
         
    


        // fetch("https://kapi.kakao.com/v1/api/talk/friends", {
        //   method: 'GET',
        //   headers : {
        //         "Authorization":  `Bearer ${authObj.access_token}`,
        //         "Content-Type" :"application/x-www-form-urlencoded"
                
        //       },
        // })
      


              
      },
      fail: function(err) {
          alert(JSON.stringify(err))
      },
      
      
      })
      
   

    // curl -v -G GET "https://kapi.kakao.com/v1/api/talk/profile" \
    // -H "Authorization: Bearer ${ACCESS_TOKEN}"
}

    // "2ILjYDozp_R9Erjt5yqw73PdG2EXkeq0omoKPXPsAAABjPkImB7UNEQ5evY1pg" 토큰
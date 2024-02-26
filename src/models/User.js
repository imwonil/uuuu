const UserStorage = require( "../models/UserStorage")

class User {
 
constructor(body) {
this.body = body


}
async login(){
  const client = this.body


  const {id, psword} = await UserStorage.getUserInfo(client.id)

  if(id){
     if(client.id === id && psword === client.psword ){
      const a = UserStorage.As(client); 
      return {success: true}
    
  }
  return {success: false , msg : "비밀번호가 틀립"}
  }
  return {success: false , msg : "아이디가 다릅니다.."}
  


  // if(client.id === id && client.noName !== "username" && client.psword !== psword  ) {
  //          return {success: false , msg: "비밀번호를 확인 하세요"}
    
  //       }else if(client.id !== id && client.noName !== "username" &&client.psword === psword) { 
  //          return  {success: false , msg: "아이디를 확인해주세요"} 

  //             }
  //               else if(client.id !== id && client.noName === "username" && client.psword !== psword){
  //                     const a = UserStorage.As(client); 
  //                     return client.noName
  //                   }
  //                   else if(client.id === id && client.noName !== "username" && client.psword === psword) {
                   
  //                       const a = await UserStorage.As(client); 
                           
  //                                  return {success: true , msg: client.id} 
  //                   }     else if(client.id !== id && client.noName !== "username" && client.psword !== psword) {
                   
  //                     return  {success: false , msg: "아이디와 비번을 확인해주세요"} 
  //                 }
////////////////////////////DB 구축 했을때 쓰임 ///////////////////////////////////
//const client = this.body

// try {
//  if(client.noName !== "username") {
 
//    const {id, psword}  =  await UserStorage.getUserInfo(client.id)
   

//   if(client.id === id && client.noName !== "username" && client.psword !== psword  ) {
//            return {success: false , msg: "비밀번호를 확인 하세요"}
    
//         }else if(client.id !== id &&client.psword === psword) { 
//            return  {success: false , msg: "아이디를 확인해주세요"} 

//               }
//                 // else if(client.id !== id && client.noName === "username" && client.psword !== psword){
//                 //       const a = UserStorage.As(client); 
//                 //       return client.noName
//                 //     }
//                     else if(client.id === id && client.noName !== "username" && client.psword === psword) {
                   
//                         const a = await UserStorage.As(client); 
                           
//                                    return {success: true , msg: client.id} 
//                     }     else if(client.id !== id && client.noName !== "username" && client.psword !== psword) {
                   
//                       return  {success: false , msg: "아이디와 비번을 확인해주세요"} 
//                   }
              
//                 }   }catch (err) {
//                     return {success: false , msg: "아이디를 확인하세요"}
//                 }
                
//                 if(client.noName === "username") {
//                   const a = UserStorage.As(client); 
//                   return client.noName
//                 }

                }

async register(){
const client = this.body
try {
  const response = await UserStorage.save(client)
  return response 
}catch (err) {
   return {success: false} }


  
}

   
     async rss() {
      const client = this.body


    
      
    
  }
   loguttime() {
     
     const client =this.body 
     const a =UserStorage.logouttimes(client) 
      return a
    }
        
 async loca(){
const client = this.body
 
   
const {id, psword}  = await UserStorage.getUserInfo(client.id)


  if(client.id === id && client.noName !== "username" && client.psword !== psword  ) {
           return {success: false , msg: "비밀번호를 확인 하세요"}
    
        }else if(client.id !== id && client.noName !== "username" &&client.psword === psword) { 
           return  {success: false , msg: "아이디를 확인해주세요"} 

              }
                else if(client.id !== id && client.noName === "username" && client.psword !== psword){
                      
                      return client.noName
                    }
                    else if(client.id === id && client.noName !== "username" && client.psword === psword) {
                   
                      const client =this.body 
                       const a = await UserStorage.locaUser(client)
                      return  {a , success:true}
                    }     else if(client.id !== id && client.noName !== "username" && client.psword !== psword) {
                   
                      return  {success: false , msg: "아이디와 비번을 확인해주세요"} 
                  }
                }
      

   async certiFication() { 
    const client = this.body
    const a =  UserStorage.Certification(client)
    return a
     }
 
}
module.exports = User;


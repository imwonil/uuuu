const UserStorage = require( "./UserStorage")

class Benchs {

constructor(bench) {
this.bench = bench

}
async Add () {
  const add = this.bench;

  
  try{
  const a = await UserStorage.Addsavesk(add);
  }catch(err) {
    return {success: false, msg: err}

  }
  const a = await UserStorage.Addsavesk(add);
 
  return a;

}
async Acc () {
  
    const add = this.bench;
    const response =  UserStorage.days(add); //UserStorage 321
     return response
  }
 async goodskinds() {
    const add =this.bench;
    const goods= await UserStorage.goods(add)
     return goods
 }
  setKind() {
  const add =this.bench;

  const goods=  UserStorage.adminSetKindSave(add)
  //  return goods
}
async adminNext() {
  const  c =  this.bench
  const a = await UserStorage.adminnext(c) 
  return a
}
async modIfy() {
  const  c =  this.bench
  const a = await UserStorage.modify(c) 

  return a
}
async TimeSubAdd() {
  
  const  c =  this.bench
  const a = await UserStorage.timesubadd(c) 
 
  return a
}
async adimingoods() {
  
  const  c =  this.bench
  const a = await UserStorage.adminGoods(c) 
  
  return a;
  
}
async Userinfor() {
  
  const  c =  this.bench
  const a = await UserStorage.Userinfor(c) 
  return a
  
}
async Forcibley() {
  
  const  c =  this.bench
  const a = await UserStorage.forciBley(c) 
  return a
  
}
async getNext() {
  
  const  client =  this.bench
  const a = await UserStorage.getnext(client) 
  console.log(a)
  return a
  
}
async KoKo() {
  
  const  client =  this.bench
  const a = await UserStorage.KOKO(client) 
 
  return a
  
}
}
module.exports = Benchs;


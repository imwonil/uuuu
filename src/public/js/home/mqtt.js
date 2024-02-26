// //MQTT 보내는 쪽
// const mqtt = require("mqtt");


// const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com",{clientid:"emc22wonil/wonil/ilim"});

// var topic="emc22wonil/wonil/ilim"
// var message = "2"
// var options= {
//     retain:true,
//     qos:0 // 정확도

// };

// // 받는곳_1
// var count = 0
// client.on("message", function(topic, msg, packet){
//     console.log(" messabe : "+msg);
   
   
//    });  
//    // 받는곳_2
// client.on("connect", function() {
// console.log("connected "+ client.connected);
// client.subscribe(topic,{qos:0});

// })


// //publish  발해하는 곳
// function publish(topic,message,options) {
//    console.log(topic, message,"re", options)
//     if(client.connected == true) {
//      console.log("publish :{ ",topic," : ",message,"}" )
//      //topic으로 를 발행한다.
     
//      client.publish(topic,message,options);
   
    
//     } 
    

  
//    }


  

//    setInterval(() => { publish(topic,message,options)},1000)
//     // var timer_id=setInterval(function() {count+1, message = "2" ;},1000) 
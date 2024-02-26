//MQTT 보내는 쪽
const mqtt = require("mqtt");


const client = mqtt.connect("mqtt://broker.mqtt-dashboard.com",{clientid:"emc22wonil/wonil/ilim"});

var topic="emc22wonil/wonil/ilim"

var options= {
    retain:true,
    qos:0 // 정확도

};
var message= "나온다"

var count = 0
client.on("message", function(topic, msg, packet){
    console.log(" messabe : "+msg);
   
   
   });  
client.on("connect", function() {
console.log("connected "+ client.connected);
client.subscribe(topic,{qos:0});

})


//publish 
function publish(topic,message,options) {
   
    if(client.connected == true) {
     console.log("magen :{ ",topic," : ",message,"}" )
     
     client.publish(topic,message,options);
   
    
    } 
    

  
   }





    var timer_id=setInterval(function() {count+1, message = "노온다" ;publish(topic,message,options);},1000) 
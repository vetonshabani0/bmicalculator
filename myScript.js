var take_age=document.getElementById("take_age");
var take_weight=document.getElementById("take_weight");
var take_height=document.getElementById("take_height");
var save_value=document.getElementById("save_value");
var bmi_value=document.getElementById("bmi_value");
var calculate_data=document.getElementById("calculate_data");
var health_result=document.getElementById("health_result");


save_value.onclick=function(){
     
    localStorage.setItem("age",take_age.value);
    localStorage.setItem("weight",take_weight.value);
    localStorage.setItem("height",take_height.value);
    localStorage.setItem("bmi_value",take_weight.value/(take_height.value*take_height.value)*10000);
    bmi_value.textContent= localStorage.getItem("bmi_value");
    
    
}

calculate_data.onclick=function(){
   if(localStorage.getItem("age")>=18   && bmi_value.textContent<25 && bmi_value.textContent>15){
        
        health_result.textContent= "You are healthy!";
   }
   else if(localStorage.getItem("age")<18 && bmi_value.textContent<24  && bmi_value.textContent>14){
        health_result.textContent= "You are healthy!";
   }
   else{
        health_result.textContent= "You are not healthy!"
   }
}
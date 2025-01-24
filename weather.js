let CityData={
Tehran: {city:"Tehran" , temp:12 , windspeed:40 },
Sanandaj: {city:"Sanandaj" , temp:21  , windspeed:10 },
Marivan: {city:"Marivan" , temp:32  , windspeed:20 }
}
let SearchBox=document.querySelector(".input")
let SearchBottom=document.querySelector(".svg-search")

SearchBottom.addEventListener("click" , function(){
let SearchValue=SearchBox.value
let ciytdata2=CityData[SearchValue]
console.log(ciytdata2)

if(ciytdata2){
document.querySelector(".weater-city").innerHTML=ciytdata2.city
document.querySelector(".c-city").innerHTML=ciytdata2.temp+ " C"
document.querySelector(".s-city").innerHTML=ciytdata2.windspeed+ " km/h"

}
else{
    alert("Enter Correct City")
}

})

function areaTriangle(){
  let basetriangle= getbaseValue("base-tri")
  let heighttriangle= getbaseValue("height-tri")
  let area= .5 * basetriangle * heighttriangle
  
  getarea('area-tri',area)
  showArea('Triangle',area)


}

function areaReactangle(){
  let basetriangle= getbaseValue("base-Rec")
  let heighttriangle= getbaseValue("height-Rec")
  let area=  basetriangle * heighttriangle
  
  getarea('area-Rec',area)
  showArea('Reactangle',area)


}

function areaParallelogram(){
  let basetriangle= getbaseValue("base-Par")
  let heighttriangle= getbaseValue("height-Par")
  let area=  basetriangle * heighttriangle
  
  getarea('area-Cal',area)
  showArea('Parallelogram',area)


}

function getbaseValue(base){
  let basetext= document.getElementById(base)
  let newElement=parseFloat(basetext.value)

  return newElement
}

function getarea(element, area){
  let areaId=document.getElementById(element)
    areaId.innerText = area
}

function showArea(element, area){
  let areaId=document.getElementById("dashboard-calculation")
    let p = document.createElement('p')
    let count= areaId.childElementCount
    p.innerHTML= `${count+1} ${element} ${area} cm <sup>2 </sup> <button class="btn btn-primary"
  onclick="converter(${area})">Calculate</button>`
    areaId.appendChild(p)
}
function converter(area){
  let converttoMeter= area/100
  alert(converttoMeter+ "m")
}
  





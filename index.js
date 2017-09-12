//var katzDeli = []

function takeANumber(katzDeliLine, name){
 katzDeliLine.push(name)
 var position = katzDeliLine.length
 return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!"
  }
  else{
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length==0){
    return "The line is currently empty."
  }
  else{
    var line = "The line is currently: "
    for(var i=0; i<katzDeliLine.length; i++){
      line+=`${i+1}. ${katzDeliLine[i]} `
    }
    return line
  }

}

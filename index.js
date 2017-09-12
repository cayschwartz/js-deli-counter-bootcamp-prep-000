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
 String line = "The line is currently: "
 
 
  
}
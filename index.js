//var katzDeli = []

function takeANumber(katzDeliLine, name){
 katzDeliLine.push(name)
 var position = katzDeliLine.length
 return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!"
  }
}
}

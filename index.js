const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  
}
function appendKitten(name){
  var newKittens = [...kittens,name]
  return new Kittens
}
function prependKitten(name){
  var newKittens=[name, ...kittens]
}
function removeLastKitten(name){
  
}
function removeFirstKitten(name){
  
}
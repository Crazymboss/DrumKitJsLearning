
for ( let i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonInnerHtml = this.innerHTML
    sound(buttonInnerHtml)
    animation(buttonInnerHtml)
  })
}

document.addEventListener("keypress", function(event){
    sound(event.key)
    animation(event.key)
})

function sound(key){
  switch(key){
    case "w":
      let crash = new Audio("sounds/crash.mp3")
      crash.play()
      break;
    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3")
      kickBass.play()
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3")
      snare.play()
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break; 
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break; 
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break; 
    default: console.log(buttonInnerHtml)
  }
}

function animation(currentKey){
  let actvBtn = document.querySelector("."+currentKey);
  actvBtn.classList.add("pressed")
  setTimeout(function(){
    actvBtn.classList.remove("pressed")
  }, 100)
}
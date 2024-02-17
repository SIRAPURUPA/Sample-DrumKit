// By Pressing Buttons

var n = document.querySelectorAll(".drum").length;
for(var i=0 ; i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",playSound);
}
function playSound(){
  var buttoninHtml=this.innerHTML;
  makeSound(buttoninHtml);
  buttonActive(buttoninHtml);
}

// By Pressing Keyboard
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonActive(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var aud = new Audio("sounds/tom-1.mp3");
      aud.play();
      break;
  
    case "a":
      var aud = new Audio("sounds/tom-2.mp3");
      aud.play();
      break;

    case "s":
      var aud = new Audio("sounds/tom-3.mp3");
      aud.play();
      break;
  
    case "d":
      var aud = new Audio("sounds/tom-4.mp3");
      aud.play();
      break;
 
    case "j":
      var aud = new Audio("sounds/snare.mp3");
      aud.play();
      break;

    case "k":
      var aud = new Audio("sounds/crash.mp3");
      aud.play();
      break;
 
    case "l":
      var aud = new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;
 
    default:
      console.log(buttoninHtml)
      break;
  }
}

function buttonActive(ckey){
  var activebtn = document.querySelector("."+ckey);

  activebtn.classList.add("pressed");

  setTimeout(function(){
    activebtn.classList.remove("pressed");
  } , 100);

}
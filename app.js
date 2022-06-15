let shareBtn = document.querySelector(".share-btn")
let socialIcons = document.querySelector(".social-icons")
let triangle = document.querySelector(".triangle")

shareBtn.addEventListener("click", function(){
  socialIcons.classList.toggle("visible")
  triangle.classList.toggle("visible")
})

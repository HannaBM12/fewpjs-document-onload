// Your code goes here
// document.addEventListener('DOMContentLoaded', function(){
//     console.log("DOM is Loaded")
// })
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// )

document.addEventListener("DOMContentLoaded", function(){
    let pharagraph = document.querySelector("#text")
    pharagraph.textContent = "This is really cool!"

})

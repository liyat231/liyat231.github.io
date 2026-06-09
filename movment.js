box = document.getElementsByClassName("shape")[0]


document.getElementById("btn").addEventListener("click", (e)=>{
    //document.getElementsByClassName("box")[0].classList.toggle('move')
   box.style.animationPlayState = "running"
   console.log(box.style.animationPlayState)
})


document.getElementById("pbtn").addEventListener("click", (e)=>{
    //document.getElementsByClassName("box")[0].classList.toggle('move')
   box.style.animationPlayState = "paused"
   console.log(box.style.animationPlayState)
})
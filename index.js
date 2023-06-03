const showguest = document.querySelector(".show-guest")
const showhome = document.querySelector(".show-home")
const newgame = document.querySelector(".new-game")
const btnadd1h   =  document.querySelector(".btn-add1h")
const btnadd2h   =  document.querySelector(".btn-add2h")
const btnadd3h   =  document.querySelector(".btn-add3h")
const btnadd1g   =  document.querySelector(".btn-add1g")
const btnadd2g   =  document.querySelector(".btn-add2g")
const btnadd3g   =  document.querySelector(".btn-add3g")
let counth = 0
let countg = 0
btnadd1h.addEventListener("click", () =>{
    counth += 1
    showhome.textContent = counth
})

btnadd2h.addEventListener("click", () =>{
    counth += 2
    showhome.textContent = counth
})

btnadd3h.addEventListener("click", () =>{
    counth += 3
    showhome.textContent = counth
})

btnadd1g.addEventListener("click", () =>{
    countg += 1
    showguest.textContent = countg
})

btnadd2g.addEventListener("click", () =>{
    countg += 2
    showguest.textContent = countg
})

btnadd3g.addEventListener("click", () =>{
    countg += 3
    showguest.textContent = countg
})

newgame.addEventListener("click", () =>{
    counth = 0
    countg = 0
    showhome.textContent = counth
    showguest.textContent = countg
})
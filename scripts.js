
 let btnNext = document.querySelector(".next")
 let btnBack = document.querySelector(".back")


let container = document.querySelector(".container")
let list = document.querySelector(".container .list")
let thumb = document.querySelector(".container .thumb")



btnNext.onclick = () => moveItensonOclick("next")
btnBack.onclick = () => moveItensonOclick("back")

function moveItensonOclick(type){

    let listItens = document.querySelectorAll(".list .list-itens")
    let thumbItens = document.querySelectorAll(".thumb .list-thumbs")

    console.log(listItens)
    console.log(thumbItens)



    if(type === "next") {
      list.appendChild(listItens[0])
      thumb.appendChild(thumbItens[0])
      container.classList.add("next")

    } else {
      list.prepend(listItens[listItens.length -1])
      thumb.prepend(thumbItens[thumbItens.length -1])
      container.classList.add("back")
    }

    setTimeout(() => {
        container.classList.remove("next")
        container.classList.remove("back")
    }, 3000);

    
}


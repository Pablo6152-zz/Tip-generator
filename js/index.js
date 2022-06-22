import {acquireWallpaper, authorDetails} from './wallpaper.js'
import {getData} from './author.js'

const authorSect = document.getElementById("modal-el")
const totalAmountEl = document.getElementById("total-amount-el")
const tipPercentageEl = document.getElementById("tip-percentage-el")
const splitPersons = document.getElementById("split-persons")
const mainContainerResult = document.getElementById("main-component-result")
const clearBtn = document.getElementById("clear-btn")
let finalTip = 0
let eachPersonAmount = 0
const emojiCollection = ["😄", "🧐", "😬", "🤑", "🤠", "🙂", "😃"]

clearBtn.addEventListener("click", acquireWallpaper)

document.getElementById("calculate-btn").addEventListener("click", () =>{
    finalTip = totalAmountEl.value * (tipPercentageEl.value / 100)

    if (splitPersons.value > 0){
        eachPersonAmount = finalTip / splitPersons.value
    }

    document.getElementById("main-component-calculate").classList.add("inactive")
    document.getElementById("main-component-result").classList.remove("inactive")

    mainContainerResult.innerHTML = `
            <button id="go-back"><</button>
            <h2 class="operation-complete">Completed!</h2>
            <button id="share">!</button>

            <p class="result-text">
                Paying <span class="accent-text">${totalAmountEl.value}$</span> 
                with <span class="accent-text">${tipPercentageEl.value}%</span> of tip 
                results in <span class="accent-text">${finalTip}$</span>,
                ${splitPersons.value} friends so ${eachPersonAmount}$ per person ${emojiCollection[Math.floor((Math.random() * 6) + 0)]}.
                </p>
        `

    document.getElementById("go-back").addEventListener("click", function (){
        document.getElementById("main-component-calculate").classList.remove("inactive")
        document.getElementById("main-component-result").classList.add("inactive")
    })
})



export {mainContainerResult, authorSect}
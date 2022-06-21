import * as counter from './counter.js'

const totalAmountEl = document.getElementById("total-amount-el")
const tipPercentageEl = document.getElementById("tip-percentage-el")
const splitPersons = document.getElementById("split-persons")
const appContainer = document.getElementById("site-bg")
let finalTip = 0
let eachPersonAmount = 0

document.getElementById("calculate-btn").addEventListener("click", () =>{
    finalTip = totalAmountEl.value * (tipPercentageEl.value / 100)

    if (splitPersons.value > 0){
        eachPersonAmount = finalTip / splitPersons.value
    }

    console.log (finalTip)
    appContainer.innerHTML = `
    
    <div id="main-component" class="after">
            <button id="go-back"><</button>
            <h2 class="operation-complete">Completed!</h2>

            <p class="result-text">
                Paying <span class="accent-text">${totalAmountEl.value}$</span> 
                with <span class="accent-text">${tipPercentageEl.value}%</span> of tip 
                results in <span class="accent-text">${finalTip}$</span>,
                ${eachPersonAmount}$ per person 😀.
                </p>

                
            
            <button id="share">!</button>
        </div>
        `
})
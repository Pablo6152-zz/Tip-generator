const splitPersons = document.getElementById("split-persons")

document.getElementById("counter-sub").addEventListener("click", () => splitAccount(0))
document.getElementById("counter-add").addEventListener("click", () => splitAccount(1))


function splitAccount(operation){
    if (operation){
        splitPersons.stepUp()
    } else if (!operation){
        splitPersons.stepDown()
    }
    noNegativeValues()
}

function noNegativeValues(){
    if (splitPersons.value < 0){
        splitPersons.value = 0
    }
}

export default splitAccount
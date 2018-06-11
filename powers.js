/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
let flightHandler = function (flight) {
    const flying = document.querySelector('#flight');
    flying.classList.add('enabled')
    flying.classList.remove('disabled')
}
/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

let mReadingHandler = function (mindRead) {
    const mindReading = document.querySelector('#mindreading');
    mindReading.classList.add('enabled')
    mindReading.classList.remove('disabled')
    
}

let xRayHandler = function (xRay) {
    const xRays = document.querySelector('#xray');
    xRays.classList.add('enabled')
    xRays.classList.remove('disabled')
}

let activateAllPowers = function (all) {
    let allPowers = document.querySelectorAll('.power');
    allPowers.forEach(item => {
        item.classList.add('enabled')     
        item.classList.remove('disabled')   
    })
    // console.log(activateAllPowers);
}

let deactivateAllPowers = function (all) {
    let allPowers = document.querySelectorAll('.power');
    allPowers.forEach(item => {
        item.classList.add('disabled')
        item.classList.remove('enabled')
    })
}

document.querySelector("#activate-flight").addEventListener('click', flightHandler)
document.querySelector("#activate-mindreading").addEventListener('click', mReadingHandler)
document.querySelector("#activate-xray").addEventListener('click', xRayHandler)
document.querySelector('#activate-all').addEventListener('click', activateAllPowers)
document.querySelector('#deactivate-all').addEventListener('click', deactivateAllPowers)


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/
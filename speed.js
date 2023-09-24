// grab elements from the html and declare them as variables
let carSpeed = document.getElementById('speed')
let demeritPoint = document.getElementById('out-1')
let btn1 = document.getElementById('btn-1')

// create a function to check if speed is greater than 70
 function getDemeritPoint(){
    if (carSpeed.value<=70) {
        demeritPoint.innerHTML = "Ok"
    } else {
        demeritPoint.innerHTML = (carSpeed.value - 70)/5
        // create a if statement to check if Demerit point is greater than 12
        if (((carSpeed.value-70)/5)>12) {
            demeritPoint.innerHTML="License Suspended"
        }
    }
 }

 // add an event listener to call getDemeritpoint when button is clicked 

 btn1.addEventListener('click',getDemeritPoint)
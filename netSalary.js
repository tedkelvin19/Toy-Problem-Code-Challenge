let basicSalary = document.getElementById('salary')
let userBenefit = document.getElementById('benefit')
let netSalary = document.getElementById('net-salary')
let btnNet = document.getElementById('btn-net')
// claculate gross salary
var grossSalary = Number(basicSalary.value)+ Number(userBenefit.value)
//  assign this variable to the function that calculates tax
var taxDeduction = taxDeduct() 
//  assign this variable to the function that calculates NHIF
var nhifDeduction = nhifDeduct() 
//claculate NSSF deduction
var nssfDeduction = 0.06*grossSalary 
/// create a function to calculate tax deductions
function taxDeduct(){
         if(grossSalary<=24000) {
            return 0.1*grossSalary
            
          } else if (grossSalary>24000 && grossSalary<=32333) {
             return 0.25*grossSalary
          } else if (grossSalary>32333 && grossSalary<=500000) {
            return 0.3*grossSalary
             
          } else if (grossSalary>500000 && grossSalary<=800000) {
             return 0.325*grossSalary
            
         } else {
             return 0.35*grossSalary
            
          }
}

// create a function that calculate  NHIF deduction

function nhifDeduct(){
    if (grossSalary<6000) {
        return  150
    } else if (grossSalary<8000) {
        return  300
    } else if (grossSalary<12000) {
        return 400
    } else if (grossSalary<15000) {
        return 500
    } else  if (grossSalary<20000) {
        return 600
    } else if (grossSalary<25000) {
        return 750
    } else if (grossSalary<30000) {
        return 850
    } else if (grossSalary<35000) {
        return 900
    } else if (grossSalary<40000) {
        return 950
    } else if (grossSalary<45000) {
        return 1000
    } else if (grossSalary<50000) {
        return 1100
    } else if (grossSalary<60000) {
        return 1200
    } else if (grossSalary<70000) {
        return 1300
    } else if (grossSalary<80000) {
        return 1400
    } else if (grossSalary<90000) {
        return 1500
    } else if (grossSalary<100000) {
        return 1600
    } else {
        return 1700
    }  
}
// calculate the net salary and display
function netCalculate(){
    
    netSalary.innerHTML += `Gross Salary : ${grossSalary}\n
    PAYE: ${taxDeduction}\n
    NHIF deduction : ${nhifDeduction}\n
    Nssf deduction : ${nssfDeduction}\n
    Net Salary is ${grossSalary-taxDeduction-nssfDeduction-nhifDeduction}`
}
// add a click event to the button to call netCalculate function
btnNet.addEventListener('click',netCalculate)
// grab elements from the html file
let studentMark = document.getElementById('marks')
let studentGrade = document.getElementById('grade') 
let btn1 = document.getElementById('btn-1')
// create an array of grades
const grades = ["A","B","C","D","E"] 
// create a function to check the marks entered and display the grade
function validateGrade(){
    if (studentMark.value>79) {
        studentGrade.innerHTML = `Student mark is ${studentMark.value}. Student grade is ${grades[0]}.` 
    }
    if (studentMark.value<=79 && studentMark.value>=60) {
        studentGrade.innerHTML = `Student mark is ${studentMark.value}. Student grade is ${grades[1]}.` 
    } else if (studentMark.value<=59 && studentMark.value>=49) {
        studentGrade.innerHTML = `Student mark is ${studentMark.value}. Student grade is ${grades[2]}.` 
    } else if (studentMark.value<=49 && studentMark.value>=40) {
        studentGrade.innerHTML = `Student mark is ${studentMark.value}. Student grade is ${grades[3]}.` 
    } else if(studentMark.value<40) {
        studentGrade.innerHTML = `Student mark is ${studentMark.value}. Student grade is ${grades[4]}.`   
    } 

}
// add eventlistener to call the validateGrade when the get grade is clicked
btn1.addEventListener('click',validateGrade)

const date = new Date(prompt("enter the date "));
document.write("Day is :" + date.getDay());
// if(date.getDay()===0){
//     document.write("sunday");
// }
if (date.getDay() === 1) {
    document.write("sunday");
}
if (date.getDay() === 2) {
    document.write("monday");
}
if (date.getDay() === 3) {
    document.write(" tuesday");
}
if (date.getDay() === 4) {
    document.write("wednesday");
}
if (date.getDay() === 5) {
    document.write("thurday");
}
if (date.getDay() === 6) {
    document.write("friday");
}
if (date.getDay() === 7) {
    document.write("saturday");
}
let name='Samy';
let score=100;
let DidPass=true;
let grade1=40;
let grade2=60;
let allowedin=false;
let age1=20;
let age2=25;
console.log("Name: "+name);
console.log("Score: "+score);
console.log("Did Pass: "+DidPass);
if (grade1 >= 50) {
    console.log("First Student: Passed")
}
else {
    console.log("First Student: Failed")
}
if (grade2 >= 50) {
    console.log("Second Student: Passed")
}
if (grade1 > grade2) {
    console.log("First Student has a higher grade than the second student")
}
else if (grade1 < grade2) {
    console.log("Second Student has a higher grade than the first student")
}
if (age1 >= 18) {
    console.log("First Person is an Adult")
    let allowedin=true;
    console.log("Allowed in: "+allowedin)
}
if (age2 < 18) {
    console.log("Second Person is a Minor")
}
for (let i=1; i<=10; i++) {
    console.log(i)
}
for (let i=1; i<=10; i++) {
    i = i + 1
    console.log(i)
}
function sum(a, b) {
    return a + b;
}
function check(grade) {
    if (grade >= 50) {
        return "This student has passed";
    }
    else {
        return "This student has failed";
    }
}
function average(a, b, c, d) {
    return (a + b + c + d) / 4;
}
let sumexample=sum(1, 2);
let checkexample=check(70);
let averageexample=average(40, 60, 80, 100);
console.log(sumexample);
console.log(checkexample);
console.log(averageexample);
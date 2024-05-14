//Практическая работа №1
//Задание 1
let per1="ф";
if(typeof(per1)==='string'){
    console.log("Это строковая переменная");
}
else if(typeof(per1)==='number'){
    console.log("Это числовая переменная");
}
else if(typeof(per1)==='boolean'){
    consloe.log("Это логическая переменная");
}
else{
    console.log("Это переменная другого");
}
let chet = prompt("Введите ваш пол.");
//Задание 1
switch(chet.toLowerCase()){
    case "мужской":
        alert("Привет, мужчина.");
        break;
    case "женский":
        alert("Привет, женщина.");
        break;
}
//Задание 2
for(let i=1;i<41;i++){
    console.log(i);
}
let whileVar=1;
while(whileVar<41){
    console.log(whileVar);
    whileVar++;
}
whileVar=1;
do{
    console.log(whileVar);
    whileVar++;
}while(whileVar<41);
//Задание 3
while(1>2){ //Чтобы вирус заработал, нужно поставить 0 вместо 2
    alert("Это вирус");
}
//Задание 4
let chislo1=prompt("Введите первое число");
let chislo2=prompt("Введите второе число");
let chislo3=prompt("Введите третье число");
let arrChisel=[chislo1,chislo2,chislo3];
arrChisel.sort((a,b)=>a-b);
document.write("Числа по возрастанию:",arrChisel);
//Задание 5
for(let i=0;i<16;i++){
    if(i%2==0){
        console.log(i,"-четное");
    }
    else{
        console.log(i,"-нечетное");
    }
}
//Задание 6
let bol5;
while(1){
    bol5=prompt("Введите число больше 5");
    if(bol5>5){
        alert("Молодец!!!");
        break;
    }
    else if(bol5==null){
        alert("А могли бы написать число и быть счастливы");
        break;
    }
    else{
        alert("Неверно, попробуйте еще раз.");
    }
}
//Задание 7
for(let i=8;i<21;i+=2){
    console.log(i);
}
//Задание 8
let sum35=0;
for(let i=0;i<1001;i++){
    if(i%3==0 || i%5==0){
        sum35=sum35+i;
    }
}
console.log(sum35);
//Задание 9
let armStr=371;
let tempArmStr=armStr;
let tempArm=0;
while(tempArmStr>9){
    tempArm=tempArm+((tempArmStr%10)**3);
    tempArmStr/=10;
}
tempArm=tempArm+tempArmStr**3;
if(armStr==tempArm){
    console.log(armStr,"-это число армстронга");
}
//Задание 10
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
//Практическая работа №2


 const userName=prompt("Как вас зовут?");

function hiUser(userName){
    alert("Приветствуем вас " + userName);
}

function min(a,b){
    if(a>b){
        return b;
    }
    else{
        return a;
    }
}

function kvadratUrav(){
    let a=prompt("Введите первый кф квадратного уравнения.");
    if(a==null){
        return null;
    }
    let b=prompt("Введите второй кф квадратного уравнения.");
    if(b==null){
        return null;
    }
    let c=prompt("Введите третий кф квадратного уравнения.");
    if(c==null){
        return null;
    }
    let disc=0;
    let x1=0;
    let x2=0;
    disc=b**2-4*a*c;
    if(disc>0){
        x1=(-b+Math.sqrt(disc))/2*a;
        x2=(-b-Math.sqrt(disc))/2*a;
        return x1,x2;
    }
    else if(disc==0){
        x1=-b/2*a;
        return x1;
    }
    else{
        alert("Нет корней");
        return null;
    }
}
//Практическая работа №3
let arr = [1,2,3,4,5];
let arr2 = new Array();
let arr3 = Array.of();
console.log(arr[4]);
arr[4]=6;
function lenArr(){
    console.log(arr.length);
}
document.addEventListener("mouseover",lenArr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let tempikWhile;
tempikWhile=arr.length
while(tempikWhile>0){
    console.log(arr[tempikWhile]);
    tempikWhile--;
}
let arr4 = [-1,-2,-3,-4,-5];
for(let i=0;i<arr.length;i++){
    arr4.push(arr[i]);
}
console.log(arr4);
arr4.shift;
console.log(arr4);
arr4.shift;
console.log(arr4);
arr4.pop(1);
console.log(arr4);
let dlinnaMassiva=prompt("Сколько будет элементов в массиве");

for(let i=0;i<dlinnaMassiva;i++){
    arr2[i]=prompt("Введите элемент массива");
}
console.log(arr2);
for(let i=0;i<dlinnaMassiva;i++){
    if(arr2[i]>=0 || arr2[i]<=0 && arr2[i]!=null){
        arr3.push(Math.sqrt(arr2[i]));
    }
}
console.log(arr3);
let currentDate = new Date(); 
console.log(currentDate);
const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
console.log(currentDate.toLocaleDateString('ru-RU', options));
function randUm(){
    let rdNum1 = Math.floor(Math.random() * 51);
    let rdNum2 = Math.floor(Math.random() * 51);
    return rdNum1*rdNum2;
}
//Практическая работа №4
let  student2 = new Object();
let student = {
    nameST: "Dima",
    age: 18,
    institut: "ИНПИТ",
    napravlenie: "ИФСТ",
    viewAge(){
        alert(this.age);
    },
    viewName(){
        alert(this.nameST);
    },
    viewInstitut(){
        alert(this.institut);
    },
    viewNapravlenie(){
        alert(this.napravlenie);
    }
};
student.viewAge();
student.viewName();
function studentConstructor(nameST,age,institut,napravlenie){
    this.nameST=nameST;
    this.age=age;
    this.institut=institut;
    this.napravlenie=napravlenie;
    this.viewAge=function(){
        return alert(age);
    },
    this.viewName=function(){
        return alert(nameST);
    },
    this.viewInstitut=function(){
        return alert(institut);
    },
    this.viewNapravlenie=function(){
        return alert(napravlenie);
    }
}
let student1=new studentConstructor("Максим",18,"ИНПИТ","ПИНЖ");
console.log(student1);

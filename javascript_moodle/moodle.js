// variables
// task1
var geograpic_location="banglore";
var job_title="gd";
var a="you will be a  "+job_title+  " in "+geograpic_location;
console.log(a);

// task2
var firstName="RAM",lastName="Kumar",age=30;
 var b="my name is "+firstName+" "+lastName+" my age is "+age;
console.log(b);

// task3
var birth_year=2002;
var future_year=2025;
var a=future_year-birth_year;
console.log("i will be either",a,"or",(a-1));

// task4
// var currentAge=28;
// var maxAge=65;
// var amountPerDay=1000;
// var lifeTime=(maxAge-currentAge)*365*amountPerDay;
// console.log("you will need "+lifeTime+"to last you until the rip old age of "+maxAge +);

// operters excersise
// task 1
var c=5*7;
console.log(c);
var z=13%7
console.log(z)
var x = 10, y = 10;
x += y;
console.log(x);
x += y;
console.log(x);

// task2
var anchoviesPizzaScore = 0;
var  pepperoniPizzaScore = 4;
var  hawaiianPizzaScore = 4;
var  chickenBaconRanchPizzaScore = 6;

console.log( ( anchoviesPizzaScore < pepperoniPizzaScore ) );               
console.log( ( chickenBaconRanchPizzaScore > hawaiianPizzaScore ) );        
console.log( ( hawaiianPizzaScore > pepperoniPizzaScore ) );        
console.log( ( pepperoniPizzaScore <= chickenBaconRanchPizzaScore ) );      
console.log( ( hawaiianPizzaScore > pepperoniPizzaScore ) );

// control statement and loop formation
// task1
// var a=3;
// var b=-7;
// var c=2;
// if(a>0&&b>0&&c>0);
// {
//   alert("the sign is-");
// }
// else{
//     alert("the sign is-");
// }

// task2-odd even
for (var a=0; a<=5; a++) 
{
    if (a===0)  
     {
           console.log(a+"is even");
    }
    else if (a % 2 === 0) 
    {
            console.log(a+"is even");   
    }
    else {
           console.log(a+"is odd");
    }
}
// task3-large between
var num1=5;
var num2=5;


  if(num1 > num2){
    console.log(num1 +"is the largest number")
  }
  else if (num2 > num1){
    console.log(num2+ "is the largest number")
  }
  else{
    console.log(num1+" is equal to" +num2)
  }

// task4-sum the multiple
for(var a=1;a<10;a++){
    if(a%3==0 && a%5==0 )
    {
       console.log(a);}
   }

//    task5_fizz-buzz
for(var s=1;s<10;s++)
{
    if(s%3===0 && s%5===0 ){
    console.log(" FizzBuzz");
}
else if(s%3===0){
  console.log(" Fizz");
}
else if(s%5===0){
   console.log(" Buzz");
}
else{
    console.log(s);}
}

// basic fuctions
// task-1
function getnationalbird() {
    return "Peacock";
  } console.log(getnationalbird());

//   task2
function greet() {

    return "Hello! Have a nice day";
  }
   console.log(greet())

//    task-3
function demo()
  {
   var x=10;
   var y=200;
 return x+y;
 }
 console.log(demo());

//  task4
function san()
  {
   var s=4;
   var h=2;
   var total=s+h;
 return total/2;
 }
 console.log(san()); 

//  task5
function sang(darshan)
  {
 return "Hi "+darshan;
 }
 console.log(sang("Aravindh Kumar"));

//  task6
function sat()
  {
   var sat=5;
 return 5*60+"sec";
 }
 console.log(sat());

//  function excersise
//  task1
var num1,num2,num3;
           num1=10;
           num2=10;
           num3=5;
           if(num1>num2 && num1>num3 ){
           console.log(num1+ 'is largest number');
           }
           else if(num1<num2){
            console.log(num2+'is largest number');
           }
        
           else{
            console.log(num3);
           }

        //    task2
        function app(n1,n2,n3)
{
    var n="";
    
    if(n==n2==n3){
        n="equivalent triangel";
    }
    else if(n1==n2&& n2==n3){
        n="isolescence triangel";
    }
    else{
        n="scalene triangel";
    }
    return n;
}
let aa=app(200,200,200);
console.log(aa);

// task3
function checkInRange(a=15,start=11,range=30 ){
    if(a>=start && a<=range){
        console.log("Between the range");
    }
    else{
         console.log("outside the range");
    }
    }
checkInRange()
 
// task4
evalNumbers(9,8,"add");
evalNumbers(30,6,"divide");
evalNumbers(9,2,"modulus");
evalNumbers(2,3,"power");
function evalNumbers(num1, num2, operation) 
{
  if (operation === "add")
  {
    console.log(num1 + num2);
  } 
  else if (operation === "subtract")
  {
    console.log(num1 - num2);
  } 
  else if (operation === "multiply")
  {
    console.log(num1 * num2);
  }
  else if (operation === "divide")
  {
    console.log(num1 / num2);
  }
  else if (operation === "modulus")
  {
    console.log(num1 % num2);
  }
  else
  {
    console.log("Invalid operation");
  }
}

// task5
function checkLeapYear(a=2023){
    if(a%400==0){
        console.log("It is a leap year");
    }
    else{
         console.log("not a leap year");
    }
    }
checkLeapYear()

// task6
function findDaysInMonth(month=2,year=2012){
    if (month>12)
    console.log("invalid month");
    else if(month==2 && year%4==0){
     console.log("The month has 29 days");   
    }
    else if(month==2 && year%4!=0){
     console.log("The month has 28 days");   
    }
    else if(month==4||month==6||month==9||month==11){
      console.log("The month has 30 days");     
    }
    else{
       console.log("The month has 31 days");   
    }
}
console.log(findDaysInMonth())

// task7

function findGrade(marks=70)
{
  if (marks >= 90 && marks <= 100)
  {
    console.log("S grade");
  } 
  else if (marks >= 80 && marks < 90)
  {
    console.log("A grade");
  } 
  else if (marks >= 70 && marks < 80)
  {
    console.log("B grade");
  }
  else if (marks >= 60 && marks < 70)
  {
    console.log("C grade");
  } 
  else if (marks >= 50 && marks < 60)
  {
    console.log("D grade");
  } 
  else if (marks >= 40 && marks < 50)
  {
    console.log("E grade");
  } 
  else if (marks >= 0 && marks < 40) 
  {
    console.log("Student has failed");
  } 
  else
  {
    console.log("Invalid marks");
  }
}

findGrade()

// Array
// task-1
var create=['Orange',25,100,true,33.58];
console.log(create); 
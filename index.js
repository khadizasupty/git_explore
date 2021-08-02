//2) create 4 variables(int, float, string, boolean)  using the camel case method and assign them some values and print them.
var numberInInteger=10;
console.log(numberInInteger);//printing integer number

var numberInFloat=4.0254;
console.log(numberInFloat);//printing floating number

var stringForPractice="hello world!";
console.log(stringForPractice);//printing string

var booleanForExample=true;
console.log(typeof(booleanForExample));//printing boolean
//3) parse the variable which holds string data to the integer and add with the variable that holds integer data and print them.

var numberForAdd=30;
var stringForAdd="13";
var parsingString=parseInt(stringForAdd);
console.log(typeof(parsingString));
console.log(numberForAdd+parsingString);

//4)Generate a random value from 10 to 20 and print them
var forGenerateRandomValue=Math.ceil((Math.random() * 10) + 10);
console.log(forGenerateRandomValue);
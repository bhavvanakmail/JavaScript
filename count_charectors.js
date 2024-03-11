console.log(
    `================ * Assignment: To Count Character 'a' or 'A'==================================`);
    // With Using Function pass argu and return value

var countCharA = function(str){
    var count = 0;
    var capital = "A";
    var small = "a";
    for(let i=0;i<=str.length-1;i++)
    {
        var char = str.charAt(i);
        if(capital.includes(char) ||  small.includes(char)){
            count=count+1;
        }
    }
    return count; 
}
var str = countCharA("I Am Learning JavaScript ,The Language of internet");
console.log(`1.given string: "I Am Learning JavaScript ,The Language of internet"`);
console.log(`Count the Char of "A" & "a" : ${str}`);

console.log(`-------------------------------------------------------------------------------`);

var str1 = countCharA("My favourite movie is LAggAn");
console.log(`2.given string: "My favourite movie is LAggAn" `);
console.log(`Count the Char of "A" & "a" : ${str1}`);

console.log(`=========================== * Step - 2 With Using Function * ============================`);

  var countCharA = function(str){
    var count=0;
    for(let i=0;i<=str.length-1;i++)
    {
        var char = str.charAt(i);
        if(char=='M' || char == 'm')
        {
            count= count+1;
        }  
    }
    return count;
  }
  var str = countCharA("I Am Learning JavaScript ,The Language of internet");
  console.log(`First String is ===> "I Am Learning JavaScript ,The Language of internet"`);
  console.log(`Count the Char of "M" & "m" : ${str}`);
  
  console.log(`-------------------------------------------------------------------------------`);
  
  var str1 = countCharA("My favourite movie is LAggAn");
  console.log(`Second String is ===> "My favourite movie is LAggAn" `);
  console.log(`Count the Char of "M" & "m" : ${str1}`);
  
console.log(`----------------------------------------------------------------`);

var str = "My favourite movie is LAggAn";
var count=0;

for(let i=0;i<=str.length-1;i++)
{
  var char = str.charAt(i);
  if(char=='a' || char=='A' )
  {
     count++;
  }

}
console.log(`Total Number of  'a' or 'A' are:${count}`);
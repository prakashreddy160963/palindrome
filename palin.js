function palindrome(){
    var n;
var rem=0;
var temp;
var a;
   n=document.getElementById("input").valueAsNumber;
    temp=n;
while(n!=0)
{
    a=n%10;
    rem=(rem*10)+a;
    n=parseInt(n/10);
}
if(temp==rem)
{
    output=" Palindrome";
   document.getElementById('result').value=output;
    console.log("The given number is a palindrome: "+temp);
}
else{
    output="not  a Palindrome"
    document.getElementById('result').value=output;
    console.log("The given number is  not a palindrome: "+temp);
}
}
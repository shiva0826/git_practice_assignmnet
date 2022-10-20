//check palindrome:
let str="madam";
let sum="";
for(let i=str.length-1;i>=0;i--){
    sum=sum+str[i];
}if(str==sum){
    console.log("Yes");
}else{
    console.log("No");
}
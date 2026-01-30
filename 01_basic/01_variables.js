const accountId=12345
let accountEmail="shivam123yadav@gmail.com"
var accountPassword="22222"
accountCity="Jaipur"
let accountState;

//accountId=54321//not allowed 
accountEmail="shivam321yadav@gamil.com"
accountCity="Bengluru"
/*Prefer not to use var because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
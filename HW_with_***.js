

1*:  Convert the code written in steps 26-33 into a function that takes an age as input:
const checkAge = function(age) {
        // Your modifications
      };
console.log(checkAge(17)); // Output: 
console.log(checkAge(18)); // Output: 
console.log(checkAge(61)); // Output: 


2*:  Modify the solution of 1* so that the function checks the data type first, throwing an error if it is not a number:
javascript
const checkAge = function(age) {
  // Your modifications
}; 
  
3**:  
ПModify the solution of 2* so that the value '2' (a string containing ONLY a digit) is allowed and converted to a number:
javascript
const checkAge = function(age) {
  // Your modifications
};
  





код , который нужно преобразовать:

 var age_1=10;
 var age_2=18;
 var age_3=60;
 if (age_1>=10) {
     console.log ("True")
     };
     if (age_1<age_2){
         console.log("You don’t have access cause your age is " , age_1 , " It’s less then ")
         };
         if (age_1>=age_2 && age_1<age_3){
             console.log("Welcom!")
         };
         if (age_1>age_3){
             console.log("Keep calm and look Culture channel")
         };
         if (age_1>age_3){
             console.log("Keep calm and look Culture channel")
         }
         else {
         console.log("Technical work")
         };   
    
    


        


        1*. 

        const checkAge = function(age){
        if (age>=10){
            console.groupCollapsed('TRUE')
         };
        if (age<18){
            console.log("You don’t have access cause your age is " , age , " It’s less then ")
           };
        if (age>=18 && age<60){
            console.log("Welcom!")
        };
        if (age>60){
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
            };
        }

        checkAge(17);
        checkAge(18);
        checkAge(61);



         2*.
         
         const checkAge = function(age){
            if (typeof age !== "number"){
                throw new Error ("Error: the argument isn't a number")
            }
         
         
            if (age>=10){
                console.groupCollapsed('TRUE')
             };
            if (age<18){
                console.log("You don’t have access cause your age is " , age , " It’s less then ")
               };
            if (age>=18 && age<60){
                console.log("Welcom!")
            };
            if (age>60){
                console.log("Keep calm and look Culture channel")
            }
            else {
                console.log("Technical work")
                };
            }

             
            checkAge(17);
            checkAge(61);
            checkAge("31");



        3**.

        const checkAge = function(age){
            age= parseInt(age);
        
            if (typeof age !== "number"){
                throw new Error ("Error: the argument isn't a number")
            }
         
            if (age>=10){
                console.groupCollapsed('TRUE')
             };
            if (age<18){
                console.log("You don’t have access cause your age is " , age , " It’s less then ")
               };
            if (age>=18 && age<60){
                console.log("Welcom!")
            };
            if (age>60){
                console.log("Keep calm and look Culture channel")
            }
            else {
                console.log("Technical work")
                };
            }

             
            checkAge(17);
            checkAge("61");
            checkAge("31");



        

       
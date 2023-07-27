const person = {
  city: "Moscow"
 }
 
 const student = Object.create(person);
 
 student.ownCity = "Piter";
 student.year = 2022;
 
 function GetOwnKey(obj){
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
         console.log(key);
     }   
   }
 }
 
 GetOwnKey(student)
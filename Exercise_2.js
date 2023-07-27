const person = {
  city: "Moscow"
}

const student = Object.create(person);

student.ownCity = "Piter";
student.year = 2022;

function GetKey(namekey, obj){
  if (namekey in obj) {
    return true;
  }
  else{
    return false;
  }
}

console.log(GetKey("year", student))
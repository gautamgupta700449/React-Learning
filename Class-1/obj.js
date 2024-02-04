//object
var student = {
  name: "Gautam Kumar",
  email: "gautamkumar829200@gmail.com",
  regNo: 12220260,
  enRoll: true,
  number: 8292009901,
  login() {
    console.log("student has login");
  },
  logout() {
    console.log("Student has logout");
  },
  toLogOut(){
    console.log(this.name, 'Log in');
  }
};

student.login();
student.logout();

var str = new String("Some String");
console.log(str.toUpperCase);
student.toLogOut();


//Add new Property
// student.isLogIn = false;

 // Accessing Properties
//  console.log(student["name"]);
//  console.log(student.email);

// var student1 = document.querySelector("#name");
// student1.textContent = student[student1.id];

// var span = document.querySelector("#email");
// span.textContent = student[span.id];

// var num = document.querySelector("#number");
// num.textContent = student[num.id];

// //Array

// let hobies = ["Cricket", "Coding", "Hacking", "Reading Book"];
// console.log(hobies);

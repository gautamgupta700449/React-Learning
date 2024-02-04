//Functions

// function fun(a = 40, b = -50) {
//   sum = a + b;
//   document.write("Sum", "=", sum)
// }
// fun();

function disp_prompt() {
    var name=prompt("Please enter your name","Harry Potter");
    if (name!=null && name!="") {
        document.write("Hello " + name + "! How are you today?");
    }
}

//function expression
//                                           MATH EXPRESSIONS

/*Question no 01: Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/
var a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

/*Question no 02: What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;*/
document.write("a is 1" + "<br />")
document.write("b is 0" + "<br />")
document.write("result is 3" + "<br />")

/*Question no 03: Write a program that takes input a name from user &
greet the user.*/
var name = prompt("Enter your name:");
alert("Hello " + name + "!");

/*Question no 05: Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/
var number = prompt("Enter a number:");
if (number === "" || isNaN(number)) {
  number = 5;
}
document.write("<h2>Multiplication table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}

/*Question no 06: Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");
var totalMarks = 100;
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<h5>Subject Total Marks Obtained Marks Percentage</h5>");
document.write("<table><tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3 / totalMarks * 100) + "%</td></tr>");
document.write("<tr><td></td><td><b>" + (totalMarks * 3) + "</b></td><td><b>" + totalObtainedMarks + "</b></td><td><b>" + percentage + "%</b></td></tr></table>");






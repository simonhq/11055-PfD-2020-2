/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/


//create
var family_names = ["Leanne", "Tayler"];

//Write to HTML
document.write("The names of my family members");
document.write(family_names[0]);
document.write(family_names[1]);

//write the length
document.write("the number of family members in the array");
document.write(student_names.length);

//write out using a for
document.write("family member names automatically");
for(let i = 0; i < family_names.length; i++) {
    document.write(family_names[i]);
}

//add a family member
document.write("add a family member");
//the prompt function allows me to ask the user to enter a name
family_names.push(prompt("enter a name"));

//write using the same for...
document.write("the family member names automatically");
for(let i = 0; i < family_names.length; i++) {
    document.write(student_names[i]);
}
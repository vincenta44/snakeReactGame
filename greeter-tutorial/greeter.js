var firstN = prompt("Hey! First question, what is your first name?");
var middleI = prompt("Ok, second question, what is your middle initial?");
var lastN = prompt("Awesome! Last question, what is your last name?");
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student(firstN, middleI, lastN);
document.body.textContent = greeter(user);

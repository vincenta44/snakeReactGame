var firstN:string = prompt("Hey! First question, what is your first name?");
var middleI:string = prompt("Ok, second question, what is your middle initial?");
var lastN:string = prompt("Awesome! Last question, what is your last name?");
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
    middleInitial: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.middleInitial + "." + " " + person.lastName;
}

function list(person: Person){
    
}

let user = new Student(firstN, middleI, lastN);
document.body.textContent = greeter(user);
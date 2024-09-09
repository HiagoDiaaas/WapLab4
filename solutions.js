//1
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating ".concat(this.dept, " ").concat(year, " students"));
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
function describePerson(person) {
    return "".concat(person.name, " is ").concat(person.age, " years old and is ").concat(person.isStudent ? 'a' : 'not a', " student.");
}
var person = { name: "Alice", age: 25, isStudent: true };
console.log(describePerson(person)); // Output: "Alice is 25 years old and is a student."

"use strict";
var Student = /** @class */ (function () {
    function Student(Id, Name, SAT, Active) {
        this.Id = Id;
        this.Name = Name;
        this.SAT = SAT;
        this.Active = Active;
    }
    Student.prototype.log = function () {
        var msg = this.Id + ", " + this.Name + ", " + this.Active + ", " + this.SAT;
        console.log(msg);
    };
    return Student;
}());
var greg = new Student(1, 'doud, greg', 1200, true);
greg.log();
var anna = new Student(1, 'miller, anna', 1200, true);
anna.log();

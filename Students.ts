class Student {
    Id: number;
    Name: string;
    SAT: number;
    Active: boolean;

    constructor(Id: number, Name: string, SAT: number, Active: boolean){
        this.Id = Id;
        this.Name = Name;
        this.SAT = SAT;
        this.Active = Active;
    }

    log(): void{
        let msg: string = `${this.Id}, ${this.Name}, ${this.Active}, ${this.SAT}`;
        console.log(msg);
    }
}

let greg: Student = new Student(1, 'doud, greg', 1200, true);
greg.log();
let anna: Student = new Student(1, 'miller, anna', 1200, true);
anna.log();
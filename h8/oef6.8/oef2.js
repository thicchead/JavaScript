class Person{
    constructor(name, lastname, yearBorn, monthBorn, dayBorn) {
        this._name = name;
        this._lastname = lastname;
        this._birthday = new Date(yearBorn, monthBorn, dayBorn);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
}

let metehan = new Person("Metehan", "Karakoruk", 2003, 8, 15);

console.log(metehan.lastname)
console.log(metehan.birthday.toString())
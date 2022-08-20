let person = {
    name: "Metehan",
    lastName: "Karakoruk",
    birthday: new Date(2003, 8, 15),

    calculateAge() {
        let today = new Date();
        let [yearNow, monthNow, dayNow] = [today.getFullYear(), today.getMonth(), today.getDay()];
        let [year, month, day] = [this.birthday.getFullYear(), this.birthday.getMonth(), this.birthday.getDay()];

        let ageNow = yearNow - year;
        let m = monthNow - month;
        if (m < 0) {
            ageNow -= 1;
        }
        return ageNow;
    },
    toString() {
        return `Name: ${this.name} \nLast name: ${this.lastName} \nAge: ${this.calculateAge()}`
    }

}
console.log(person.calculateAge());
console.log(person.toString());
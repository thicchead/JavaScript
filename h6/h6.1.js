let person = {                  // object literal = person
    _name: "Metehan",           // key1 = name, value1 = "Metehan"
    age: 18,                    // key2 = age
/*    print : function() {        // key3 = print
        console.log(`${this._name} is ${this.age} years old.`);
    }, */
    print() {
        console.log(`${this._name} is ${this.age} years old.`);
    },
    setName : function(name) {
        this._name = name;
    },
    getName : function () {
        return this._name;
    }
}
person.print();
person.setName("Metje");
person.print();
person._name = "Mete";      // tegen conventies
person.print();
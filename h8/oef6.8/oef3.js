class Account{
    constructor(landcode, banknummer, eerstePosities) {
        this._landcode = landcode;
        this._banknummer = banknummer;
        this._eerstePosities = eerstePosities;
    }
    get landcode() {
        return this._landcode;
    }
    set landcode(value) {
        this._landcode = value;
    }
    get banknummer() {
        return this._banknummer;
    }
    set banknummer(value) {
        this._banknummer = value;
    }
    get eerstePosities() {
        return this._eerstePosities;
    }
    set eerstePosities(value) {
        this._eerstePosities = value;
    }
    print() {
        let controlegetal = this.eerstePosities % 97;
        return this._landcode + " " + this.banknummer + " " + this.eerstePosities + " " + controlegetal;
    }
}

let mijnAccount = new Account("BE", 76, 6712557909);
console.log(mijnAccount.print());
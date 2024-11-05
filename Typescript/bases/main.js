"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['super velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            console.log(this.name + ' ' + this.realName);
            return this.name + ' ' + this.realName;
        }
    }
    const villian1 = new Mutant(32, 'Dazzler', 'Alison Blaire');
})();
(() => {
    const client = {
        name: 'Dani',
        age: 26,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = () => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map
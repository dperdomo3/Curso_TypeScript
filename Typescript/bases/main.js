"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
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
    let myCustomVariable = 'Dani';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['fuerza']
    };
    console.log(typeof myCustomVariable);
})();
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
(() => {
    let isSuperman = true;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.min;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[1] = 20;
    hero[0] = 'wanda';
    hero[2] = false;
    console.log(hero);
})();
//# sourceMappingURL=main.js.map
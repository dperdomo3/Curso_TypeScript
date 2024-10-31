"use strict";
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    const activateBatiseñal = () => {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatiseñal);
    const heroName = returnName();
    console.log(heroName);
})();

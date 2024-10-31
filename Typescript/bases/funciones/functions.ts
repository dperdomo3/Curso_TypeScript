(()=>{
    const hero:string = "flash";

    function returnName():string {
        return hero;
    }
    const activateBatiseñal = ():string => {
        return "Batiseñal activada";
    }
    console.log(typeof activateBatiseñal);
    const heroName = returnName();
    console.log(heroName)

})()
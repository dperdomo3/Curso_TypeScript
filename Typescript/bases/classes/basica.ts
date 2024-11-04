(()=>{
    class Avenger{
        // private name:string;
        // public team: string;
        // public realName: string;
        static avgAge:number = 35; //propiedad estatica

        constructor(private name:string,public team:string,public realName:string){}

        bio(){
            return `${this.name} (${this.team})`
        }

    }
    const antman = new Avenger('Antman','Capitan','Phil');
    //console.log(antman) 
    // console.log(antman.bio()) 
})()

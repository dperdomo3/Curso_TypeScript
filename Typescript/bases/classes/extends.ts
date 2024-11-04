(()=>{
    class Avenger{
        constructor(
            public name:string,
            public realName:string
        ){
            //console.log('Constructor avenger llamado!!')
        }
        private getFullName(){
            return `${this.name} ${this.realName}`
        }
    }
    class Xmen extends Avenger{
        constructor(name:string,realName:string,public isMutant?:boolean){
            super(name,realName);
            //console.log("Constructor Xmen llamado");
        }
        get fullName(){
            return `${this.name}-${this.realName}`;
        }
        set fullName(name:string){
            this.name=name;
        }
    }
    const wolverine = new Xmen('Wolverine','Logan',true)
    //console.log(wolverine.fullName)
    wolverine.fullName = 'Dani';
    //console.log(wolverine.fullName)
})()

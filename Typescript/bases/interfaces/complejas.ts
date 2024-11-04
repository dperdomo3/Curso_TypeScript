(()=>{
    //la interfaz principal va arriba
    interface Client{
        name:string,
        age?:number,
        address?:Address,  //se crea una interfaz sólo para esto
        getFullAddress?(id:string):string;
    }
    interface Address{
        id:number,
        zip:string,
        city:string
    }

    const client:Client ={
        name:'Dani',
        age:26,
        address:{   //esto es un objeto
            id:125,
            zip:'KY2 SUD',
            city:'Ottawa'
        },
        // getFullAddress(id:string){
        //     console.log(this.address.city)
        //     return this.address.city;
        // }
    }
    const client2:Client={
        name:'Melissa',
        age:30,
    }
})()

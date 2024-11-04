(()=>{
    //una interfaz puede extenderse a las clases
    interface Hero {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['super velocidad'],
        getName() {
            return this.name;
        }
    }

})()
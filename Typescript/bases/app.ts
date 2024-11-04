// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn {
  (ciudadanos: string[]): number
}

const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersonaInterface {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  public constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string) { }
  imprimirBio() {

  }
}
/////////////....................................
(() => {
  type Carro = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
  }
  // Objetos
  const batimovil: Carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
  };

  const bumblebee: Carro = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() { // El metodo disparar es opcional
      console.log("Disparando");
    }
  };


  // Villanos debe de ser un arreglo de objetos personalizados
  type Villano = {
    nombre: string,
    edad?: number,
    mutante: boolean,
  }

  const villanos: Villano[] = [{
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

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
    poder: string,
    estatura: number
  }

  const charles: Charles = {
    poder: "psiquico",
    estatura: 1.78
  };

  type Apocalipsis = {
    lider: boolean,
    miembros: string[]
  }
  const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
  }

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Charles | Apocalipsis;

  mystique = charles;
  mystique = apocalipsis;

})()
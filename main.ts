
class Persona{
    private edad: number;
    private nombre: string;
    private telefono: number;
    //default
    constructor();
    //parameterized constructor
    constructor(edad: number)
    constructor(edad: number, nombre: string);
    constructor(edad: number, nombre: string, telefono: number);
    //common implementation
    constructor(edad?: number, nombre?: string, telefono?: number) {
        this.edad = edad ?? 0;
        this.nombre = nombre ?? "Desconocido";
        this.telefono = telefono ?? 0;

    }

    public get getEdad() : number {
        return this.edad
    }

    public set setEdad(edad : number) {
        this.edad = edad;
    }
    public get getNombre() : string {
        return this.nombre
    }
    
    public set setNombre(nombre : string) {
        this.nombre = nombre;
    }
    public get getTelefono() : number {
        return this.telefono
    }
    
    public set setTelefono(telefono : number) {
        this.telefono = telefono;
    }

}



(function main() {
    let PersonaJoven: Persona = new Persona();
    const PersonaEdadMedia: Persona = new Persona(29);
    const PersonaAdulta: Persona = new Persona(36,"Calvin");
    const PersonaterceraEdad: Persona = new Persona(70, "Euclides", 9631985344);

    PersonaJoven.setEdad = 12;
    PersonaJoven.setNombre = "Anaki";
    PersonaEdadMedia.setNombre = "Cole";

    console.log(`${PersonaJoven.getEdad} ${PersonaJoven.getNombre}`)
    console.log(`${PersonaEdadMedia.getEdad} ${PersonaEdadMedia.getNombre}`)
    console.log(`${PersonaAdulta.getEdad} ${PersonaAdulta.getNombre}`)
    console.log(`${PersonaterceraEdad.getEdad} ${PersonaterceraEdad.getNombre}`)
})()



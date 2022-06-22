class Persona {
    static contadorObjetos = 0;

    constructor(nombre,apellido,edad,empleado,sueldo,cliente){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
        this._empleado = empleado
        this._sueldo = sueldo
        this._cliente = cliente

        this.idPersona = Persona.contadorObjetos ++
    }

    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    get edad (){
        return this._edad
    }

    set nombre(nombre){
        return this._nombre = nombre
    }
    set apellido(apellido){
        return this._apellido = apellido
    }
    set edad(edad){
        return this._edad = edad
    }
    get empleado(){
        return this._empleado
    }
    get sueldo(){
        return this._sueldo
    }

    set empleado(empleado){
        return this._empleado = empleado

    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }
    get cliente (){
        return this._cliente;
    }
    set clinte(cliente){
        return this._cliente = cliente
    }

    nombreApellidoEdad(){
        return this.nombre + " " + this.apellido + " " + this.edad +this.empleado + this.sueldo + this.cliente + this.idPersona 
    }
    toString(){
        return this.nombreApellidoEdad
    }
    }

   
        
    



let persona1 = new Persona("Gonzalo","Gentile","28")
console.log(persona1)
console.log(persona1.nombreApellidoEdad())

class Empleado extends Persona{
    constructor(nombre,apellido,edad,empleado,sueldo){
        super(nombre,apellido,edad,empleado,sueldo)
      
    }
        
          toString (){
            return this.nombreApellidoEdad()
        
        
        }
}

    let empleado1 = new Empleado("Gonzalo"," Gentile"," 28 "," Programador"," $100,000 ")
    let empleado2 = new Empleado("Ricardo","Gutierrez","29 ","Chef","$55.000 ")
    console.log(empleado1.nombreApellidoEdad())
    console.log(empleado1.toString())
    console.log(empleado2.toString())

class Cliente extends Persona{

    static contadorObjetos = 0

    constructor(cliente,nombre,apellido,edad,empleado,sueldo){
        super(nombre,apellido,edad,empleado,sueldo)
        this._cliente = cliente

    
}
  
    

    nuevoCliente(){
        return this._cliente + super.nombreApellidoEdad()  
    }
    toString(){
        return this.nuevoCliente()
    }

}
    let cliente1 = new Cliente("Gonza" , " Gonzalo","Gentile"," 28 ","Programador ", "  $100,000 ")
    console.log(cliente1)
    console.log(cliente1.nuevoCliente())
    console.log(cliente1.toString())


/*
let a = 85
let b = 0.21
let c = a * b // formula de porcentaje
console.log("El iva% de " + a +" es " + (a + c) ) */


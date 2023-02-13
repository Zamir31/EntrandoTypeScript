interface IPersona {
  nombreCompleto: INombreCompleto;
  lugarNacimiento: ILugarNacimiento;
  fechaNacimiento: IFechaNacimiento;
  numeroIdentidad: string;
  sexo: "Femenino" | "Masculino";
  familiares: IFamiliares;
  suscrito: true | false;
  notasMarginales: string;
  intereses: string[];
  extendidaEn: IExtension;
}

interface INombreCompleto {
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
}

interface ILugarNacimiento {
  pais: string;
  departamento: string;
  municipio: string;
}

interface IFechaNacimiento {
  año: number;
  mes: number;
  dia: number;
}

interface IFamiliares {
  madre: IInformacionBasica;
  padre: IInformacionBasica;
}

interface IInformacionBasica {
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
}

interface IExtension {
  departamento: string;
  municipio: string;
  año: number;
  mes: number;
  dia: number;
}

class Persona implements IPersona {
  nombreCompleto: INombreCompleto = {
    primer_nombre: "Daniel",
    segundo_nombre: "Zamir",
    primer_apellido: "Noriega",
    segundo_apellido: "Tejada",
  };
  lugarNacimiento: ILugarNacimiento = {
    pais: "Honduras",
    departamento: "Cortes",
    municipio: "San pedro sula",
  };
  fechaNacimiento: IFechaNacimiento = {
    año: 0,
    mes: 0,
    dia: 0,
  };
  numeroIdentidad: string;
  sexo: "Femenino" | "Masculino";
  familiares: IFamiliares = {
    madre: <IInformacionBasica>{
      primer_nombre: "Zarina",
      segundo_nombre: "Selina",
      primer_apellido: "Tejada",
      segundo_apellido: "Lara",
    },
    padre: <IInformacionBasica>{
      primer_nombre: "Yonix",
      segundo_nombre: "Rolando",
      primer_apellido: "Noriega",
      segundo_apellido: "Ayala",
    },
  };
  suscrito: boolean;
  notasMarginales: string;
  intereses: string[];
  extendidaEn: IExtension = {
    departamento: "Cortes",
    municipio: "San pedro sula",
    año: new Date().getFullYear(),
    mes: new Date().getMonth() + 1,
    dia: new Date().getDate(),
  };

  constructor(
    // primerNombre: string,
    // segundoNombre: string,
    // primerApellido: string,
    // segundo_apellido: string,
    // madrePNombre: string,
    // madreSNombre: string,
    // madrePApellido: string,
    // madreSApellido: string,
    // padrePNombre: string,
    // padreSNombre: string,
    // padrePApellido: string,
    // padreSApellido: string,
    fechaNacimiento: IFechaNacimiento,
    numeroIdentidad: string,
    sexo: "Femenino" | "Masculino",
    suscrito: boolean,
    notasMarginales: string,
    intereses: string[]
  ) {
    // this.nombreCompleto.primer_nombre = primerNombre;
    // this.nombreCompleto.segundo_nombre = segundoNombre;
    // this.nombreCompleto.primer_apellido = primerApellido;
    // this.nombreCompleto.segundo_apellido = segundo_apellido;
    // this.familiares.madre.primer_nombre = madrePNombre;
    // this.familiares.madre.segundo_nombre = madreSNombre;
    // this.familiares.madre.primer_apellido = madrePApellido;
    // this.familiares.madre.segundo_apellido = madreSApellido;
    // this.familiares.padre.primer_nombre = padrePNombre;
    // this.familiares.padre.segundo_nombre = padreSNombre;
    // this.familiares.padre.primer_apellido = padrePApellido;
    // this.familiares.padre.segundo_apellido = padreSApellido;
    this.fechaNacimiento = fechaNacimiento;
    this.numeroIdentidad = numeroIdentidad;
    this.sexo = sexo;
    this.suscrito = suscrito;
    this.notasMarginales = notasMarginales;
    this.intereses = intereses;

    if (this.familiares.madre.segundo_nombre == undefined) {
      this.familiares.madre.segundo_nombre = "No tiene";
    }
  }
}

interface ISuscriptores {
  estadoSuscripcion: IPersona[];
  llenarArreglo(persona: IPersona): void;
  quitarSuscp(persona: IPersona) : IPersona;
}

class suscriptores implements ISuscriptores{

  estadoSuscripcion: IPersona[] = [];

    constructor(){
    }

  llenarArreglo(person: IPersona): void {
    this.estadoSuscripcion.push(person);
  }

  quitarSuscp(): IPersona {
    throw new Error("Method not implemented.");
  }
}

const fechaNacimiento : IFechaNacimiento = {
  año: 2002,
  mes: 3,
  dia: 31
}

const fechaNacimiento1 : IFechaNacimiento = {
  año: 1999,
  mes: 5,
  dia: 22
}
const fechaNacimiento2 : IFechaNacimiento = {
  año: 1990,
  mes: 7,
  dia: 13
}

const fechaNacimiento3 : IFechaNacimiento = {
  año: 1990,
  mes: 7,
  dia: 1
}

const persona = new Persona(fechaNacimiento,"0501-2002-04167", "Masculino", true, "Ninguna", ["Cine", "Deporte"]);
const persona1 = new Persona(fechaNacimiento1,"0401-2002-04168", "Masculino", false, "Ninguna", ["Cine", "Canto"]);
const persona2 = new Persona(fechaNacimiento2,"0402-1998-04168", "Masculino", true, "Ninguna", ["Natacion", "Cocina"]);
const persona3 = new Persona(fechaNacimiento3,"0403-1998-04169", "Masculino", true, "Ninguna", ["Natacion", "Cocina"]);

const suscriptores2 = new suscriptores();
suscriptores2.llenarArreglo(persona);
suscriptores2.llenarArreglo(persona1);
suscriptores2.llenarArreglo(persona2);
suscriptores2.llenarArreglo(persona3);


const suscrps = suscriptores2.estadoSuscripcion;
// console.log(suscrps);

const suscritorEncontradoId = suscriptores2.estadoSuscripcion.find((person) => person.numeroIdentidad === "0501-2002-04167");
// console.log(suscritorEncontradoId);

const mismaFechaIngreso = suscriptores2.estadoSuscripcion.filter((person) => person.extendidaEn.año === 2023&& person.extendidaEn.mes === 2&& person.extendidaEn.dia === 9);
// console.log(mismaFechaIngreso);

const suscriptorEncontradoMes = suscriptores2.estadoSuscripcion.filter((person) => person.fechaNacimiento.mes === 7);
// console.log(suscriptorEncontradoMes);

const suscriptorEncontradoAño = suscriptores2.estadoSuscripcion.filter((person) => person.fechaNacimiento.mes === 1990);
// console.log(suscriptorEncontradoAño);

const susConMismoInteres = suscriptores2.estadoSuscripcion.filter((person) => person.intereses.find((interes) => interes == "Natacion"));
// console.log(susConMismoInteres);

const susCon2MismoInteres = suscriptores2.estadoSuscripcion.filter((person) => person.intereses.find((interes) => interes == "Natacion"&&"Cocina"));
// console.log(susCon2MismoInteres);

const quitarSub = suscriptores2.estadoSuscripcion.find((person) => person.numeroIdentidad === "0501-2002-04167");
if (quitarSub) {
  quitarSub.suscrito = false;
}
// console.log(quitarSub);

const notiSegunInteres = suscriptores2.estadoSuscripcion.filter((person) => person.intereses.find((interes) => {
  if(interes == "Natacion"&&"Cocina"){
    console.log("Tu que eres fan de la cocina y la natacion, fin de semana habra un evento de natacion donde tambien habra mucha comida.");
  }}));
  console.log(notiSegunInteres);

const subs = suscriptores2.estadoSuscripcion;
// console.log(subs);


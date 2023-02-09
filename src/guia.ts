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
    año: 2002,
    mes: 3,
    dia: 31,
  };
  numeroIdentidad: string;
  sexo: "Femenino" | "Masculino";
  familiares: IFamiliares = {
    madre: <IInformacionBasica>{
      primer_nombre: "Zarina",
      segundo_nombre: undefined,
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

// const persona = new Persona(/*"Alejandro", "Navil","Cacerez","Hernandez","Olga","patricia","Cacerez","Lara","Jose","Rolando","Hernandez","Fuente",*/"0501-2002-04167", "Masculino", true, "Ninguna", [
//   "Cine",
//   "Deporte",
// ]);
// console.log(persona);

class suscriptores {
    suscritos: Persona[] = []; 

    constructor(){
        const persona = new Persona("0501-2002-04167", "Masculino", true, "Ninguna", ["Cine", "Deporte"])
        this.suscritos.push(persona);
        console.log(this.suscritos);
    }
}

const suscriptores1 = new suscriptores();

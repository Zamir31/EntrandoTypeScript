// const serie = {
//     titulo: 'Severance',
//     Temporada: 1,
//     Episodios: 9,
//     Genero : 'Suspenso',
//     Lanzamiento: 2022,
//     Clasificacion: '15+',
//     RegionDeOrigen: 'Estados Unidos',
//     audioOriginal: 'Ingles',
//     Subtitulos: true,
//     plataforma: 'Apple TV'
// }

interface ISerie{
    titulo: string,
    Temporada: number,
    Episodios: number,
    Genero : 'Suspenso' | 'Terror' | 'Drama',
    Lanzamiento: number,
    Clasificacion: '15+' | '+A' | 'B' | 'K',
    RegionDeOrigen: IRegion,
    audioOriginal: string,
    Subtitulos: true
    plataforma?: string,
    creadores: IEnlace[]
}

interface IEnlace{
    nombre: string,
    enlace: string
}

const serie : ISerie = {
    titulo: "",
    Temporada: 0,
    Episodios: 0,
    Genero: "Suspenso",
    Lanzamiento: 0,
    Clasificacion: "15+",
    RegionDeOrigen: {
        nombre_region: 'America',
        pais: 'USA',
        ciudad_origen: 'Washington'
    },
    audioOriginal: "",
    Subtitulos: true,
    creadores: [{
        nombre: 'Apple',
        enlace: 'www.apple.com'
    }]
}

interface IRegion {
    nombre_region : string,
    pais : string,
    ciudad_origen : string
}

const region : IRegion = {
    nombre_region: "",
    pais: "",
    ciudad_origen: ""
}

const serie1 : ISerie = {
    titulo: "",
    Temporada: 0,
    Episodios: 0,
    Genero: "Suspenso",
    Lanzamiento: 0,
    Clasificacion: "15+",
    RegionDeOrigen: region,
    audioOriginal: "",
    Subtitulos: true,
    creadores: []
}

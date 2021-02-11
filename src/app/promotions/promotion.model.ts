import { Referentiel } from '../referentiels/referentiel.model'

export interface Promotion {
    id:number,
    titre:string,
    description: string,
    langue: string,
    fabrique:string,
    refAgate:string,
    dateDebut:Date,
    dateFin:Date,
    referentiels:Referentiel[]
}
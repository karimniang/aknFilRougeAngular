import { Niveau } from "./niveau.model";

export interface Competence {
    id: number,
    libelle: string,
    deleted: boolean,
    niveaux: Niveau[]
}
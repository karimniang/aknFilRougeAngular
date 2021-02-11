import { Competence} from '../competences/competence.model'
import { Referentiel } from '../referentiels/referentiel.model';
export interface GroupeCompetence {
    id:number,
    libelle: string,
    description: string,
    competences: Competence[],
    
}
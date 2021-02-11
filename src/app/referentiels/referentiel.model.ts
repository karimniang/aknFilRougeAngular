import { GroupeCompetence } from '../groupe-competences/grp_compt.model'

export interface Referentiel {
    id: number,
    libelle: string,
    description: string,
    groupeCompetences: GroupeCompetence[],
    programme: string,
    critereEvaluation: string,
    critereAdmission: string
}
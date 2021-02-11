import { Tag } from './tags.model'

export interface GroupeTag {
    id: number,
    libelle: string,
    description: string,
    tags:Tag[]
}
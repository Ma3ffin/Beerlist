import {Schuld} from "./schuld";
import {Owelist} from "./owelist";

export const OWELIST: Owelist[] = [
    { id: 1, person: 'Oli', schulden: Schuld[0] =[
        {id: 1, getperson: 'Oli', oweperson: 'Marcus', value: 2},
        {id: 2, getperson: 'Oli', oweperson: 'Basti', value: 1}
    ]},
    { id: 2, person: 'Marcus', schulden: Schuld[0] =[
        {id: 3, getperson: 'Marcus', oweperson: 'Oli', value: 2},
        {id: 4, getperson: 'Marcus', oweperson: 'Basti', value: 1}
    ]},
    { id: 3, person: 'Basti', schulden: Schuld[0] =[
        {id: 5, getperson: 'Basti', oweperson: 'Oli', value: 2},
        {id: 6, getperson: 'Basti', oweperson: 'Marcus', value: 1}
    ]}
];
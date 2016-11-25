import {Schuld} from "./schuld";
import {Owelist} from "./owelist";

export const OWELIST: Owelist[] = [
    { person: 'Oli', schulden: Schuld[0] =[
        { oweperson: 'Marcus', value: 2},
        {oweperson: 'Basti', value: 1}
    ]},
    { person: 'Marcus', schulden: Schuld[0] =[
        {oweperson: 'Oli', value: 2},
        {oweperson: 'Basti', value: 1}
    ]},
    { person: 'Basti', schulden: Schuld[0] =[
        {oweperson: 'Oli', value: 2},
        {oweperson: 'Marcus', value: 1}
    ]}
];
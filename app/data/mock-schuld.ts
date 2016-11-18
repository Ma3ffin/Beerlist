import {Schuld} from "./schuld";

export const SCHULD: Schuld[] = [
    { id: 1,line: 1, getperson: 'Oli', oweperson: 'Oli', value: 0},
    { id: 2,line: 1, getperson: 'Oli', oweperson: 'Marcus', value: 1},
    { id: 3,line: 1, getperson: 'Oli', oweperson: 'Basti', value: 1},
    { id: 4,line: 2, getperson: 'Marcus', oweperson: 'Oli', value: 1},
    { id: 5,line: 2, getperson: 'Marcus', oweperson: 'Marcus', value: 0},
    { id: 6,line: 2, getperson: 'Marcus', oweperson: 'Basti', value: 1},
    { id: 7,line: 3, getperson: 'Basti', oweperson: 'Oli',value: 1},
    { id: 8,line: 3, getperson: 'Basti', oweperson: 'Marcus', value: 1},
    { id: 9,line: 3, getperson: 'Basti', oweperson: 'Basti', value: 0}
];
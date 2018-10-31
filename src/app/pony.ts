export class Pony {
    id: number;
    name: string;
    weight: number;
    age: number;
    color: string;
    
    constructor(name?: string, weight?: number, age?:number, color?:string) {
        this.id = 0;
        this.name = name === undefined ? 'Noname' : name;
        this.weight = weight === undefined ? 0 : weight;
        this.age = age === undefined ? 0 : age;
        this.color = color === undefined ? 'blanc' : color;
    }
}

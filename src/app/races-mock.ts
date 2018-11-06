import { Race } from "./race";
import { Pony } from "./pony";

export const RACES: Array<Race> = [
    {id:1, location:'Montpellier', date: new Date(2018,12,12), ponies:new Array<Pony>()},

    {id:2, location:'Le Mans', date: new Date(2019,12,12), ponies:new Array<Pony>({id:1 , name:'Bojack' , weight:45 , color:'brown' , age:10 },
    {id:2 , name:'Mr Peanut Butter' , weight:41 , color:'yellow' , age:10 },
    {id:3 , name:'Princess' , weight:33 , color:'pink' , age:5 })},

    {id:3, location:'Machu Pichu', date: new Date(2019,1,12), ponies:new Array<Pony>({id:4 , name:'Snow' , weight:35 , color:'white' , age:9 },
    {id:5 , name:'La bete du texas' , weight:29 , color:'black' , age:14 })},
    
    {id:4, location:'Australie', date: new Date(2018,11,12), ponies:new Array<Pony>({id:1 , name:'Bojack' , weight:45 , color:'brown' , age:10 },
    {id:2 , name:'Mr Peanut Butter' , weight:41 , color:'yellow' , age:10 },
    {id:3 , name:'Princess' , weight:33 , color:'pink' , age:5 },
    {id:4 , name:'Snow' , weight:35 , color:'white' , age:9 },
    {id:5 , name:'La bete du texas' , weight:29 , color:'black' , age:14 })},
]

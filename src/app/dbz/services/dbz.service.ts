import { Injectable  } from "@angular/core";
import { v4 as uuid} from 'uuid'

import { Character } from "../interfaces/character.interface";


@Injectable({
    providedIn: 'root'
})

export class DbzService{

    characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku', 
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power:7500
    }
    ]
    
    // Este método controla el evento que se emite desde el componente hijo 
    addCharacter( character: Character):void{
        // en esta nueva constante estoy declarando un nuevo objeto, que contiene un id (utilizando la función uuid) 
        // y todas las caracterísiticas del character enviado (eso representa el spread operator ()...)) 
    const newCharacter:Character={id:uuid(), ...character};
    
    this.characters.push(newCharacter);
    console.log(newCharacter);
    
    
    };
    
    // onDeleteCharacter(index:number){
    // this.characters.splice(index,1);
    // }

    deleteCharacterById(id?:string){
        this.characters=this.characters.filter(character => character.id !== id)
    }
}

import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public characters: Character[] = [{
        name: "Krillin",
        power: 100,
        id: uuid(),
    },{
        name: "Goku",
        power: 10000,
        id: uuid(),
    },{
        name: "Vegeta",
        power: 200,
        id: uuid(),
    }];

    addCharacter( character:Character ):void {
        
        const newCharacter: Character = {
            id: uuid(),
            ...character, // Copy all the properties
        }
        
        this.characters.push(newCharacter);
    }

    deleteCharacterById( id:string ):void {
        this.characters = this.characters.filter( character => character.id !== id );
        // return an array with the items that respect the condition 
    }

}
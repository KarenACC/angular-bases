import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

// el valor de esta property es el que va a ser enviado al componente hijo
// Se asignará el valor (un arreglo de objetos) a la propiedad "characterList" y que utiliza el decorador @Input
export class MainPageComponent {
    constructor(private dbzService:DbzService) {}
        get characters():Character[]{
            return [...this.dbzService.characters]
        }
        
        onDeleteCharacter(id:string):void {
            this.dbzService.deleteCharacterById(id);
        }

        onNewCharacter(character: Character):void{
            this.dbzService.addCharacter(character);
        }
    }


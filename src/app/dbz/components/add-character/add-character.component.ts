import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

// El decorador @Output en Angular se utiliza para emitir eventos personalizados desde un componente hijo hacia su componente padre. 
// Se coloca sobre el evento que será emitido y necesita instanciar un EventEmitter.
// Entre los <> debe ir el tipo de dato que se va a recibir 
@Output()
  onNewCharacter:EventEmitter <Character> = new EventEmitter(); 

  character: Character= {
    name: '',
    power:0
  };

  emitCharacter():void{
    console.log(this.character);
    if(this.character.name.length=== 0) return;

    // usar el .emit al llamar el evento personalizado que creé con el decorador @output
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};

    
  }

}

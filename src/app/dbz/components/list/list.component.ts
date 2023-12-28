import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  // El decorador @Input dice que el componente (en este caso, ListComponent) 
  // puede recibir una property (en este caso, llamada characterList)
  // Si no se envía nada, lo que incluya la property será el valor por defecto (recomendable poner un valor vacío)
  // Este decorador es usado en el componente hijo
  characterList: Character[] = [
    {
      name: 'Trunks',
      power:10
    }];
  
  @Output()
  onDelete:EventEmitter <string> = new EventEmitter(); 

  onDeleteCharacter(id?:string):void{
    if (!id) return;
    console.log({id});
    this.onDelete.emit(id);
    
  }

}

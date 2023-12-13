import {Component} from "@angular/core"

@Component({
    selector: 'app-counter',
    template: `

        <h2>Hola, counter</h2>
        <p>Counter: {{counter}}</p>
        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `

})
export class CounterComponent {
    counter: number = 10

    increaseBy(value:number): void{
        this.counter += value
      }
    
      reset(){
        this.counter = 10;
      }
    
}
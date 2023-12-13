import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroesList:string[]= ['Thor', 'Spiderman', 'Superman', 'Batman', 'Hulk']
  deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroesList.pop();
  }
}

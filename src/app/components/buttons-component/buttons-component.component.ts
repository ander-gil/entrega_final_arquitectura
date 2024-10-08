import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-component',
  standalone: true,
  imports: [],
  templateUrl: './buttons-component.component.html',
  styleUrl: './buttons-component.component.css'
})
export class ButtonsComponentComponent {

  constructor( private router: Router) { }

  navegar(seccion:string){
    this.router.navigate([`/${seccion}`]);
  }

}

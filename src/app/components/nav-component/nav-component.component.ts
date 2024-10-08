import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.css'
})
export class NavComponentComponent {

}

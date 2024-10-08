import { Component } from '@angular/core';
import { forumPosts } from '../../../assets/forum-data';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent {

  forumPosts = forumPosts;
}

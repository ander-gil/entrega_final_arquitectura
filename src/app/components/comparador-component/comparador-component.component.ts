import { Component, OnInit } from '@angular/core';
import { ServicebannerAnimadoService } from '../../services/servicebanner-animado.service';
import { FormsModule } from '@angular/forms';
import { ForoComponentComponent } from '../foro-component/foro-component.component';

@Component({
  selector: 'app-comparador-component',
  standalone: true,
  imports: [FormsModule, ForoComponentComponent],
  templateUrl: './comparador-component.component.html',
  styleUrl: './comparador-component.component.css'
})
export class ComparadorComponentComponent implements OnInit {
  razas :string[] = [];
  selectedRaza: string = '';
  images:string[] = [];
  constructor(private serviceDog:ServicebannerAnimadoService) { }
  ngOnInit(): void {
    this.obtenerRazas();
  }

  isModalOpen: boolean = false; 

  openModal() {
    this.isModalOpen = true; 
  }

  handleModalClose() {
    this.isModalOpen = false; 
  }

  obtenerRazas():void{
    this.serviceDog.getRazas().subscribe({
      next: (res) => {
        this.razas = Object.keys(res.message);
    },
      error: (error) => {
        console.error('Error:', error);
      },   
    });
  }

  onSelectRaza():void{
    if(this.selectedRaza){
      this.serviceDog.getselectedRazas(this.selectedRaza).subscribe({
        next: (res) => {
          this.images = res.message;
        },
        error: (error) => {
          console.error('Error:', error);
        },
      })
    }
  }

}

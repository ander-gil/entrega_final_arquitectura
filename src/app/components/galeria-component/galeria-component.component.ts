import { Component } from '@angular/core';
import { ServicebannerAnimadoService } from '../../services/servicebanner-animado.service';

@Component({
  selector: 'app-galeria-component',
  standalone: true,
  imports: [],
  templateUrl: './galeria-component.component.html',
  styleUrl: './galeria-component.component.css'
})
export  class GaleriaComponentComponent {
  dogImages: string[] = [];
  chunkedImages: string[][] = [];

  constructor(private bannerService:ServicebannerAnimadoService){}

  ngOnInit(): void {
    this.getImages();
  }
  
  getImages(): void {
    this.bannerService.getRandomDogImages().subscribe({
      next: (data) => {
        this.dogImages = data.message;
        this.chunkImages();
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  chunkImages(): void {
    const chunkSize = Math.ceil(this.dogImages.length / 4);
    for (let i = 0; i < this.dogImages.length; i += chunkSize) {
      this.chunkedImages.push(this.dogImages.slice(i, i + chunkSize));
    }
  }
}

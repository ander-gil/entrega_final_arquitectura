import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BannerAnimadoComponent } from '../banner-animado/banner-animado.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicebannerAnimadoService } from '../../services/servicebanner-animado.service';
import { NavComponentComponent } from "../nav-component/nav-component.component";

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [RouterOutlet, BannerAnimadoComponent, NavComponentComponent],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent  implements OnInit {
  dogImages: string[] = [];
constructor( private router: Router, private bannerService:ServicebannerAnimadoService){}

ngOnInit(): void {
  this.getImages();
}

getImages(): void{
  this.bannerService.getRandomDogImages().subscribe({
      next: (data)=>{
        this.dogImages = data.message;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
}

  
}


import { Component, Input, OnInit } from '@angular/core';
import { ServicebannerAnimadoService } from '../../services/servicebanner-animado.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-animado',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './banner-animado.component.html',
  styleUrl: './banner-animado.component.css'
})
export class BannerAnimadoComponent  {

  @Input() imagesDogs!: string[];

  constructor( private router: Router, private bannerService:ServicebannerAnimadoService){}

  navegar(seccion:string){
    this.router.navigate([`/${seccion}`]);
  }

  
}

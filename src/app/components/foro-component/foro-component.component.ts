import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-foro-component',
  standalone: true,
  imports: [],
  templateUrl: './foro-component.component.html',
  styleUrl: './foro-component.component.css'
})
export class ForoComponentComponent {
  @Input() showModal: boolean = false;
  @Output() modalClose = new EventEmitter<any>();

  toggleModal() {
    this.showModal = !this.showModal; // Cambiar el estado de showModal
  }

  closeModal() {
    this.showModal = false; // También puedes tener un método específico para cerrar el modal
  }
}

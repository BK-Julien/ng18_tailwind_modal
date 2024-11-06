import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  //Using Signal
  isModalOpen = signal(false);
  openModal(){
    this.isModalOpen.set(true);
  }
  closeModal(){
    this.isModalOpen.set(false);
  }

  closeModalOnOutsideClick(event: MouseEvent){
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('fixed')){
      this.closeModal();
    }
  }
}

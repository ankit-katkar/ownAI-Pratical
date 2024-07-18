import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [FormsModule, NgbAccordionModule, CommonModule, FormsModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  isActive:string = '';
  selectedFramework: string = ''; // Default selection
  angularInput: string = ''; // Angular specific input
  ionicInput: string = ''; // Ionic specific input

  isChecked = true;
  formEnabled: boolean = false;

  accordions: { id: number }[] = [];

  addAccordion() {
    const newId = this.accordions.length + 1;
    this.accordions.push({ id: newId });
  }

  onChecked(){

  }
}

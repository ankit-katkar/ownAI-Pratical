import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, NgbAccordionModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ownai-pratical';

  PurchaseOrderForm:FormGroup | any;
submitted = false;
isDisabled = false;
selectedFramework: string = '';
formEnabled: boolean = false;



constructor(private fb:FormBuilder){
  this.PurchaseOrderForm = fb.group({
    clientname:['', Validators.required],
    purchasetype:['', Validators.required],
    prchaseno:['', Validators.required],
    receivedon:['', Validators.required],
    receivedname:['', Validators.required],
    receivedemail:['', Validators.required],
    postartdate:['', Validators.required],
    poenddate:['', Validators.required],
    budget:['', Validators.required],
    currency:['', Validators.required],
  })
}

get f(){
  return this.PurchaseOrderForm.controls;
}

accordions: { id: number }[] = [];

addAccordion() {
  const newId = this.accordions.length + 1;
  this.accordions.push({ id: newId });
}


onreset(){
  this.PurchaseOrderForm.enable()
  this.PurchaseOrderForm.reset()
}

onSave(){
  this.submitted = true
  if(this.PurchaseOrderForm.valid){
    this.isDisabled = true;
    this.PurchaseOrderForm.disable()
  }
}

}

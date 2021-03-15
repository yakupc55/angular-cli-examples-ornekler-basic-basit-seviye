import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
       // if item has a value
     if(this.item.description == ''){
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem =true;
     }else{
       this.isNewItem =false;
     }
  }

  
  onSubmit(form: NgForm){
   this.formSubmit.emit(form.value);
   form.reset();
  }
}

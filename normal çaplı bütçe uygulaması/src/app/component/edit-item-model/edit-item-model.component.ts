import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {
@Input() item: BudgetItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(pudatedItem: BudgetItem){

  }

}

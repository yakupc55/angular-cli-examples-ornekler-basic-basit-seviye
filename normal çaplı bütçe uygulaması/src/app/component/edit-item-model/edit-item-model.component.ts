import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA)  public item: BudgetItem
  ) { }

  ngOnInit(): void {
    
  }

  onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem);
    console.log(updatedItem);
  }

}

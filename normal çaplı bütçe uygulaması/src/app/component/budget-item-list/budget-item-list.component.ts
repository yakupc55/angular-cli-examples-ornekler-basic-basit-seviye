import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems : any;
  @Output() delete: EventEmitter<BudgetItem> =new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem){
    // show edit modal
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width:'580px',
      data: item
    });

    dialogRef.afterClosed().subscribe( result =>{
      // check if result has a value
      if(result){
          // replace the item with the updated/submitted item from the form
          this.budgetItems[this.budgetItems.indexOf(item)] =result;
      }
    });
  }

}

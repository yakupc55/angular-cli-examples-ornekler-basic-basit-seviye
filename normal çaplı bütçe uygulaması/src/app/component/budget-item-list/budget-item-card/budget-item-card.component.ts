import { BudgetItem } from './../../../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() xButtonClick: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonclick(){
    console.log("card kısmı çalışıyor");
    this.xButtonClick.emit();
  }
}

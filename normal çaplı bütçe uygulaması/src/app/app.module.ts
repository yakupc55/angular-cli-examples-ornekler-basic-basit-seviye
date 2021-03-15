import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { browser } from 'protractor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { AddItemFormComponent } from './component/add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './component/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './component/budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModelComponent } from './component/edit-item-model/edit-item-model.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

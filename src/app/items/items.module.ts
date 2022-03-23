import { AuthGuard } from './../_auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatStepperModule} from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { ItemAddEditComponent } from './item-add-edit/item-add-edit.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsListItemComponent } from './items-list-item/items-list-item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent , canActivate: [AuthGuard] },
  { path: 'item-edit/:id', component: ItemEditComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    CdkStepperModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemsListItemComponent,
    ItemEditComponent,
    ItemAddEditComponent,
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
 }]
})
export class ItemsModule { }

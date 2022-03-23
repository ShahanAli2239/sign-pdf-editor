import { Component, OnInit } from '@angular/core';
import { ItemModel } from './_models/item.model';
import { Observable, Subject,throwError, of , BehaviorSubject} from 'rxjs';
import { ItemsService } from './_services/items.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
 }]
})
export class ItemsComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;

  constructor(
    private itemsService: ItemsService
  ) { }

  isShow = false;
 
  showDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

}

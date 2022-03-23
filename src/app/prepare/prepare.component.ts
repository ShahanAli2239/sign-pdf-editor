import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css']
})
export class PrepareComponent implements OnInit {

  showFiller = false;
  events: string[] = [];
  opened: boolean;
  dragPosition = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }
  
  changePosition() {
    this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
  }
  
}

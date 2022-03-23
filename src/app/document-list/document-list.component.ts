import { Component, OnInit } from '@angular/core';
import { AddDocumentService } from 'src/app/add-document.service';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private addDocumentService: AddDocumentService) 
  { 
    this.addDocumentService.getData().subscribe(data =>{
      console.log(data);
    } )

  }

  ngOnInit(): void {
  }

}

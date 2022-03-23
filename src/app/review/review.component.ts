import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  FormData: FormGroup ;
  remainingSubjectText: any;
  remainingMessageText: any;
  subject: any;
  message: any;
  
  constructor(private builder: FormBuilder) { }
  

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required])
      })
  }
  
  subjectChange(subject) {
    this.remainingSubjectText = 1000 - subject;
    return this.remainingSubjectText;
   }

   messageChange(message) {
    this.remainingMessageText = 1000 - message;
    return this.remainingMessageText;
   }


  
}

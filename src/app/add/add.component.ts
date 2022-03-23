/*import { Component, OnInit } from '@angular/core';
import { AddDocumentService } from 'src/app/add-document.service';
  
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
  
    // Inject service 
    constructor(private addDocumentService: AddDocumentService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.addDocumentService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
}*/

import { Component, ViewChild, ElementRef } from "@angular/core";
import { AddDocumentService } from 'src/app/add-document.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = [];
  file: File = null;
  docProfile: [''];
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable

  constructor(private addDocumentService: AddDocumentService, private http: HttpClient) { }

  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
}
 
  // OnClick of button Upload
  onUpload($event) {
    this.loading = !this.loading;
    console.log(this.file);
    this.addDocumentService.upload(this.file).subscribe(
        ($event: any) => {
            if (typeof ($event) === 'object') {

                // Short link via api response
                this.shortLink = $event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
    this.file = <File>$event.target.files[0];
    const filedata= new FormData();
    filedata.append('document', this.file, this.file.name);
    this.http.post('http://json-schema.org/draft-04/schema#', filedata).subscribe(res=>{
      console.log(res);
    })
}


  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
    this.file = <File>$event.target.files[0];
    const filedata= new FormData();
    filedata.append('document', this.file, this.file.name);
    this.http.post('http://json-schema.org/draft-04/schema#', filedata).subscribe(res=>{
      console.log(res);
    })
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event) {
    this.prepareFilesList($event.target.files);
    console.log($event.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
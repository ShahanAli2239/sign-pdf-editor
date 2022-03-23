import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddDocumentService {
    
  // API url
  baseApiUrl = "https://file.io"
    
  constructor(private http:HttpClient) { }
  
  getData(){
    let url = 'https://schema.postman.com/json/collection/v2.1.0/collection.json';
    return this.http.get(url)
  }
  // Returns an observable
  upload(file):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, formData)
  }
}
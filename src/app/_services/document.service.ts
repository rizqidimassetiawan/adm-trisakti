import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends BaseService {

  namespace = "document";
  
  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getDocuments(): Observable<any> {
    return this.getApi('fake-data/document-list_id.json');
  }
}

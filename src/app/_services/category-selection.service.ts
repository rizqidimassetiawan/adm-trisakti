import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorySelectionService extends BaseService {

  namespace = "category_selection";
  
  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getCategorySelection(): Observable<any> {
    return this.getApi('fake-data/kategori-seleksi.json');
  }
}

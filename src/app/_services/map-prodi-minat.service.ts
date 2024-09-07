import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapProdiMinatService extends BaseService {

  namespace = "map_category_document";
  
  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getListMinat(): Observable<any> {
    return this.getApi('fake-data/list-minat.json');
  }
  getListProdi(): Observable<any> {
    return this.getApi('fake-data/prodi-list_id.json');
  }
  getListMap(): Observable<any> {
    return this.getApi('fake-data/map-prodi-category.json');
  }
  // simpanData(e:any): Observable<any> {
  //   return this.getApi('assets/fake-data/db.json',e);
  // }
}

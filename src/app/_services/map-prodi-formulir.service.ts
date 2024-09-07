import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapProdiFormulitService extends BaseService {

  namespace = "map_prodi_formulir";
  
  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  getListProdi(): Observable<any> {
    return this.getApi('fake-data/prodi-list_id.json');
  }
  getListMap(): Observable<any> {
    return this.getApi('fake-data/map-prodi-formulir.json');
  }
  // simpanData(e:any): Observable<any> {
  //   return this.getApi('assets/fake-data/db.json',e);
  // }
}

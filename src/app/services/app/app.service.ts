import { Injectable } from '@angular/core';
import { HttpsService } from '../https/https.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpsService {

  public PLAYER = 'player';
  public PRODUCTS = 'products';

  constructor(public http: HttpClient) {
    super();
  }

  public getPlayer(params: any = {}): Observable<any> {
    return this.get(this.http, `${this.PRODUCTS}`, params);
  }

  public onPlay(params: any = {}): Observable<any> {
    return this.post(this.http, `${this.PLAYER}`, params);
  }





  // public uploadFile(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   const req = new HttpRequest('POST', `${this.rootUrl}file/file`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }



  // public putProjects(imageFile: File, params: any = {}): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('ImageFile', imageFile);
  //   formData.append('id', params.id);
  //   formData.append('location.x', params.locationX);
  //   formData.append('location.y', params.locationY);
  //   formData.append('name', params.name);
  //   formData.append('description', params.description);
  //   formData.append('responsibleOrganizationId', params.responsibleOrganizationId);
  //   formData.append('categoryId', params.categoryId);
  //   formData.append('contractorId', params.contractorId);
  //   formData.append('districtId', params.districtId);
  //   formData.append('successMessage', 'true');
  //   const req = new HttpRequest('PUT', `${this.rootUrl}${this.PROJECTS}`, formData, {
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }



 




}


import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CheckListItem } from '../../models/CheckListItem';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckListItemsService {

  private test;
  // private api = 'api/checklistitems';
  private api = 'http://php-nesnirpnafetsbeep930381.codeanyapp.com/api/checklistitems';

  constructor(private http: Http) { }

  getCheckListItems(): Observable<CheckListItem[]> {
    return this.http.get(this.api).map(checkListItems => checkListItems.json());
  }

  getCheckListItem(id: number): Observable<CheckListItem> {
    return this.http.get(this.api + '/' + id).map(checkListItem => checkListItem.json());
  }

  createCheckListItem(checkListItem): Observable<CheckListItem> {
      return this.http.post(
          this.api,
          JSON.stringify(checkListItem)
        ).map(newCheckListItem => newCheckListItem.json());
  }

  updateCheckListItem(checkListItem: CheckListItem): Observable<CheckListItem> {
    return this.http.post(
      this.api  + '/' + checkListItem.id,
      JSON.stringify(checkListItem)
      ).map((res: Response) => res.json());
  }

  deleteCheckListItem(checkListItem: CheckListItem): Observable<Response> {
    return this.http.delete(this.api  + '/' + checkListItem.id).map((res: Response) => res.json());
  }
}


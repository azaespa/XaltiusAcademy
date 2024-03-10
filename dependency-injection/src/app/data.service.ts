import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data = new Subject<any>();

  constructor() {}

  sendData(_data: any) {
    this.data.next(_data);
  }
}

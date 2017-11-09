
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class TrailInfoService {
  private data:any;
  constructor(){
    this.data = null;
  }
  setData(newData){
    this.data = newData;
  }
  getData(){
    return this.data;
  }
}

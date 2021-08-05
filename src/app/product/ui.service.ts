import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showUpdateProd:boolean=false;
  private subject = new Subject<any>();

  constructor() { }

  toggleUpdateProd():void{
    this.showUpdateProd=!this.showUpdateProd;
    this.subject.next(this.showUpdateProd);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}

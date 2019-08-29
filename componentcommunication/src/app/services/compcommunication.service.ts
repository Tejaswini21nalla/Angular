import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompcommunicationService {
  private subject = new Subject<any>();
  sendName( name: string) {
      this.subject.next({Name: name});
  }
  receiveName(): Observable<any> {
      return this.subject.asObservable();
  } 

  constructor() { }
}

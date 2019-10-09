import { Injectable } from '@angular/core';
import { Employee }from './empolyee.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
emp:Employee[]=[];
id:number=1;
constructor() { }
create(e:Employee){
  e.id=this.id;
  ++this.id;
  this.emp.push(e);

}
}

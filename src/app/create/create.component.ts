import { Component, OnInit } from '@angular/core';
import { Employee } from '../empolyee.modal';
import { DataService } from '../data.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id:number;
  name:string;
  address:string;
  phone:string;
  dob:string;
  degree:string;
  marks:string;
  stream:string;
  college:string;

  newEmployee: Employee;
  constructor(private svc:DataService) { }

  ngOnInit() {
  }
 createdata(){
   
   ++this.id;
   this.newEmployee= new Employee(this.id, this.name, this.address, this.phone, this.dob, this.degree, this.marks, this.stream,this.college);
   console.log(this.newEmployee);
   this.svc.create(this.newEmployee);
console.log(this.newEmployee);   
   this.reset();
 }
reset(){
  this.name="";
  this.address="";
  this.phone="";
  this.dob="";
  this.degree="";
  this.marks="";
  this.stream="";
  this.college="";
  
}
}

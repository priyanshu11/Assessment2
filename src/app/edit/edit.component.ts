import { Component, OnInit } from '@angular/core';
import { Employee }from '../empolyee.modal';
import { DataService } from '../data.service';

import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  emp: Employee;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.emp = this.svc.emp[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  editemp() {
    this.svc.emp[this.svc.emp.indexOf(this.emp)] = this.emp;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
   
  }
}

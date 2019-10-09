import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee }from '../empolyee.modal';
import { ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
emp:Employee;
  constructor(private svc:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.emp = this.svc.emp[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }
  deleteentry(){
    this.svc.emp.splice(this.svc.emp.indexOf(this.emp), 1);
}
}

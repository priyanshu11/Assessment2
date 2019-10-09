import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Employee } from '../empolyee.modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  emp:Employee[]=[];
  id:number=1;

  constructor(public svc:DataService) { }

  ngOnInit() {
    this.emp=this.svc.emp;
  }

}
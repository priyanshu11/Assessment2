import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../empolyee.modal'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
employee:Employee;
empId:number;
  constructor(private svc:DataService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.emp.forEach(element=>{
      if(element.id==this.empId){
        this.employee=element;
  }

});
}
}

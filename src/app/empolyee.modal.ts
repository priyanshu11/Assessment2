export class Employee{
    id:number;
    name:string;
    dob:string;
    address:string;
    phone:string;
    degree:string;
    marks:string;
    stream:string;
    college:string;

    
    constructor(id:number,name:string,dob:string,address:string,phone:string,degree:string,marks:string,stream:string,college:string) {
       this.id=id;
        this.name=name;

        this.dob=dob;
        this.address=address;
        this.phone=phone;
        this.degree=degree;
        this.marks=marks;
        this.stream=stream;
        this.college=college;
    }
}
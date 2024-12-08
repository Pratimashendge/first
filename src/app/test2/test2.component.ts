import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component  {
test2Arr =[{
	city :"Pune",
	pincode:1122,
},
{
	city :"Mumbai",
	pincode:2233,
},
{
	city :"Banglore",
	pincode:3344,
},
{
	city :"Nagpur",
	pincode:4455,
}
]
  
}

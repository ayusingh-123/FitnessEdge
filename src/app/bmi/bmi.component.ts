import { Component, OnInit } from '@angular/core';
declare const findBMI: any;
declare const clear:any;

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  BMI(){
    findBMI();
  }

  CLR(){
    clear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

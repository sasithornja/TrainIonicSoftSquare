import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class Page1Component  implements OnInit {

  constructor() { }
  
  weight!:number;
  height!:number;
  bmi:number=0;
  bmiLV!:string;
  public alertButton = ['OK'];
  ngOnInit() {}
  BMICal(){
    this.bmi = this.weight/ (this.height*this.height)
    if(this.bmi < 18.5){
      this.bmiLV ='Underweight'
    }else if(this.bmi >= 18.5 && this.bmi<=24.9){
      this.bmiLV ='Normal'
    }else if(this.bmi > 24.9 && this.bmi<=29.9){
      this.bmiLV ='Overweight'
    }else if(this.bmi > 29.9 && this.bmi<=34.9){
      this.bmiLV ='Obese'
    }else if(this.bmi > 34.9){
      this.bmiLV ='Extremely Obese'
    }
  }
}

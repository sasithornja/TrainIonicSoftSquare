import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
 
})
export class Page2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}
  weight!:number;
  height!:number;
  age!:number;
  bmr:number=0;
  gender:string='';
  public alertButtonBMR = ['OK'];
  BMRCal(){
    console.log(this.gender)
    console.log(this.bmr)
    if(this.gender == "male"){
      this.bmr = (10 * this.weight) + (6.25 * (this.height*100)) - (5 * this.age) + 5;
    }else if(this.gender == "female"){
      this.bmr = (10 * this.weight) + (6.25 * (this.height*100)) - (5 * this.age) - 161;
    }
  }
}

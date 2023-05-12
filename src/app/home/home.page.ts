import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule,FormsModule,CommonModule],
})
export class HomePage {
  constructor(private router: Router) {}
  
  //Example 2
  isInputEnableLine: boolean = false;
  isInputEnableFB: boolean = false;
  isInputEnableIG: boolean = false;
  
  //Example 3
  name!:string;
  age!:number;
  gender!:string;
  color!:string;
  food!:string;
  phone!:string;
  line!:string;
  fb!:string;
  ig!:string;
  showData(){
    console.log('Name:', this.name);
    console.log('Age:', this.age);
    console.log('Gender:', this.gender);
    console.log('Color:', this.color);
    console.log('Food:', this.food);
    console.log('Phone Number:', this.phone);
    console.log('Line:', this.isInputEnableLine,this.line,);
    console.log('Facebook:', this.isInputEnableFB,this.fb);
    console.log('Instagram:', this.isInputEnableIG,this.ig);
  }

  //Example 4
  navigateToPage1(){
    this.router.navigate(['/page1']);
  }

}

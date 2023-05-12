import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  constructor(
    private router : Router, 
  ){

  }
  navigateToPage1(){
    this.router.navigate(['/page1']);
  }
  navigateToPage2(){
    this.router.navigate(['/page2']);
  }
  navigateToPage3(){
    this.router.navigate(['/page3']);
  }
}

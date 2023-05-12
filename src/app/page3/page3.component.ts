import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class Page3Component  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'final-project-angular';
 
  constructor(private serviceCount: ProductService){}
  ngOnInit() {


    }
    
 
}

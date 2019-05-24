import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {
  count: number;
  
  constructor(private productsservice :ProductService) { }
  cardss=this.productsservice.cards.length;
  
  characters =[];
  
  

  ngOnInit() {
    this.productsservice.observableCount.subscribe((param) => {
      console.log(param);
      this.count = param;
  })
  // search
  for (let i = 0; i < this.cardss; i++) {
    this.characters.push(this.productsservice.cards[i].name)
  }
  
    
  
}

}

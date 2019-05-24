import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent implements OnInit {

  constructor(private productsservice :ProductService,private cartproduct:CartService) { }
  cart=[];
  public result = [];
  ngOnInit() {
   this.cart=this.cartproduct.productsCart;
    console.log(this.cart);
    
    const map = new Map();
    for (const item of this.cart) {
    if(!map.has(item.id)){
        map.set(item.id, true);    // set any value to Map
        this.result.push(
          item
        );
    }
}
console.log(this.result)
}
}

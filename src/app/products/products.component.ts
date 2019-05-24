import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products=<any>[];
  card: any;
  constructor(private productsservice :ProductService,private router:Router,private cartproduct:CartService) { }

  ngOnInit() {
    this.products=this.productsservice.cards;
    
    }
    showDetails(card){
      console.log(card)
      // this.router.navigate(['/detailsproduct',this.card])
      this.router.navigate(['/products',card.id]);
      this.cartproduct.add(card);
      this.cartproduct.productdetails=card;
      // number cart
      this.cartproduct.cartNumber=this.card;
    }
   
}

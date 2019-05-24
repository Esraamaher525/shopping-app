import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.scss']
})
export class DetailsproductComponent implements OnInit {
  public views;
  public productDetails;
  count:number;

  constructor(private cartproduct:CartService,private products :ProductService) { }

  ngOnInit() {
   
  this.products.observableCount.subscribe((param)=>{
    console.log(param);
    this.count=param;
   
  })
  this.productDetails =this.cartproduct.productdetails;
  console.log(this.productDetails)

}
addcart(val){
 
  let intval=+val;
  this.count=this.count + intval;
  this.products. changeCountValue(this.count)

    
}
}

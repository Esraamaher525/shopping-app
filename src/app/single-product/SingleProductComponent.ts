import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public listProduct = <any>[];
  @Input()
  public item;
  count: number;
  constructor(private products: ProductService) { }
  ngOnInit() {
    this.listProduct = this.products.cards;
    console.log(this.listProduct);
    this.products.observableCount.subscribe((param) => {
      console.log(param);
      this.count = param;
    });
  }
  addcart(item) {
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  public cartNumber;
  public productsCart=[];
  public productdetails={};
  public selectedItem=[];
  public filtered =[];
  add(product){
      this.productsCart.push(product);
      console.log(this.productsCart)
    //   for(var arr in this.productsCart){
    //     for(var filter in this.filtered){
    //         if(this.productsCart[arr].id == this.filtered[filter].id){
    //            filtered.push(myArray[arr].userid);
    //           }
    //     }
    //  }

      // if(this.selectedItem.length=0){
      //   product.numberproduct=1
      // }
  }
}

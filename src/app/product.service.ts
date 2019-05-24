import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public cards=[
    {
      image :'../../assets/img/bread.jpg',
      name:"bread",
      category:"breads",
      price:"$22.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:6,
      numberproduct:0
    },
    {
      image :'../../assets/img/milk.jpg',
      name:"biscuete",
      category:"Biscuits",
      price:"$22.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:7,
      numberproduct:0
    },
    {
      image :'../../assets/img/little.jpg',
      name:"biscuete",
      category:"Biscuits",
      price:"$22.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:8,
      numberproduct:0
    },
    {
      image :'../../assets/img/orange.jpg',
      name : "orange",
      category:"drinks",
      price:"$10.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:9,
      numberproduct:0,

    },
   
    {
      image :'../../assets/img/oran.jpg',
      name : "orange",
      category:"fruits",
      price:"$10.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:1,
      numberproduct:0,

    },
  
    {
      image :'../../assets/img/pepsi.jpg',
      name:"pepsi",
      category:"drinks",
      price:"$10.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:3,
      numberproduct:0
    },
    {
      image :'../../assets/img/jam.jpg',
      name:"jam",
      category:"jam",
      price:"$10.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:4,
      numberproduct:0
    },
    {
      image :'../../assets/img/cola.jpg',
      name:"cola",
      category:"drinks",
      price:"$22.99",
      information:"default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions ",
      id:5,
      numberproduct:0
    },
   
  ];
  // part of count
  public subjectCount =new BehaviorSubject(0);
  observableCount=this.subjectCount.asObservable();
  changeCountValue(value){
    if(value>0){
    this.subjectCount.next(value);
    }else{
      console.log("sorry")
    }
   
  }

}

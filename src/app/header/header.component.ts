import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public usermodel={
    name:"",
    password:""
  };
  onSubmit(userform){
    console.log(userform)
  }

  constructor() { }

  ngOnInit() {
  }

}

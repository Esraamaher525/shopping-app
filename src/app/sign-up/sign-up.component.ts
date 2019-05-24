import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { FormGroup } from '@angular/forms';
import { Users} from '../users';
import { Router } from '@angular/router';
// import { ImageService } from '../ImageServiceService';
// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  allEmail=[];
  public email;
  public test:boolean;
  userModel={
    username:"",
    password: "",
    conPassword:"",
    image:"",

  }
  

  constructor(private _enrliimentService:EnrollmentService,private router:Router) { }
  onSubmit(userform){
    console.log(userform)
    this._enrliimentService.enroll(this.userModel).subscribe(
      data => console.log('success',data),
      error => console.log('error',error),
    )
  
  }

  ngOnInit() {
  }
  /*--------------------email is unique------------------*/
  uniqueEmail(username){
    console.log(username)
    this.email=username;
    // localStorage.setItem("Email",username);
    if(localStorage.getItem("Email")!=null){
      this.allEmail=(JSON.parse(localStorage.getItem("Email")));
    }
    // this.email=localStorage.getItem("Email");
    console.log(this.email)
    this.allEmail.forEach(element =>{
      if(this.email==element){
        this.test=false;
        alert("the email is used");
        this.router.navigate(['/signUp']);
      }
    })
    console.log(this.allEmail)
    if(this.test!==false){
      this.allEmail.push(this.email);
      this.router.navigate(['/products']);
    }
    this.test=true;
    localStorage.setItem("Email", JSON.stringify(this.allEmail));
   
    
    

  }
  
}

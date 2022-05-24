import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postService } from '../services/postService';
 import { IuserRegister ,IUserLogin} from '../interfaces/IuserRegister';
 import { interval, Subscription } from 'rxjs';
 import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-wellcome-coponent',
  templateUrl: './wellcome-coponent.component.html',
  styleUrls: ['./wellcome-coponent.component.css']
})
export class WellcomeCoponentComponent implements OnInit {
  inuserRegister:IuserRegister={};//={userName:"",passwprd:"",Id:"066002593",Account:""};
  // inuserRegister:any={};
  message!:string;
  subscription?: Subscription;
  constructor(private router:Router,private _postService:postService,public x:HttpClient) {
    this.x.get("http://localhost:4200/assets/users.json").subscribe((data:any)=>
    {console.log(data)});
   }
  
  ngOnInit(): void {
    
  }
  startLogin():void{
    let userLogin:IUserLogin={userName:this.inuserRegister.userName,passwprd:this.inuserRegister.passwprd}
    let i = 1;
let max = 1;
const source = interval(1);

this.subscription = source.subscribe((val) => {
  if(i>10){
    i=1;
  }
  userLogin.userName="zzz"+i;userLogin.passwprd="12345"
i++;
max++;
if(max>1000){
this.subscription?.unsubscribe();
}
 this._postService.doPost("Login/signin",userLogin).subscribe(
  (response: any) =>{
    //if(max/100==0){
      console.log(response);
    //}
   
   
  })});
   
  }
  startMeet():void{
    //this.router.navigateByUrl('/meet');
   
    this._postService.doPost("UserRegister/signin",this.inuserRegister).subscribe(
      (response: any) =>{
       
        switch (response) {
          case 0:
              console.log("user saved.");
              break;
          case 1:
              console.log("user exist");
              break;
          case 2:
              console.log("bad username or password");
              break;
         
          default:
              console.log("No such day exists!");
              break;
      }



     });
  }
}

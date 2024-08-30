import { Component, Input } from '@angular/core';
import { TrainService } from './service/train.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  registerObj:any={};
  loginObj:any={};
 loggedUser:any;
  constructor(private TrainService:TrainService) {
    console.log(this.loggedUser);
    
    const localData=localStorage.getItem('token');
    if(localData!=null){
      this.loggedUser=JSON.parse(localData);
    }
  }
  gitOpenRegistration() {
    const model = document.getElementById('registerModel');
    if(model!=null){
      model.style.display = 'block';
    
    }
  }

  gitOpenLogin() {
    const model = document.getElementById('loginModel');
    if(model!=null){
      model.style.display = 'block';
      
    }
  }

  gitCloseRegistration() {
    const model = document.getElementById('registerModel');
    if(model!=null){
      model.style.display = 'none';
    }
  }

  gitCloseLogin() {
    const model = document.getElementById('loginModel');
    if(model!=null){
      model.style.display = 'none';
    }
  }
  onRegister(){
    this.TrainService.getNewCustomer(this.registerObj).subscribe((res:any)=>{
      console.log("res",res);
    if(res.result){
      alert('Register success')
    }else{
      alert(res.message)
    }
    })
    
  }

  onLogin(){
    this.TrainService.getLoginCustomer(this.loginObj).subscribe((res:any)=>{
      console.log("res",res);
    if(res.result){
      alert('Login success')
      localStorage.setItem('token',JSON.stringify(res.data));
      this.loggedUser=res.data
      console.log(this.loggedUser);
      
    }else{
      alert(res.message)
    }
    })
    
  }


}

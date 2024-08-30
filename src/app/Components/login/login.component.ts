import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    

  constructor() { }
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


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {
  @Output()  Registration = new EventEmitter();
  @Output()  Login = new EventEmitter();




 


  gitRegistration(){
    this.Registration.emit();
  }
  gitLogin(){
    this.Login.emit();
  }

 

}

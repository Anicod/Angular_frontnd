import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit(): void {
      
  }
  

  
    

      // stop here if form is invalid
      login(){
        let data={
          email:'anim100@gmail.com',
          password: 'ani@100'
        }
        this.user.login(data).subscribe((response:any)=>{
          console.log('token',response.id)
          localStorage.setItem('token',response.id)
        })

      }
     
}


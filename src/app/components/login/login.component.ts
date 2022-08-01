import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      el: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
    })   
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.valid) {
          console.log("valid data",this.registerForm.value);
          let data={
            email:this.registerForm.value.el,
            password: this.registerForm.value.pwd,
            service:"advance"
          }
          this.user.login(data).subscribe((response:any)=>{
            console.log("login============",response)
          })
    }
      
      else{
        console.log("invalid data",this.registerForm.value);
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fn: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]{2,30}$/)]],
      ln: ['', Validators.required],
      el: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      cp: ['', Validators.required],


    }) 
  }
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

      if (this.registerForm.valid) {
          console.log("data valid", this.registerForm.value);
          let  data={
            
              
            firstName: this.registerForm.value.fn,
            lastName: this.registerForm.value.ln,
            email:this.registerForm.value.el,
            password: this.registerForm.value.pwd,
            service:"advance"
            }
            this.user.register(data).subscribe((response:any)=>{
              console.log("register============",response)
            })
      }
      else{
        console.log("data invalid", this.registerForm.value);
      }   
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}

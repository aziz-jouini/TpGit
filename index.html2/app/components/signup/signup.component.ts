import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm= this.formBuilder.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:['',[Validators.minLength(3),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.minLength(3)],
      confirmPwd:[''],
    },
    {
     validators:MustMatch('password',"confirmPwd") 
    }
    )
  }
  

  signup(){
    console.log("here inyto signup  form",this.signupForm.value);
    
  }

}

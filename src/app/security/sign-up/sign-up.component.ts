import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from './../validator/custom-validators.service';
import { SecurityServiceService } from './../service/security-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
registerForm:any=FormGroup;
public loading = false;
submitted=false;
  constructor(private formBuilder:FormBuilder,private customValidator:CustomValidatorsService, private service:SecurityServiceService, private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.minLength(6),this.customValidator.validateUserName]],
      email: ['', [Validators.required,Validators.email, this.customValidator.validEmailChecker]],
      phone: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]]  
    }, {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register():any {
    this.loading=true;
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    this.service.registerUser(this.registerForm.value).subscribe(result=>{
      console.log(result) 
     
      if (result.response == 'Success') {
        this.loading=false;
        this.submitted = false;
        this.toastr.success('User Signup was Successful', result.success);
        this.router.navigate(["/login"])
      }
      
      else {
        error => {
          this.loading=false;
          this.submitted = false;
          this.toastr.error('User Signup Failed', 'Failure');
    
        }
      }
    },

    )

    }
}

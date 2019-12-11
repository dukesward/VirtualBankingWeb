import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  showLoading :boolean;
  status: boolean = true;
  submitForm(): boolean {
    this.status = true;
    for (const i in this.validateForm.controls) {
      console.log("form: ",this.validateForm.controls[i] )
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if(this.validateForm.controls[i].status=="INVALID"){
       this.status = false; 
      }
    }
    //this.showLoading =true
    if(this.status){
      this.showLoading =true
    }
    this.route.navigateByUrl('/home');
    return this.status;
  }

  constructor(private fb: FormBuilder,
    private route: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}

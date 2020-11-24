import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isShow: boolean = false;
  letbutton: string;
  name: string;
  email: any;
  password: any;
  confirmpassword: any;
  salonname:any;
  hide = true;
  phoneNumber:any;
  toppings = new FormControl();
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder) {
    if (!this.isShow) {
      this.letbutton = 'LOGIN';
    }
    else {
      this.letbutton = 'SIGNUP';
    }
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9 ]{10}$'), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.maxLength(8)]],
      salonname: ['', Validators.required],
    });
  }
  // constructor(private router: Router) {
  //   if (!this.isShow) {
  //     this.letbutton = 'LOGIN';
  //   }
  //   else {
  //     this.letbutton = 'SIGNUP';
  //   }
  // }

  ngOnInit(): void {

  }
  public procSubmit() {
    if (!this.isShow) {
      this.letbutton = 'SIGNUP';
      this.isShow = true;
    }
    else {
      this.letbutton = 'LOGIN';
      this.isShow = false;
    }
  }
  public submit() {

  }
  toppingList: string[] = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5'];
  get f() {
    return this.form.controls;
  }
  public onClose()
  {
    this.router.navigate(['home/dashboard']);
  }
}

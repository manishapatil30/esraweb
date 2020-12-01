import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow: boolean = false;
  letbutton: string;
  name: string;
  email: any;
  password: any;
  confirmpassword: any;
  salonname: any;
  hide = true;
  postData:any;
  vendorID:any;
  phoneNumber: any;
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    if (!this.isShow) {
      this.letbutton = 'SIGNUP';
    }
    else {
      this.letbutton = 'LOGIN';
    }
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

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
      this.letbutton = 'LOGIN';
      this.isShow = true;
    }
    else {
      this.letbutton = 'SIGNUP';
      this.isShow = false;
    }
  }
  public submit() {
    const body = {
      EmailID: this.email,
      Password: this.password,
    };
    this.http.post<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/adminuserlogin', body).subscribe((data => {
      console.log(data);
      this.postData=data.AdminUserID;
      this.vendorID=data.VendorID;
      if (data.Status === 1) {
        localStorage.setItem('usersid', this.postData);
        localStorage.setItem('vendorid', this.vendorID);
        alert('Login Successfully.');
        this.router.navigate(['home/details']);
        // window.scrollTo(0, 0);
      }
      else {
        alert('Error!please try again');
      }
    }), (error) => {
      console.log(error);
    });
  }
  get f() {
    return this.form.controls;
  }
  public onClose() {
    this.router.navigate(['home/dashboard']);
  }
  public onHomepage() {
    this.router.navigate(['home/dashboard']);
  }
}

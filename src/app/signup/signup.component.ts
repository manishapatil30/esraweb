import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  website:any;
  area:any;
  address:any;
  myDatePicker:any;
  description:any;
 selectedStart:any;
  openTime:any;
  closeTime:any;
  hide = true;
  phoneNumber:any;
  tableData:any;
  category:any;
  text:any;
  postData:any;
  vendorID:any;
  toppings = new FormControl();
 form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
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
      // confirmpassword: ['', [Validators.required, Validators.maxLength(8)]],
      salonname: ['', Validators.required],
      // toppings: ['', Validators.required],
      website: ['', Validators.required],
      area: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      openTime: ['', Validators.required],
      closeTime: ['', Validators.required],
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
    
 this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/categories').subscribe(data => {
          console.log(data);
          this.tableData=data.Categories;
          console.log(this.tableData);
        })
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
  public selectStart(event: any) {
    this.selectedStart = event.target.value;
    console.log(this.selectedStart);
  }
  public submit() {
    this.text=this.toppings.value;
    const body = {
      AdminName:this.name,
      EmailID: this.email,
      Password: this.password,
      ContactNo: this.phoneNumber,
      VendorName: this.salonname,
      Categories:this.text,
      Area:this.area,
      Website:this.website,
      Address:this.address,
      VendorDescription:this.description,
      OpenTime:this.openTime,
      CloseTime:this.closeTime
    };
    this.http.post<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/vendors', body).subscribe((data => {
      console.log(data);
       this.postData=data.EmailID;
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
  toppingList: string[] = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5'];
  get f() {
    return this.form.controls;
  }
  public onClose()
  {
    this.router.navigate(['home/dashboard']);
  }
  public onHomepage()
  {
    this.router.navigate(['home/dashboard']);
  }
}
